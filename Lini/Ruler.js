import React from 'react';
import PropTypes from 'prop-types';
export default function LiniRuler({
  size,
  ...props
}) {
  let className = 'Component Lini LiniRuler';

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
    d: "M17.5 7h-16C.673 7 0 7.673 0 8.5v3c0 .827.673 1.5 1.5 1.5h16c.827 0 1.5-.673 1.5-1.5v-3c0-.827-.673-1.5-1.5-1.5zm.5 4.5a.5.5 0 01-.5.5H16v-1.5a.5.5 0 00-1 0V12h-2V9.5a.5.5 0 00-1 0V12h-2v-1.5a.5.5 0 00-1 0V12H7V9.5a.5.5 0 00-1 0V12H4v-1.5a.5.5 0 00-1 0V12H1.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h16a.5.5 0 01.5.5v3z"
  })));
}
LiniRuler.propTypes = {
  size: PropTypes.number.isRequired
};