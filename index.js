// server.js
import fs from "fs";
import express from "express";
import gerarPdfRouter from "./routes/pdf_generator.js";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Middleware para proterger o diretório de uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/pdf", gerarPdfRouter);

// Apenas timestamp no nome
app.get("/uploads/:file", (req, res) => {
  const { file } = req.params;

  // Regex para verificar se o nome do arquivo contém um timestamp (ex: relatorio_1689123456789.pdf)
  const regex = /.+_(\d{10,})\.pdf$/;

  if (!regex.test(file)) {
    return res.status(403).json({ erro: "Acesso negado ao arquivo." });
  }

  const filePath = path.resolve("uploads", file);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ erro: "Arquivo não encontrado." });
  }

  res.sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`🚀 Microserviço MARKDOWN -> PDF ON  (http://localhost:${PORT})`);
});
