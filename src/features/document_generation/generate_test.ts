import Docxtemplater from "docxtemplater";
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system/legacy";
// import fs from "node:fs";
// import path from "node:path";
import PizZip from "pizzip";
import {
  // addImageGallery,
  addImageGallery2,
} from "./add_image_gallery_test";
import { addSignature2 } from "./add_signature_test";

// export async function generateTest() {
//   const templatePath = path.resolve("assets/templates/report2.2/document.docx");

//   const content = fs.readFileSync(templatePath, "binary");

//   const zip = new PizZip(content);

//   const doc = new Docxtemplater(zip, {
//     paragraphLoop: true,
//     linebreaks: true,
//   });

//   /*
//   doc.render({
//     expeditions: [
//       {
//         expeditions_date: "04/11/2026",
//         expeditions_code: "1.1.",
//         expeditions_description: "Expedition activity",
//         expeditions_workload: "20%",
//       },
//     ],

//     data_collection: [],
//     operation: [],
//     monitoring: [],
//     implementation: [],
//     participations: [],
//   });
//    */

//   doc.render({
//     // project identification (report 2.1)
//     // project_contract_number: "10/2025",  // 10/2025
//     // project_bank_account: "12.123-1", // 12.345-6
//     // project_name: "FASE I: LBA-FLUX - Monitoramento do Ciclo do Carbono e Processos Biogeoquímicos na Amazônia por meio da Integração de Dados da Rede de Torres de Observação Meteorológica e Aplicação de Inteligência Artificial. ASSSSSSSSSSSSSSSSSSSSSSSSS SSSSSSSS S SDFGHG KO GOPKG DHOPGKGOPHK DFOPKGOPKD PA KPOSKOPK APOKAK POKGOPHKQ  OKPP  Okpo kgpoopkpo ghkpok ghpokdfop",   //FASE I: LBA-FLUX - Monitoramento do Ciclo do Carbono e Processos Biogeoquímicos na Amazônia por meio da Integração de Dados da Rede de Torres de Observação Meteorológica e Aplicação de Inteligência Artificial.
//     // project_type: "Pesquisa", // Pesquisa
//     // project_activity_period: "28/10/2025 a 28/10/2027",  // 28/10/2025 a 28/10/2027
//     // // project identification - classification
//     // project_classification_teaching: "☐", // ☐ ☒
//     // project_classification_research: "☒", // ☐ ☒
//     // project_classification_extension: "☐", // ☐ ☒
//     // project_classification_institutional_development: "☐", // ☐ ☒

//     // scholar info
//     scholar_name: "Nome do usuario teste generate teste",
//     scholar_cpf: "123.456.789-10",  // 123.456.789-10
//     scholar_rg: "12345678", // 12345678
//     scholar_email: "email.test@gmail.com",
//     scholar_phone: "(12) 34567-8910", // (12) 34567-8910
//     scholar_project_role: "Bolsista AT-V", // Bolsista AT-VI
//     scholar_contract_document: "Termo de Bolsa no. 0760/2046", // Termo de Bolsa no. 0760/2026
//     scholar_contract_type: "Pesquisa",  // Pesquisa
//     scholar_contract_period: "15/03/2026 a 14/09/2027", // 15/03/2026 a 14/09/2027
//     scholar_total_workload: "2880 horas", // 2880 horas

//     // activity identification
//     activity_installment_number: "1", // 1
//     activity_total_installments: "18",  // 18
//     activity_report_start_date: "15/03/2026", // 2026
//     activity_report_end_date: "14/04/2026", // 2026
//     activity_workload_80h: "☐",  // ☐ ☒
//     activity_workload_160h: "☒", // ☐ ☒

//     // images
//     image_gallery: "{{image_gallery}}",
//     scholar_signature: "{{scholar_signature}}",

//     // activities talbe
//     expeditions: Array.from({ length: 5 }, (_, index) => ({
//       expeditions_date: "04/11/2026",
//       expeditions_code: `1.${index + 1}.`,
//       expeditions_description: `Expedition activity ${index + 1}`,
//       expeditions_workload: String(Math.floor(Math.random() * 10) + 1),
//     })),
//     data_collection: Array.from({ length: 5 }, (_, index) => ({
//       data_collection_date: "04/11/2026",
//       data_collection_code: `2.${index + 1}.`,
//       data_collection_description: `Data collection activity ${index + 1}`,
//       data_collection_workload: String(Math.floor(Math.random() * 10) + 1),
//     })),
//     operation: Array.from({ length: 5 }, (_, index) => ({
//       operation_date: "04/11/2026",
//       operation_code: `3.${index + 1}.`,
//       operation_description: `Operation activity ${index + 1}`,
//       operation_workload: String(Math.floor(Math.random() * 10) + 1),
//     })),
//     monitoring: Array.from({ length: 5 }, (_, index) => ({
//       monitoring_date: "04/11/2026",
//       monitoring_code: `4.${index + 1}.`,
//       monitoring_description: `Monitoring activity ${index + 1}`,
//       monitoring_workload: String(Math.floor(Math.random() * 10) + 1),
//     })),
//     implementation: [
//       {
//         implementation_date: "dd/mm/aaaa",
//         implementation_code: `5.1.`,
//         implementation_description: `NA`,
//         implementation_workload: "0",
//       },
//     ],
//     // implementation: Array.from({ length: 5 }, (_, index) => ({
//     //   implementation_date: "04/11/2026",
//     //   implementation_code: `5.${index + 1}.`,
//     //   implementation_description: `Implementation activity ${index + 1}`,
//     //   implementation_workload: String(Math.floor(Math.random() * 10) + 1),
//     // })),
//     participation: Array.from({ length: 5 }, (_, index) => ({
//       participation_date: "04/11/2026",
//       participation_code: `6.${index + 1}.`,
//       participation_description: `Participation activity ${index + 1}`,
//       participation_workload: String(Math.floor(Math.random() * 10) + 1),
//     })),

//     /* expeditions: [
//       {
//         expeditions_date: "04/11/2026",
//         expeditions_code: "1.1.",
//         expeditions_description: "Expedition activity",
//         expeditions_workload: "5",
//       },
//     ], */

//     /* eventos: [
//       {
//         data: "04/11/2026",
//         suportDescription: "Primeira atividade Primeira atividadePrimeira atividadePrimeira atividadePrimeira atividade Primeira atividade Primeira atividade Primeira atividade Primeira atividade Primeira atividadePrimeira atividade Primeira atividade Primeira atividade Primeira atividade Primeira atividade Primeira atividade Primeira atividade",
//       },
//       {
//         data: "05/11/2026",
//         suportDescription: "Segunda atividade",
//       },
//       {
//         data: "06/11/2026",
//         suportDescription: "Terceira atividade",
//       },
//     ], */
//   });

//   const output = doc.toBuffer();

//   const images = Array.from({ length: 10 }, (_, index) => ({
//     path: `https://placehold.co/${Math.floor(Math.random() * (1000 - 50 + 1)) + 50}x${Math.floor(Math.random() * (1000 - 50 + 1)) + 50}/EEE/31343C.png`,
//     caption: `Descrição da imagem`,
//     type: "png" as const,
//   }));

//   // Gambiarra medonha (ALTERAR NO PRODUTO FINAL)
//   let finalDocument = await addImageGallery(output, images);
//   finalDocument = await addSignature(finalDocument, images[0]);

//   const outputPath = path.resolve("relatorio_gerado.docx");

//   fs.writeFileSync(outputPath, finalDocument);

//   console.log(`Documento gerado: ${outputPath}`);
// }

// generateTest();

export async function generateTest2() {
  // Carregar o template incluído no aplicativo
  const asset = Asset.fromModule(
    require("./assets/templates/report2.2/document.docx"),
  );

  await asset.downloadAsync();

  if (!asset.localUri) {
    throw new Error("Não foi possível carregar o template.");
  }

  // Ler o DOCX em Base64
  // Produto final, trasformar o template final em Base64, para transformar toda vez que for usar
  // Não mater o documento docx no produto  final. 
  const content = await FileSystem.readAsStringAsync(asset.localUri, {
    encoding: FileSystem.EncodingType.Base64,
  });

  // Abrir o DOCX
  const zip = new PizZip(content, {
    base64: true,
  });

  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  // Preencher os dados
  // doc.render({
  //   name: "Teste no Android",
  //   GALERIA: "{{GALERIA}}",
  //   eventos: [
  //     {
  //       data: "04/11/2026",
  //       suportDescription: "Primeira atividade, Primeira atividade, Primeira atividade, Primeira atividade, Primeira atividade, Primeira atividadePrimeira atividadePrimeira atividadePrimeira atividadePrimeira atividade, Primeira atividade,Primeira atividadePrimeira atividadePrimeira atividadePrimeira atividadePrimeira atividade",
  //     },
  //     {
  //       data: "05/11/2026",
  //       suportDescription: "Segunda atividade",
  //     },
  //     {
  //       data: "06/11/2026",
  //       suportDescription: "Terceira atividade",
  //     },
  //   ],
  // });
  doc.render({
    // scholar info
    scholar_name: "Nome do usuario teste generate teste",
    scholar_cpf: "123.456.789-10", // 123.456.789-10
    scholar_rg: "12345678", // 12345678
    scholar_email: "email.test@gmail.com",
    scholar_phone: "(12) 34567-8910", // (12) 34567-8910
    scholar_project_role: "Bolsista AT-V", // Bolsista AT-VI
    scholar_contract_document: "Termo de Bolsa no. 0760/2046", // Termo de Bolsa no. 0760/2026
    scholar_contract_type: "Pesquisa", // Pesquisa
    scholar_contract_period: "15/03/2026 a 14/09/2027", // 15/03/2026 a 14/09/2027
    scholar_total_workload: "2880 horas", // 2880 horas

    // activity identification
    activity_installment_number: "1", // 1
    activity_total_installments: "18", // 18
    activity_report_start_date: "15/03/2026", // 2026
    activity_report_end_date: "14/04/2026", // 2026
    activity_workload_80h: "☐", // ☐ ☒
    activity_workload_160h: "☒", // ☐ ☒

    // images
    image_gallery: "{{image_gallery}}",
    scholar_signature: "{{scholar_signature}}",

    // activities talbe
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
    participation: Array.from({ length: 5 }, (_, index) => ({
      participation_date: "04/11/2026",
      participation_code: `6.${index + 1}.`,
      participation_description: `Participation activity ${index + 1}`,
      participation_workload: String(Math.floor(Math.random() * 10) + 1),
    })),
  });

  // Gerar DOCX em Base64
  const output = doc.getZip().generate({
    // type: "base64",
    type: "uint8array",
    compression: "DEFLATE",
  });

  // Criar imagens de teste
  const images = Array.from({ length: 20 }, (_, index) => ({
    path: `https://placehold.co/${Math.floor(Math.random() * (1000 - 50 + 1)) + 50}x${Math.floor(Math.random() * (1000 - 50 + 1)) + 50}/EEE/31343C.png`,
    caption: "Descrição da imagem",
    type: "png" as const,
  }));

  // Inserir as imagens no documento
  // Gambiarra medonha (ALTERAR NO PRODUTO FINAL)
  let finalDocument: any = await addImageGallery2(output, images);
  finalDocument = await addSignature2(finalDocument, images[0]);

  // Solicitar ao usuário onde salvar
  const permission =
    await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

  if (!permission.granted) {
    return null;
  }

  const fileName = `relatorio_teste_${Date.now()}.docx`;

  const fileUri = await FileSystem.StorageAccessFramework.createFileAsync(
    permission.directoryUri,
    fileName,
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  );

  // 7. Gravar o arquivo
  await FileSystem.writeAsStringAsync(fileUri, finalDocument, {
    encoding: FileSystem.EncodingType.Base64,
  });

  return fileUri;
}
