import { AlignmentType, ImageRun, Paragraph, patchDocument, PatchType } from "docx";
import imageSize from "image-size";


interface ImageItem {
  path: string;
//   caption: string;
  type: "png" | "jpg";
}

export async function addSignature(
    documentBuffer: Buffer,
    image: ImageItem,
) {
    const imageBuffer = Buffer.from(await (await fetch(image.path)).arrayBuffer());

    const dimensions = imageSize(imageBuffer);
    const ratio = dimensions.height / dimensions.width;

    // verificar o tamanho da celula para ajustar. valor não é ajustavel de forma autmoatica
    // entao editar o tamanho manualmente. Se o tamanho da celula do arquivo se auterar, 
    // o valor de width pode não se adaptar corretamente, entao manter o maximo possivem 
    // o tamanho inalteravel
    const width = 290; 
    const height = Math.round(width * ratio);

    const signatureContent = [new Paragraph({
        alignment: AlignmentType.LEFT,
        children: [
            new ImageRun({
                type: image.type,
                data: imageBuffer,
                transformation: {
                    width,
                    height
                }
            })
        ]
    })];

    const result = await patchDocument({
        outputType: "nodebuffer",
        data: documentBuffer,
        patches: {
            scholar_signature: {
                type: PatchType.DOCUMENT,
                children: signatureContent
            }
        }
    });

    return result;
}
