/// node get-urls.js
const fs = require('fs');

// Read the JSON file
fs.readFile('google-fonts.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the JSON file:', err);
        return;
    }

    // Parse the JSON data
    const fonts = JSON.parse(data);
    let output = '';

    // Iterate over each font
    for (const fontName in fonts) {
        const font = fonts[fontName];
        if (font.variants) {
            for (const variant in font.variants) {
                for (const weight in font.variants[variant]) {
                    const ttfUrl = font.variants[variant][weight].url.ttf;
                    if (ttfUrl) {
                        output += `${fontName}\t${ttfUrl}\n`;
                    }
                }
            }
        }
    }

    // Write to the output file
    fs.writeFile('font-urls.txt', output, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to the output file:', err);
            return;
        }
        console.log('Output written to font-urls.txt');
    });
});