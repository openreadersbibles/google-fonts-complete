/// node get-family-names.js
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
        output += `${fontName}\n`;
    }

    // Write to the output file
    fs.writeFile('font-families.txt', output, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to the output file:', err);
            return;
        }
        console.log('Output written to font-families.txt');
    });
});