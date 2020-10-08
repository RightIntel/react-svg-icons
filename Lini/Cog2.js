var React = require('react');

var PropTypes = require('prop-types');

function LiniCog2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniCog2';

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
    d: "M13.324 19.402c-0.074 0-0.148-0.016-0.216-0.049-0.123-0.059-0.216-0.165-0.259-0.294-0.407-1.231-1.552-2.058-2.849-2.058s-2.443 0.827-2.849 2.058c-0.043 0.129-0.136 0.235-0.259 0.294s-0.264 0.065-0.391 0.018c-1.042-0.389-2.006-0.947-2.865-1.656-0.105-0.087-0.17-0.212-0.18-0.347s0.035-0.269 0.125-0.371c0.862-0.968 1.006-2.372 0.357-3.496-0.534-0.925-1.531-1.5-2.601-1.5-0.203 0-0.407 0.021-0.605 0.062-0.133 0.028-0.272-0-0.384-0.077s-0.188-0.196-0.211-0.33c-0.091-0.546-0.137-1.102-0.137-1.654s0.046-1.108 0.137-1.654c0.022-0.134 0.098-0.253 0.211-0.33s0.251-0.105 0.384-0.077c0.198 0.041 0.402 0.062 0.605 0.062 1.070-0 2.067-0.575 2.601-1.5 0.648-1.123 0.505-2.528-0.357-3.496-0.090-0.101-0.136-0.235-0.125-0.371s0.075-0.261 0.18-0.347c0.859-0.71 1.824-1.267 2.865-1.656 0.127-0.048 0.269-0.041 0.391 0.018s0.216 0.165 0.259 0.294c0.407 1.231 1.552 2.058 2.849 2.058s2.443-0.827 2.849-2.058c0.043-0.129 0.136-0.235 0.259-0.294s0.264-0.065 0.391-0.018c1.042 0.389 2.006 0.947 2.865 1.656 0.105 0.087 0.17 0.212 0.18 0.347s-0.035 0.269-0.125 0.371c-0.862 0.968-1.006 2.372-0.357 3.496 0.534 0.926 1.531 1.5 2.601 1.5 0.203 0 0.407-0.021 0.605-0.062 0.133-0.028 0.272 0 0.384 0.077s0.188 0.196 0.211 0.33c0.091 0.546 0.137 1.102 0.137 1.654s-0.046 1.108-0.137 1.654c-0.022 0.134-0.098 0.253-0.211 0.33s-0.251 0.105-0.384 0.077c-0.198-0.041-0.402-0.062-0.605-0.062-1.070 0-2.067 0.575-2.601 1.5-0.648 1.123-0.505 2.528 0.357 3.496 0.090 0.101 0.136 0.235 0.125 0.371s-0.075 0.261-0.18 0.347c-0.859 0.71-1.823 1.267-2.865 1.656-0.057 0.021-0.116 0.032-0.175 0.032zM4.654 17.241c0.544 0.402 1.128 0.74 1.747 1.010 0.662-1.365 2.049-2.251 3.599-2.251s2.937 0.886 3.599 2.251c0.619-0.27 1.203-0.608 1.747-1.010-0.851-1.256-0.924-2.899-0.15-4.241 0.712-1.234 2.041-2 3.467-2 0.093 0 0.187 0.003 0.28 0.010 0.038-0.336 0.057-0.674 0.057-1.009s-0.019-0.674-0.057-1.009c-0.093 0.007-0.187 0.010-0.28 0.010-1.426 0-2.755-0.766-3.467-2-0.775-1.342-0.702-2.986 0.15-4.241-0.544-0.402-1.128-0.74-1.747-1.010-0.662 1.365-2.049 2.251-3.599 2.251s-2.937-0.886-3.599-2.251c-0.619 0.27-1.203 0.608-1.747 1.010 0.851 1.256 0.924 2.899 0.15 4.241-0.712 1.234-2.041 2-3.467 2-0.093 0-0.187-0.003-0.28-0.010-0.038 0.336-0.057 0.674-0.057 1.009s0.019 0.674 0.057 1.009c0.093-0.007 0.187-0.010 0.28-0.010 1.426 0 2.755 0.767 3.467 2 0.775 1.342 0.702 2.986-0.15 4.241z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM10 8c-1.103 0-2 0.897-2 2s0.897 2 2 2c1.103 0 2-0.897 2-2s-0.897-2-2-2z"
  }, pathProps))));
}

LiniCog2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCog2;