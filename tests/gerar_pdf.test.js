import { gerarPdfFromMarkdown } from "../services/pdf.service.js";
import fs from "fs";

const markdownExemplo = `
# Teste de PDF
Este é um teste de geração de PDF a partir de **Markdown**.
`;

(async () => {
  try {
    const resultado = await gerarPdfFromMarkdown(markdownExemplo, "teste");

    if (!resultado.link) {
      console.error("❌ Teste falhou. Nome do arquivo não foi gerado.");
      return;
    }

    console.log("✅ Teste de geração de PDF bem-sucedido.");
    console.log("🧪 Teste passou! Arquivo existe.");
  } catch (err) {
    console.error("❌ Erro ao testar geração de PDF:", err);
  }
})();
