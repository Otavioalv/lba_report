import * as FileSystem from "expo-file-system/legacy";
import Docxtemplater from "docxtemplater";
import { Asset } from "expo-asset";
// import path from "node:path";
import PizZip from "pizzip";
// import fs from "node:fs";

// export async function generateTest() {
//   const templatePath = path.resolve(
//     "assets/templates/report1.1/document.docx"
//   );

//   const content = fs.readFileSync(templatePath, "binary");

//   const zip = new PizZip(content);

//   const doc = new Docxtemplater(zip, {
//     paragraphLoop: true,
//     linebreaks: true,
//   });

//   doc.render({
//     name: "Teste Docxtemplater",
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
//   const outputPath = path.resolve("relatorio_gerado.docx");

//   fs.writeFileSync(outputPath, output);

//   console.log(`Documento gerado: ${outputPath}`);
// }

// generateTest();

export async function generateTest2() {
  // 1. Carregar o template incluído no aplicativo
  const asset = Asset.fromModule(
    require("./assets/templates/report1.1/document.docx")
  );

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
    eventos: [
      {
        data: "04/11/2026",
        suportDescription: "Primeira atividade",
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
    type: "base64",
    compression: "DEFLATE",
  });

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
  await FileSystem.writeAsStringAsync(fileUri, output, {
    encoding: FileSystem.EncodingType.Base64,
  });

  return fileUri;
}
