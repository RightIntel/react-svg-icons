let svgs;

function render({
  selection,
  registerFilterHandler,
  addIcon,
  setPreview,
  colorStyle,
  registerSizeHandler,
  registerColorHandler,
  initialSize,
  initialColor,
  initialText,
}) {
  function setColor(color) {
    colorStyle.textContent = `svg path { fill: ${color}; }`;
  }
  svgs = buildSvgs(selection);
  setSize(initialSize);
  setColor(initialColor);
  svgs.forEach(svg => {
    svg.element.onclick = () => setPreview(magnify(svg));
    addIcon(svg.element);
  });
  registerFilterHandler(filterItems);
  registerSizeHandler(setSize);
  registerColorHandler(setColor);
  filterItems(initialText);
}

function filterItems(text) {
  const regex = new RegExp('\\b' + text.toLowerCase());
  svgs.forEach(svg => {
    svg.element.style.display = regex.test(svg.keywords)
      ? 'inline-block'
      : 'none';
  });
}

function setSize(size) {
  svgs.forEach(svg => {
    Object.assign(svg.element.style, {
      height: `${size}px`,
      width: `${size}px`,
    });
  });
}

function magnify(svg) {
  const sizes = [12, 14, 16, 18, 20, 22, 24, 32, 40, 48, 64];
  return `
    <pre class="svg-name">${getImportCode(svg.name)}</pre>
    <div class="svg-sizes">
       ${sizes
         .map(
           size => `
             <div class="svg-size">
               <span class="size-label">${size}</span>
               ${svg.element.outerHTML.replace(
                 '<svg ',
                 `<svg style="width: ${size}px; height: ${size}px" `
               )}
             </div>`
         )
         .join('')}
    </div>`;
}

function buildSvgs(selection) {
  const list = [];
  selection.icons.forEach(icon => {
    const xmlns = 'http://www.w3.org/2000/svg';
    const w = 1024;
    const h = 1024;

    const element = document.createElementNS(xmlns, 'svg');
    element.setAttributeNS(null, 'viewBox', '0 0 ' + w + ' ' + h);
    element.setAttributeNS(null, 'width', w);
    element.setAttributeNS(null, 'height', h);
    element.title = icon.properties.name;
    element.style.display = 'inline-block';
    element.style.margin = '0 5px 5px 0';
    for (const coords of icon.icon.paths) {
      const path = document.createElementNS(xmlns, 'path');
      path.setAttributeNS(null, 'd', coords);
      element.appendChild(path);
    }
    const name = icon.properties.name;
    const keywords = [name, ...icon.icon.tags].join(' | ');
    list.push({ name, keywords, element });
  });
  return list;
}

function formatName(string) {
  return string
      .replace(/(^|-)(\w)/g, ($0, $1, $2) => {
        return $2.toUpperCase();
      })
      .replace(/1$/g, '');
}
function getImportCode(name) {
  const camelized = formatName(name);
  return `import { Lini${camelized} }\n\tfrom 'react-svg-icons';\n\n&lt;Lini${camelized} size={20} /&gt;`;
}
