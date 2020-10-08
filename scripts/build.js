const fs = require('fs');
const path = require('path');
const { transformSync } = require('@babel/core');

const options = { presets: ['@babel/preset-react']};

const start = +new Date();
const dir = path.resolve(__dirname, '../svgs');
const tpl = fs.readFileSync(path.resolve(__dirname, '../Template.js'), 'utf8');
const files = fs.readdirSync(dir);
let size = 0;
for (const name of files) {
	const [label] = name.slice(5).split('.');
	const PascalName = label.replace(/(?:^|-)(.)/g, ($0, $1) => {
		return $1.toUpperCase();
	});
	const svg = fs.readFileSync(path.resolve(dir, name), 'utf8');
	const paths = svg.replace(/^.*<svg.+?>(.+)<\/svg>.*$/s, '$1').replace(/\n+/g, '');
	let js = tpl;
	js = js.replace(/__Name__/g, PascalName);
	js = js.replace('__paths__', paths);
	js = js.replace(/ fill="#000000"/g, ' {...pathProps}');
	let { code: output } = transformSync(js, options);
	output = output.replace(/^.+(var React)/s, '$1');
	output = output.replace(/_extends\(/g, 'Object.assign(');
	output = output.trim();
	const dest = path.resolve(__dirname, `../Lini/${PascalName}.js`)
	fs.writeFileSync(dest, output, 'utf8');
	console.log(`Built svgs/${name} to Lini/${PascalName}.js with ${output.length} bytes`);
	size += output.length;
}
const elapsed = ((+new Date() - start) / 1000).toFixed(1);
console.log(`Wrote ${(size/1024/1024).toFixed(2)} MB for ${files.length} components to the Lini directory in ${elapsed}s.`);
