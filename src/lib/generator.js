const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const options = require('../../../../.prettierrc.js');
options.parser = 'babel';

const dir = path.resolve(__dirname, '../../../../angular/assets/img/lini');
const tpl = fs.readFileSync(path.resolve(__dirname, 'Template.js'), 'utf8');
fs.readdir(dir, function(err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(name => {
        const [label] = name.split('.');
        const PascalName = label.replace(/(?:^|-)(.)/g, ($0, $1) => {
            return $1.toUpperCase();
        });
        const svg = fs.readFileSync(path.resolve(dir, name), 'utf8');
        const paths = svg.replace(/^<svg.+?>(.+)<\/svg>$/, '$1');
        let js = tpl;
        js = js.replace(/__Name__/g, PascalName);
        js = js.replace('__paths__', paths);
        js = prettier.format(js, options);
        const jsFilePath = path.resolve(__dirname, `generated/Lini${PascalName}.js`);
        fs.writeFileSync(jsFilePath, js);
        console.log(`Wrote ${js.length} bytes to ${jsFilePath}`);
    });
});
