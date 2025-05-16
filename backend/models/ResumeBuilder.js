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
  return new Promise((resolve, reject) => {
    const input = fs.createReadStream(texFile);
    const output = fs.createWriteStream(pdfFile);
    const pdf = latex(input);

    pdf.pipe(output);
    pdf.on('error', reject);
    pdf.on('finish', () => {
      res.download(pdfFile, 'resume.pdf',(err)=>{
        //todo
      })
      console.log('PDF generated!');
      resolve(pdfFile);
    });
  })
  
}

module.exports = generatePDF;