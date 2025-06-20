# 📄 PDF Generator Microservice

Este microserviço recebe um texto em Markdown via API e converte em um PDF estilizado e profissional com Puppeteer.

---

## 📦 Tecnologias

- Node.js
- Express
- Puppeteer
- Marked (Markdown → HTML)
- CSS inline + Google Fonts

## 🚀 Como usar

1. Instale as dependências:

```bash
npm install
```

## Inicie o servidor

```bash
node index.js
```

## Envie um POST para

POST /gerar

```json
{
  "nome": "nome_do_arquivo",
  "markdown": "# Relatório\n\nEste é um relatório em **markdown**."
}
```

## Exemplo de retorno

O retorno será um link acessível ao PDF gerado.

```json
{
    "mensagem": "PDF gerado com sucesso !",
    "link": "http://localhost:3005/uploads/relatorio_atendimentos_1750446931073.pdf",
    "timestamp": 1750446931073,
    "fileName": "relatorio_atendimentos_1750446931073.pdf"
}
```

## 🧪 Testes

Execute o teste manual com:

```bash
node tests/gerarPDF.test.js
```

## 📂 Uploads

Os PDFs são salvos automaticamente na pasta uploads/ com nome no formato: relatorio-${timestamp}.pdf