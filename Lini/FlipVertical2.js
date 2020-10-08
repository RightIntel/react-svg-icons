var React = require('react');

var PropTypes = require('prop-types');

function LiniFlipVertical2({
  size,
  ...props
}) {
  var className = 'Component Lini LiniFlipVertical2';

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
    d: "M1 0.5c0-0.078 0.018-0.157 0.055-0.229 0.086-0.167 0.257-0.271 0.445-0.271h10c0.187 0 0.359 0.105 0.445 0.271s0.071 0.367-0.038 0.519l-5 7c-0.094 0.131-0.245 0.209-0.407 0.209s-0.313-0.078-0.407-0.209l-5-7c-0.062-0.086-0.093-0.188-0.093-0.291zM10.528 1h-8.057l4.028 5.64 4.028-5.64z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 18.5c0-0.102 0.031-0.204 0.093-0.291l5-7c0.094-0.131 0.245-0.209 0.407-0.209s0.313 0.078 0.407 0.209l5 7c0.109 0.152 0.123 0.353 0.038 0.519s-0.257 0.271-0.445 0.271h-10c-0.187 0-0.359-0.105-0.445-0.271-0.037-0.072-0.055-0.151-0.055-0.229zM6.5 12.36l-4.028 5.64h8.057l-4.028-5.64z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 9.5c0-0.276 0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-1c-0.276 0-0.5-0.224-0.5-0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 9.5c0-0.276 0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-1c-0.276 0-0.5-0.224-0.5-0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 9.5c0-0.276 0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-1c-0.276 0-0.5-0.224-0.5-0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 9.5c0-0.276 0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-1c-0.276 0-0.5-0.224-0.5-0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 17.5c0-0.276-0.224-0.5-0.5-0.5h-2.652c2.011-1.97 3.152-4.666 3.152-7.5 0-1.679-0.385-3.284-1.144-4.77-0.724-1.417-1.78-2.672-3.055-3.63-0.221-0.166-0.534-0.121-0.7 0.099-0.068 0.090-0.1 0.195-0.1 0.3 0 0.152 0.069 0.302 0.2 0.4 2.415 1.814 3.799 4.584 3.799 7.6 0 2.633-1.088 5.134-3 6.928v-2.928c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5z",
    fill: "#000000"
  })));
}

LiniFlipVertical2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFlipVertical2;