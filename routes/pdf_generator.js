import express from "express";
import { gerarPdfFromMarkdown } from "../services/pdf.service.js";

const router = express.Router();

// Rota para gerar PDF a partir de Markdown
router.post("/gerar", async (req, res) => {
  try {
    const { nome, markdown } = req.body;

    if (!markdown) {
      return res.status(400).json({ erro: "markdown é obrigatório" });
    }

    const { link, fileName, timestamp } =
      await gerarPdfFromMarkdown(markdown, nome);

    if (!link || !fileName || !timestamp) {
      return res.status(422).json({ erro: "Erro ao gerar PDF , não foi possivel gerar o pdf." });
    }

    res.status(201).json({
      mensagem: "PDF gerado com sucesso !",
      link: link,
      timestamp: timestamp,
      fileName: fileName,
    });
  } catch (err) {
    console.error("Erro ao gerar PDF:", err);
    res.status(422).json({ erro: "Erro interno ao gerar PDF" });
  }
});

// Rota para download do PDF
router.get("/download/:fileName", (req, res) => {
  const { fileName } = req.params;
  const filePath = `uploads/${fileName}`;

  res.download(filePath, (err) => {
    if (err) {
      console.error("Erro ao baixar o arquivo:", err);
      res.status(404).json({ erro: "Arquivo não encontrado" });
    }
  });
});

// Rota para listar arquivos PDF
router.get("/", async (req, res) => {
  try {
    const fs = await import("fs/promises");
    const path = await import("path");

    const uploadsDir = path.join(process.cwd(), "uploads");
    const files = await fs.readdir(uploadsDir);

    // Filtrar apenas arquivos PDF
    const pdfFiles = files.filter(file => file.endsWith(".pdf"));

    res.status(200).json(pdfFiles);
  } catch (err) {
    console.error("Erro ao listar arquivos PDF:", err);
    res.status(500).json({ erro: "Erro interno ao listar arquivos" });
  }
});

export default router;
