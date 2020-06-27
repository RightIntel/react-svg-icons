const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const src = path.resolve(`${__dirname}/../Lini`);
const dest = path.resolve(`${__dirname}/../../Lini`);

exec(`npx babel ${src} --out-dir ${dest}`, (error, stdout, stderr) => {
	if (error) {
		console.log(error);
		process.exit();
	}
	const filenames = fs.readdirSync(dest);
	filenames.forEach(filename => {
		let js = fs.readFileSync(`${dest}/${filename}`, 'utf8');
		js = js.replace(/^.+\n\n/, '');
		js = js.replace(/_extends\(/g, 'Object.assign(');
		fs.writeFileSync(`${dest}/${filename}`, js, 'utf8');
	});
	console.log(`Compiled ${filenames.length} components into Lini directory.`);
});
