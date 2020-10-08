var React = require('react');

var PropTypes = require('prop-types');

function LiniFactory({
  size,
  ...props
}) {
  var className = 'Component Lini LiniFactory';

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
    d: "M18.5 20h-17c-0.407 0-0.78-0.161-1.051-0.453s-0.402-0.677-0.371-1.082l0.846-11.003c0.020-0.261 0.237-0.462 0.499-0.462h2.077c0.252 0 0.465 0.188 0.496 0.438l0.905 7.238 4.342-2.605c0.154-0.093 0.347-0.095 0.504-0.006s0.254 0.255 0.254 0.435v2.117l4.243-2.546c0.154-0.093 0.347-0.095 0.504-0.006s0.254 0.255 0.254 0.435v2.117l4.243-2.546c0.154-0.093 0.347-0.095 0.504-0.006s0.254 0.255 0.254 0.435v6c0 0.827-0.673 1.5-1.5 1.5zM1.886 8l-0.811 10.541c-0.010 0.125 0.029 0.241 0.108 0.326s0.192 0.133 0.317 0.133h17c0.276 0 0.5-0.224 0.5-0.5v-5.117l-4.243 2.546c-0.154 0.093-0.347 0.095-0.504 0.006s-0.254-0.255-0.254-0.435v-2.117l-4.243 2.546c-0.154 0.093-0.347 0.095-0.504 0.006s-0.254-0.255-0.254-0.435v-2.117l-4.243 2.546c-0.145 0.087-0.324 0.095-0.476 0.021s-0.256-0.22-0.277-0.388l-0.945-7.562h-1.173z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM2.5 4c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 4c-1.122 0-2-0.659-2-1.5s0.878-1.5 2-1.5 2 0.659 2 1.5-0.878 1.5-2 1.5zM6 2c-0.61 0-1 0.296-1 0.5s0.39 0.5 1 0.5 1-0.296 1-0.5-0.39-0.5-1-0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 4c-1.682 0-3-0.878-3-2s1.318-2 3-2 3 0.878 3 2-1.318 2-3 2zM12 1c-1.145 0-2 0.528-2 1s0.855 1 2 1 2-0.528 2-1-0.855-1-2-1z"
  })));
}

LiniFactory.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFactory;