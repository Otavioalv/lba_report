// import * as FileSystem from "expo-file-system/legacy";
import Docxtemplater from "docxtemplater";
// import { Asset } from "expo-asset";
import fs from "node:fs";
import path from "node:path";
import PizZip from "pizzip";
import {
  addImageGallery /* addImageTables2 */,
} from "./add_image_gallery_test";
import { addSignature } from "./add_signature_test";

export async function generateTest() {
  const templatePath = path.resolve("assets/templates/report2.1/document.docx");

  const content = fs.readFileSync(templatePath, "binary");

  const zip = new PizZip(content);

  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  /* 
  doc.render({
    expeditions: [
      {
        expeditions_date: "04/11/2026",
        expeditions_code: "1.1.",
        expeditions_description: "Expedition activity",
        expeditions_workload: "20%",
      },
    ],

    data_collection: [],
    operation: [],
    monitoring: [],
    implementation: [],
    participations: [],
  });
   */

  doc.render({
    scholar_name: "Nome do usuario teste generate teste",
    image_gallery: "{{image_gallery}}",
    scholar_signature: "{{scholar_signature}}",
    expeditions: Array.from({ length: 5 }, (_, index) => ({
      expeditions_date: "04/11/2026",
      expeditions_code: `1.${index + 1}.`,
      expeditions_description: `Expedition activity ${index + 1}`,
      expeditions_workload: String(Math.floor(Math.random() * 10) + 1),
    })),
    data_collection: Array.from({ length: 5 }, (_, index) => ({
      data_collection_date: "04/11/2026",
      data_collection_code: `2.${index + 1}.`,
      data_collection_description: `Data collection activity ${index + 1}`,
      data_collection_workload: String(Math.floor(Math.random() * 10) + 1),
    })),
    operation: Array.from({ length: 5 }, (_, index) => ({
      operation_date: "04/11/2026",
      operation_code: `3.${index + 1}.`,
      operation_description: `Operation activity ${index + 1}`,
      operation_workload: String(Math.floor(Math.random() * 10) + 1),
    })),
    monitoring: Array.from({ length: 5 }, (_, index) => ({
      monitoring_date: "04/11/2026",
      monitoring_code: `4.${index + 1}.`,
      monitoring_description: `Monitoring activity ${index + 1}`,
      monitoring_workload: String(Math.floor(Math.random() * 10) + 1),
    })),
    implementation: [
      {
        implementation_date: "dd/mm/aaaa",
        implementation_code: `5.1.`,
        implementation_description: `NA`,
        implementation_workload: "0",
      },
    ],
    // implementation: Array.from({ length: 5 }, (_, index) => ({
    //   implementation_date: "04/11/2026",
    //   implementation_code: `5.${index + 1}.`,
    //   implementation_description: `Implementation activity ${index + 1}`,
    //   implementation_workload: String(Math.floor(Math.random() * 10) + 1),
    // })),
    participation: Array.from({ length: 5 }, (_, index) => ({
      participation_date: "04/11/2026",
      participation_code: `6.${index + 1}.`,
      participation_description: `Participation activity ${index + 1}`,
      participation_workload: String(Math.floor(Math.random() * 10) + 1),
    })),

    /* expeditions: [
      {
        expeditions_date: "04/11/2026",
        expeditions_code: "1.1.",
        expeditions_description: "Expedition activity",
        expeditions_workload: "5",
      },
    ], */

    /* eventos: [
      {
        data: "04/11/2026",
        suportDescription: "Primeira atividade Primeira atividadePrimeira atividadePrimeira atividadePrimeira atividade Primeira atividade Primeira atividade Primeira atividade Primeira atividade Primeira atividadePrimeira atividade Primeira atividade Primeira atividade Primeira atividade Primeira atividade Primeira atividade Primeira atividade",
      },
      {
        data: "05/11/2026",
        suportDescription: "Segunda atividade",
      },
      {
        data: "06/11/2026",
        suportDescription: "Terceira atividade",
      },
    ], */
  });

  const output = doc.toBuffer();

  const images = Array.from({ length: 10 }, (_, index) => ({
    path: `https://placehold.co/${Math.floor(Math.random() * (1000 - 50 + 1)) + 50}x${Math.floor(Math.random() * (1000 - 50 + 1)) + 50}/EEE/31343C.png`,
    caption: `Descrição da imagem`,
    type: "png" as const,
  }));


  // Gambiarra medonha (ALTERAR NO PRODUTO FINAL)
  let finalDocument = await addImageGallery(output, images);
  finalDocument = await addSignature(finalDocument, images[0]);

  const outputPath = path.resolve("relatorio_gerado.docx");

  fs.writeFileSync(outputPath, finalDocument);

  console.log(`Documento gerado: ${outputPath}`);
}

generateTest();

// export async function generateTest2() {
//   // 1. Carregar o template incluído no aplicativo
//   const asset = Asset.fromModule(require("./assets/templates/report1.2/document.docx"));

//   await asset.downloadAsync();

//   if(!asset.localUri) {
//     throw new Error("Não foi possível carregar o template.");
//   }

//   // 2. Ler o DOCX em Base64
//   const content = await FileSystem.readAsStringAsync(
//     asset.localUri,
//     {
//       encoding: FileSystem.EncodingType.Base64,
//     }
//   );

//   // 3. Abrir o DOCX
//   const zip = new PizZip(content, {
//     base64: true,
//   });

//   const doc = new Docxtemplater(zip, {
//     paragraphLoop: true,
//     linebreaks: true,
//   });

//   // 4. Preencher os dados
//   doc.render({
//     name: "Teste no Android",
//     GALERIA: "{{GALERIA}}",
//     eventos: [
//       {
//         data: "04/11/2026",
//         suportDescription: "Primeira atividade, Primeira atividade, Primeira atividade, Primeira atividade, Primeira atividade, Primeira atividadePrimeira atividadePrimeira atividadePrimeira atividadePrimeira atividade, Primeira atividade,Primeira atividadePrimeira atividadePrimeira atividadePrimeira atividadePrimeira atividade",
//       },
//       {
//         data: "05/11/2026",
//         suportDescription: "Segunda atividade",
//       },
//       {
//         data: "06/11/2026",
//         suportDescription: "Terceira atividade",
//       },
//     ],
//   });

//   // 5. Gerar DOCX em Base64
//   const output = doc.getZip().generate({
//     // type: "base64",
//     type: "uint8array",
//     compression: "DEFLATE",
//   });

//   // 6. Criar imagens de teste
//   const images = Array.from({ length: 20 }, (_, index) => ({
//     path: `https://placehold.co/${Math.floor(Math.random() * (1000 - 50 + 1)) + 50}x${Math.floor(Math.random() * (1000 - 50 + 1)) + 50}/EEE/31343C.png`,
//     caption: "Descrição da imagem",
//     type: "png" as const,
//   }));

//   // 7. Inserir as imagens no documento
//   const finalDocument = await addImageTables2(output, images);

//   // 6. Solicitar ao usuário onde salvar
//   const permission = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

//   if(!permission.granted) {
//     return null;
//   }

//   const fileName = `relatorio_teste_${Date.now()}.docx`;

//   const fileUri =
//     await FileSystem.StorageAccessFramework.createFileAsync(
//       permission.directoryUri,
//       fileName,
//       "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
//     );

//   // 7. Gravar o arquivo
//   await FileSystem.writeAsStringAsync(fileUri, finalDocument, {
//     encoding: FileSystem.EncodingType.Base64,
//   });

//   return fileUri;
// }
