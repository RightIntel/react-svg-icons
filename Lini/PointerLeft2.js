import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPointerLeft2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPointerLeft2';

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
    d: "M15.5 15a.5.5 0 100-1 .5.5 0 000 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 17a1.502 1.502 0 01-1.394-2.053 1.501 1.501 0 01-1-2A1.502 1.502 0 015.086 11H2.5C1.673 11 1 10.327 1 9.5S1.673 8 2.5 8h5.966L7.353 6.594c-.241-.304-.361-.695-.339-1.098s.186-.779.46-1.053a1.508 1.508 0 012.12-.003l3.523 3.479c.227-.54.762-.919 1.383-.919h2c.827 0 1.5.673 1.5 1.5v7c0 .827-.673 1.5-1.5 1.5h-2a1.5 1.5 0 01-1.28-.719c-.636.328-1.798.719-3.72.719h-1zM8.182 5.15a.653.653 0 00-.044.823l1.754 2.216a.499.499 0 01-.392.81h-7a.5.5 0 000 1h5a.5.5 0 010 1h-1a.5.5 0 000 1h1a.5.5 0 010 1 .5.5 0 000 1h1a.5.5 0 010 1 .5.5 0 000 1h1c2.102 0 3.139-.516 3.5-.748V9.208L8.892 5.151a.512.512 0 00-.71-.002zM16.5 16a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h2z"
  })));
}
LiniPointerLeft2.propTypes = {
  size: PropTypes.number.isRequired
};