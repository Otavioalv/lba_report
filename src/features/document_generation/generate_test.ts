import * as FileSystem from "expo-file-system/legacy";
import Docxtemplater from "docxtemplater";
import { Asset } from "expo-asset";
// import path from "node:path";
import PizZip from "pizzip";
// import fs from "node:fs";
import { addImageTables, addImageTables2 } from "./add_image_table_test";


// export async function generateTest() {
//   const templatePath = path.resolve(
//     "assets/templates/report1.2/document.docx"
//   );

//   const content = fs.readFileSync(templatePath, "binary");

//   const zip = new PizZip(content);

//   const doc = new Docxtemplater(zip, {
//     paragraphLoop: true,
//     linebreaks: true,
//   });

//   doc.render({
//     name: "Teste Docxtemplater",
//     GALERIA: "{{GALERIA}}",
//     eventos: [
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
//     ],
//   });

//   const output = doc.toBuffer();

//   const images = Array.from({ length: 20 }, (_, index) => ({
//     path: `https://placehold.co/${Math.floor(Math.random() * (1000 - 50 + 1)) + 50}x${Math.floor(Math.random() * (1000 - 50 + 1)) + 50}/EEE/31343C.png`,
//     caption: `Descrição da imagem`,
//     type: "png" as const,
//   }));

//   const finalDocument = await addImageTables(output, images);

//   const outputPath = path.resolve("relatorio_gerado.docx");

//   fs.writeFileSync(outputPath, finalDocument);

//   console.log(`Documento gerado: ${outputPath}`);
// }

// generateTest();

export async function generateTest2() {
  // 1. Carregar o template incluído no aplicativo
  const asset = Asset.fromModule(require("./assets/templates/report1.2/document.docx"));

  await asset.downloadAsync();

  if(!asset.localUri) {
    throw new Error("Não foi possível carregar o template.");
  }

  // 2. Ler o DOCX em Base64
  const content = await FileSystem.readAsStringAsync(
    asset.localUri,
    {
      encoding: FileSystem.EncodingType.Base64,
    }
  );

  // 3. Abrir o DOCX
  const zip = new PizZip(content, {
    base64: true,
  });

  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });


  // 4. Preencher os dados
  doc.render({
    name: "Teste no Android",
    GALERIA: "{{GALERIA}}",
    eventos: [
      {
        data: "04/11/2026",
        suportDescription: "Primeira atividade, Primeira atividade, Primeira atividade, Primeira atividade, Primeira atividade, Primeira atividadePrimeira atividadePrimeira atividadePrimeira atividadePrimeira atividade, Primeira atividade,Primeira atividadePrimeira atividadePrimeira atividadePrimeira atividadePrimeira atividade",
      },
      {
        data: "05/11/2026",
        suportDescription: "Segunda atividade",
      },
      {
        data: "06/11/2026",
        suportDescription: "Terceira atividade",
      },
    ],
  });

  // 5. Gerar DOCX em Base64
  const output = doc.getZip().generate({
    // type: "base64",
    type: "uint8array",
    compression: "DEFLATE",
  });

  // 6. Criar imagens de teste
  const images = Array.from({ length: 20 }, (_, index) => ({
    path: `https://placehold.co/${Math.floor(Math.random() * (1000 - 50 + 1)) + 50}x${Math.floor(Math.random() * (1000 - 50 + 1)) + 50}/EEE/31343C.png`,
    caption: "Descrição da imagem",
    type: "png" as const,
  }));

  // 7. Inserir as imagens no documento
  const finalDocument = await addImageTables2(output, images);


  // 6. Solicitar ao usuário onde salvar
  const permission = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

  if(!permission.granted) {
    return null;
  }

  const fileName = `relatorio_teste_${Date.now()}.docx`;

  const fileUri =
    await FileSystem.StorageAccessFramework.createFileAsync(
      permission.directoryUri,
      fileName,
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );

  // 7. Gravar o arquivo
  await FileSystem.writeAsStringAsync(fileUri, finalDocument, {
    encoding: FileSystem.EncodingType.Base64,
  });

  return fileUri;
}


