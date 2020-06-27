import React from 'react';
import PropTypes from 'prop-types';
export default function LiniMedia({
  size,
  ...props
}) {
  let className = 'Component Lini LiniMedia';

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
    d: "M19.817 11.113a.501.501 0 00-.415-.104l-5 1a.5.5 0 00-.402.49v2.695a2.569 2.569 0 00-1-.195c-1.122 0-2 .659-2 1.5s.878 1.5 2 1.5 2-.659 2-1.5v-3.59l4-.8v2.085a2.569 2.569 0 00-1-.195c-1.122 0-2 .659-2 1.5s.878 1.5 2 1.5 2-.659 2-1.5v-4a.5.5 0 00-.183-.387zM13 17c-.61 0-1-.296-1-.5s.39-.5 1-.5 1 .296 1 .5-.39.5-1 .5zm5-1c-.61 0-1-.296-1-.5s.39-.5 1-.5 1 .296 1 .5-.39.5-1 .5zM13.5 11c-.827 0-1.5-.673-1.5-1.5S12.673 8 13.5 8s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 6H12V2.5a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5v6a.5.5 0 00.5.5H5v3.5a.5.5 0 00.5.5h7a.5.5 0 000-1h-.775L8.538 8.415c-.272-.306-.65-.476-1.039-.466s-.758.199-1.014.519L6 9.074V6.999h10v3a.5.5 0 001 0v-3.5a.5.5 0 00-.5-.5zM10 5h1v1h-1V5zm1-1h-1V3h1v1zM1 5h1v1H1V5zm1-2v1H1V3h1zM1 7h1v1H1V7zm6.266 2.093c.073-.091.165-.142.259-.144s.189.044.266.131L10.387 12H6v-1.325l1.266-1.582zM5.5 6a.5.5 0 00-.5.5V8H3V3h6v3H5.5z"
  })));
}
LiniMedia.propTypes = {
  size: PropTypes.number.isRequired
};