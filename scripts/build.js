const fs = require("node:fs");
const path = require("node:path");

const start = +new Date();
const toExport = [];
const dir = path.resolve(__dirname, "../svgs");
const tpl = fs.readFileSync(path.resolve(__dirname, "../Template.jsx"), "utf8");
const files = fs.readdirSync(dir);
let size = 0;
for (const name of files) {
  const [label] = name.slice(5).split(".");
  const PascalName = label.replace(/(?:^|-)(.)/g, ($0, $1) => {
    return $1.toUpperCase();
  });
  const svg = fs.readFileSync(path.resolve(dir, name), "utf8");
  const paths = svg
    .replace(/^.*<svg.+?>(.+)<\/svg>.*$/s, "$1")
    .trim()
    .split(/\n+/g);
  let js = tpl;
  js = js.replace(/__Name__/g, PascalName);
  const indent = "        ";
  const indented = paths.map((path) => indent + path);
  js = js.replace("__paths__", `\n${indented.join("\n")}\n      `);
  js = js.replace(/ fill="#000000"/g, "");
  js = js.replace(/><\/path>/g, " />");
  const dest = path.resolve(__dirname, `../components/${PascalName}.jsx`);
  fs.writeFileSync(dest, js, "utf8");
  toExport.push(
    `export { default as Lini${PascalName} } from './components/${PascalName}.jsx';`
  );
  // console.log(`Built svgs/${name} to components/${PascalName}.jsx with ${output.length} bytes`);
  size += js.length;
}
toExport.sort();
const dest = path.resolve(__dirname, "../index.jsx");
const indexContents = toExport.join("\n") + "\n";
fs.writeFileSync(dest, indexContents, "utf8");
const elapsed = ((+new Date() - start) / 1000).toFixed(1);
const mb = (size / 1024 / 1024).toFixed(2);
console.log(
  `Wrote ${mb} MB for ${files.length} components to the components directory in ${elapsed}s.`
);
