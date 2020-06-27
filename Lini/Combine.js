import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCombine({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCombine';

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
    d: "M17.5 7H13V2.5c0-.827-.673-1.5-1.5-1.5h-10C.673 1 0 1.673 0 2.5v10c0 .827.673 1.5 1.5 1.5H6v4.5c0 .827.673 1.5 1.5 1.5h10c.827 0 1.5-.673 1.5-1.5v-10c0-.827-.673-1.5-1.5-1.5zm.5 11.5a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5V13H1.5a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h10a.5.5 0 01.5.5V8h5.5a.5.5 0 01.5.5v10z"
  })));
}
LiniCombine.propTypes = {
  size: PropTypes.number.isRequired
};