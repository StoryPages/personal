import ejs from 'ejs';
import fs from 'fs/promises';
import path from 'path';

const templatePath = path.join(process.cwd(), 'views', 'main.ejs');
const outputPath = path.join(process.cwd(), 'index.html');

(async () => {
     try {
          const data = await fs.readFile(templatePath, 'utf-8');
          const html = ejs.render(data, {}, { filename: templatePath });
          await fs.writeFile(outputPath, html);
          console.log('index.html has been generated successfully!');
     } catch (err) {
          console.error('Error:', err);
     }
})();
