import path from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";
import { marked } from "marked";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function gerarPdfFromMarkdown(markdown, nome) {
  if (!markdown || typeof markdown !== "string") {
    throw new Error("O conteúdo markdown é obrigatório e deve ser uma string.");
  }

  if (!nome || typeof nome !== "string") {
    throw new Error("O nome do arquivo é obrigatório e deve ser uma string.");
  }

  const htmlContent = `
    <html>
      <head>
        <meta charset="UTF-8">
        <title>${nome}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
            color: #333;
          }
          h1, h2, h3 {
            color: #2b5797;
          }
          a {
            color: #0a84ff;
          }
        </style>
      </head>
      <body>
        ${marked(markdown)}
      </body>
    </html>
  `;

  const timestamp = Date.now();
  const fileName = `${nome}_${timestamp}.pdf`;
  const filePath = path.join(__dirname, "../uploads", fileName);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(htmlContent, { waitUntil: "networkidle0" });
  await page.pdf({ path: filePath, format: "A4" });

  await browser.close();

  return {
    timestamp: timestamp,
    fileName: fileName,
    link: `${process.env.BASE_URL}/uploads/${fileName}`,
  };
}
