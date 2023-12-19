import fs from 'fs';
import path from 'path';
import Mustache from 'mustache';

export default function ttsNewDesc(genus: string, species: string): void {
    try {
        if (species === '') {
            console.error('\x1b[31m✖ Argument `--species` cannot be empty.\x1b[0m');
            return;
        }
        if (genus === '') {
            console.error('\x1b[31m✖ Argument `--genus` cannot be empty.\x1b[0m');
            return;
        }

        const outputPath = path.resolve(__dirname, '../../output/');
        const templatePath = path.resolve(__dirname, `../../taxon/${genus}/${genus}_template.txt`);

        if (!fs.existsSync(templatePath)) {
            console.error(`\x1b[31m✖ The template for genus \x1b[33m\x1b[3m${genus}\x1b[0m\x1b[31m has not been implemented yet.\x1b[0m`);
            return;
        }

        const template = fs.readFileSync(templatePath, 'utf-8');

        let sanitizeSpecificEpithet = species.replace(/\s/g, '_')
        sanitizeSpecificEpithet = sanitizeSpecificEpithet.replace(/-(\w)/, function (match, p1) {
            return p1.toUpperCase()
        });

        const context = {
            specificEpithet: sanitizeSpecificEpithet
        };

        const output = Mustache.render(template, context);
        const fileName = path.join(outputPath, `${genus} ${species}.ts`);

        if (output.trim() !== '') {
            fs.writeFileSync(fileName, output);
            console.log(`\x1b[1m\x1b[32m✔ New script file: \x1b[0m\x1b[1m\x1b[33m${fileName}\x1b[0m`);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}
