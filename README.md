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


## Author

### Maxsuel David

<div align=center id="footer-default">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/maxsuelOliveiradev/?utm_source=rocketseat&utm_medium=organic&utm_campaign=profile&utm_term=share&utm_content=md-04583-links)
[![Instagram](https://img.shields.io/badge/Instagram-C13584?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/david_o.santos/)
[![GitHub](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MaxsuelOliveira)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/channels/@MaxDavid#7163)
[![Rocketseat](https://img.shields.io/badge/Rocketseat-7159C1?style=for-the-badge&logo=rocketseat&logoColor=white)](https://app.rocketseat.com.br/me/md-04583)
[![Telegram](https://img.shields.io/badge/Telegram-40A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/@oliveiraMaxsuel)
</div>
