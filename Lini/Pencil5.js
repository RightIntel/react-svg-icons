import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPencil5({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPencil5';

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
    d: "M19.103.896C18.541.334 17.794.025 17 .025s-1.542.309-2.103.871l-9.75 9.75a.496.496 0 00-.116.183l-2 5.5a.5.5 0 00.641.641l5.5-2a.51.51 0 00.183-.116l9.75-9.75c.562-.562.871-1.309.871-2.104s-.309-1.542-.871-2.104zM8.725 14.068l-4.389 1.596 1.596-4.389L14 3.207 16.793 6l-8.068 8.068zm9.672-9.672l-.897.896-2.793-2.793.897-.896c.373-.373.869-.578 1.396-.578s1.023.205 1.397.578c.373.373.578.869.578 1.396s-.205 1.023-.578 1.396z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 20h-16C.673 20 0 19.327 0 18.5v-16C0 1.673.673 1 1.5 1h10a.5.5 0 010 1h-10a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-10a.5.5 0 011 0v10c0 .827-.673 1.5-1.5 1.5z"
  })));
}
LiniPencil5.propTypes = {
  size: PropTypes.number.isRequired
};