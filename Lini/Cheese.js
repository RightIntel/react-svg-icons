var React = require('react');

var PropTypes = require('prop-types');

function LiniCheese({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniCheese';

  if (props.className) {
    className += ' ' + props.className;
  }

  const pathProps = {};

  if (color) {
    pathProps.fill = color;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M13.5 2c-0.072 0-0.144 0.016-0.21 0.046l-2.005 0.926c-0.201 0.093-0.317 0.309-0.285 0.528 0 0.017-0.054 0.132-0.309 0.26-0.305 0.153-0.739 0.24-1.191 0.24-0.090 0-0.181-0.003-0.269-0.010-0.085-0.007-0.171 0.009-0.248 0.045l-8.692 4.012c-0.171 0.079-0.291 0.252-0.291 0.454v3c0 0.276 0.224 0.5 0.5 0.5 0.827 0 1.5 0.673 1.5 1.5 0 0.401-0.156 0.777-0.439 1.061s-0.66 0.439-1.061 0.439c0 0 0 0 0 0-0.133 0-0.26 0.053-0.354 0.146s-0.146 0.221-0.146 0.354v2c0 0.276 0.224 0.5 0.5 0.5h19c0.276 0 0.5-0.224 0.5-0.5v-9c0-3.584-2.916-6.5-6.5-6.5zM9.287 4.995c0.071 0.003 0.142 0.005 0.213 0.005 0.61 0 1.192-0.123 1.638-0.346 0.451-0.225 0.737-0.538 0.83-0.896l1.64-0.757c2.816 0.054 5.119 2.235 5.369 4.999h-4.045c-0.14-0.51-0.495-0.971-1.034-1.33-0.648-0.432-1.5-0.67-2.399-0.67s-1.751 0.238-2.399 0.67c-0.539 0.359-0.894 0.82-1.034 1.33h-5.291l6.511-3.005zM14 8.5c0 1.378-1.122 2.5-2.5 2.5s-2.5-1.122-2.5-2.5c0-0.813 1.145-1.5 2.5-1.5s2.5 0.687 2.5 1.5zM19 17h-18v-1.050c0.477-0.096 0.916-0.33 1.268-0.683 0.472-0.472 0.732-1.1 0.732-1.768 0-1.207-0.86-2.217-2-2.45v-2.050h7.036c0.243 1.694 1.704 3 3.464 3s3.221-1.306 3.464-3h4.036v8z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M15.5 15c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM15.5 13c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M7 16c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zM7 13c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z"
  }, pathProps))));
}

LiniCheese.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCheese;