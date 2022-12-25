import React from 'react';
export default function SvgComponent({
  paths
}) {
  return /*#__PURE__*/React.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20"
  }, paths.map(path => /*#__PURE__*/React.createElement("path", path)));
}
;