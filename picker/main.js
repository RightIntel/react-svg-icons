function main(ids) {
  let el = {};
  ids.forEach(id => (el[id] = document.getElementById(id)));

  render({
    selection: window.selection,
    registerFilterHandler: handler => {
      el.FilterInput.oninput = evt => handler(evt.target.value);
    },
    setPreview: html => {
      el.PreviewArea.innerHTML = html;
    },
    registerSizeHandler: handler => {
      el.ListSizeSlider.oninput = evt => {
        const size = evt.target.value;
        el.ListSizeNumber.textContent = `${size}px`;
        handler(size);
      };
    },
    registerColorHandler: handler => {
      el.ListColorHex.oninput = evt => {
        const hex = evt.target.value;
        el.ListColorSwatch.value = hex;
        handler(hex);
      };
      el.ListColorSwatch.oninput = evt => {
        const hex = evt.target.value;
        el.ListColorHex.value = hex;
        handler(hex);
      };
    },
    addIcon: icon => {
      el.IconList.appendChild(icon);
    },
    colorStyle: el.ColorStyle,
    initialSize: el.ListSizeSlider.value,
    initialColor: el.ListColorHex.value,
    initialText: el.FilterInput.value,
  });
}
