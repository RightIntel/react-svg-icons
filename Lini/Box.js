import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBox({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBox';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19.428 5.384l-2.492-4.272C16.566.478 15.734 0 15 0H5c-.734 0-1.566.478-1.936 1.112L.572 5.384C.251 5.934 0 6.863 0 7.5v3c0 .652.418 1.208 1 1.414V18.5c0 .827.673 1.5 1.5 1.5h15c.827 0 1.5-.673 1.5-1.5v-6.586c.582-.206 1-.762 1-1.414v-3c0-.637-.251-1.566-.572-2.116zm-15.5-3.768C4.116 1.294 4.627 1 5 1h10c.373 0 .884.293 1.072.616l2.492 4.272c.021.036.042.076.063.118A1.334 1.334 0 0018.5 6h-17c-.043 0-.085.002-.127.006.021-.042.042-.081.063-.118l2.492-4.272zM17.5 19h-15a.5.5 0 01-.5-.5V12h16v6.5a.5.5 0 01-.5.5zm1.5-8.5a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h17a.5.5 0 01.5.5v3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 16h-5c-.827 0-1.5-.673-1.5-1.5S6.673 13 7.5 13h5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5zm-5-2a.5.5 0 000 1h5a.5.5 0 000-1h-5z"
  })));
}
LiniBox.propTypes = {
  size: PropTypes.number.isRequired
};