const fs = require('fs-extra');
const latex = require('node-latex');
const path = require('path');

async function generatePDF(data, res) {
  const templatePath = path.join(__dirname, 'template.tex');
  const outputDir = path.join(__dirname, 'output');
  const texFile = path.join(outputDir, 'document.tex');
  const pdfFile = path.join(outputDir, 'document.pdf');

  await fs.ensureDir(outputDir);

  // Read and replace placeholders
  let template = await fs.readFile(templatePath, 'utf8');
  for (const [key, value] of Object.entries(data)) {
    const regex = new RegExp(`\\\\VAR\\{${key}\\}`, 'g');
    template = template.replace(regex, value);
  }

  await fs.writeFile(texFile, template);

// Compile LaTeX
  await new Promise((resolve, reject) => {
    const pdf = latex(fs.createReadStream(texFile))
      .pipe(fs.createWriteStream(pdfFile))
      .on('finish', resolve)
      .on('error', reject);
  });

  // Download
  res.download(pdfFile, 'resume.pdf', async (err) => {
    if (err) {
      res.sendStatus(500);
      throw err;
    }
    await fs.remove(texFile); // Cleanup
    await fs.remove(pdfFile);
  });
}

module.exports = generatePDF;