// import fs from "node:fs";
import {
    patchDocument,
    PatchType,
    Table,
    TableRow,
    TableCell,
    Paragraph,
    ImageRun,
    WidthType,
    AlignmentType,
    TextRun,
} from "docx";

import { imageSize } from "image-size";
import { Image } from "react-native";

interface ImageItem {
    path: string;
    caption: string;
    type: "png" | "jpg";
}

export async function addImageTables(
    documentBuffer: Buffer,
    images: ImageItem[]
): Promise<Buffer> {


    const imageTables = await Promise.all (images.map(async (item, i) => {
        
        // const imageBuffer = fs.readFileSync(item.path);
        const imageBuffer = Buffer.from(
            await (await fetch(item.path)).arrayBuffer()
        );

        const imageSz = imageSize(imageBuffer);
        const ratio = imageSz.height / imageSz.width;
        const width = 580
        const height = Math.round(width * ratio);


        return new Table({
            width: {
                size: 100,
                type: WidthType.PERCENTAGE,
            },
            rows: [
                // Linha da imagem
                new TableRow({
                    children: [
                        new TableCell({
                            shading: {
                                fill: "D9D9D9",
                                type: "clear",
                            },
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new ImageRun({
                                            type: item.type,
                                            data: imageBuffer,
                                            transformation: {
                                                width: width,
                                                height: height,
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                // Linha da legenda
                new TableRow({
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Figura ${String(i + 1).padStart(2, "0")}. `,
                                            bold: true,
                                        }),
                                        new TextRun({
                                            text: `${item.caption}`,
                                        }),
                                    ]
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }));

    const galleryContent = imageTables.flatMap((table) => [
        table,
        new Paragraph(""),
    ]);

    const result = await patchDocument({
        outputType: "nodebuffer",
        data: documentBuffer,
        // placeholderDelimiters: {
        //     start: "{",
        //     end: "}",
        // },
        patches: {
            GALERIA: {
                type: PatchType.DOCUMENT,
                children: galleryContent,
            },
        },
    });

  return result;
}




export async function addImageTables2(
    documentBuffer: Uint8Array,
    images: ImageItem[]
): Promise<string> {
    const imageTables = await Promise.all(
        images.map(async (item, i) => {
            const response = await fetch(item.path);

            if(!response.ok) {
                throw new Error(`Erro ao carregar imagem: ${item.path}`);
            }

            const imageBuffer = new Uint8Array(
                await response.arrayBuffer()
            );

            const imageSize = await new Promise<{width: number;height: number;}>
                ((resolve, reject) => {
                    Image.getSize(
                        item.path,
                        (width, height) => resolve({ width, height }),
                        reject
                    );
                });

            const ratio = imageSize.height / imageSize.width;
            const width = 580;
            const height = Math.round(width * ratio);

            return new Table({
                width: {
                    size: 100,
                    type: WidthType.PERCENTAGE,
                },
                rows: [
                    // Linha da imagem
                    new TableRow({
                        children: [
                            new TableCell({
                                shading: {
                                    fill: "D9D9D9",
                                    type: "clear",
                                },
                                children: [
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        children: [
                                            new ImageRun({
                                                type: item.type,
                                                data: imageBuffer,
                                                transformation: {
                                                    width,
                                                    height,
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),

                    // Linha da legenda
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [
                                    new Paragraph({
                                        children: [
                                        new TextRun({
                                            text: `Figura ${String(i + 1).padStart(2, "0")}. `,
                                            bold: true,
                                        }),
                                        new TextRun({
                                            text: item.caption,
                                        }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            });
        })
    );

    const galleryContent = imageTables.flatMap((table) => [
        table,
        new Paragraph(""),
    ]);

    const result = await patchDocument({
        outputType: "base64",
        data: documentBuffer,
        patches: {
        GALERIA: {
            type: PatchType.DOCUMENT,
            children: galleryContent,
        },
        },
    });

    return result;
}

