import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPapers({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPapers';

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
    d: "M10.5 9h-3a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v4a.5.5 0 01-.5.5zM8 8h2V5H8v3zM5.5 5h-2a.5.5 0 010-1h2a.5.5 0 010 1zM5.5 7h-2a.5.5 0 010-1h2a.5.5 0 010 1zM5.5 9h-2a.5.5 0 010-1h2a.5.5 0 010 1zM10.5 11h-7a.5.5 0 010-1h7a.5.5 0 010 1zM10.5 13h-7a.5.5 0 010-1h7a.5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 5H16v-.5c0-.827-.673-1.5-1.5-1.5H14v-.5c0-.827-.673-1.5-1.5-1.5h-11C.673 1 0 1.673 0 2.5v12c0 .827.673 1.5 1.5 1.5H2v.5c0 .827.673 1.5 1.5 1.5H4v.5c0 .827.673 1.5 1.5 1.5h11c.827 0 1.5-.673 1.5-1.5v-12c0-.827-.673-1.5-1.5-1.5zM1 14.5v-12a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v12a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5zm2 2V16h9.5c.827 0 1.5-.673 1.5-1.5V4h.5a.5.5 0 01.5.5v12a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5zm14 2a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5V18h9.5c.827 0 1.5-.673 1.5-1.5V6h.5a.5.5 0 01.5.5v12z"
  })));
}
LiniPapers.propTypes = {
  size: PropTypes.number.isRequired
};