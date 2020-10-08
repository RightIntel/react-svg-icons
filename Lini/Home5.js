var React = require('react');

var PropTypes = require('prop-types');

function LiniHome5({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniHome5';

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
  }, /*#__PURE__*/React.createElement("path", _extends({
    d: "M0.5 12c-0.12 0-0.24-0.043-0.335-0.129-0.205-0.185-0.221-0.501-0.035-0.706l8.829-9.758c0.274-0.303 0.644-0.47 1.042-0.47 0 0 0 0 0 0 0.397 0 0.767 0.167 1.042 0.47l2.965 3.277-0.007-1.18c-0.001-0.133 0.052-0.261 0.145-0.355s0.221-0.147 0.355-0.147h2c0.276 0 0.5 0.224 0.5 0.5v4.492l2.871 3.173c0.185 0.205 0.169 0.521-0.035 0.706s-0.521 0.169-0.706-0.035l-3-3.316c-0.083-0.092-0.129-0.212-0.129-0.335v-4.184h-0.997l0.011 1.986c0.001 0.207-0.126 0.394-0.319 0.469s-0.413 0.023-0.552-0.131l-3.843-4.247c-0.082-0.091-0.189-0.141-0.3-0.141s-0.218 0.050-0.3 0.141l-8.829 9.758c-0.099 0.109-0.235 0.165-0.371 0.165z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M15.5 20h-11c-0.827 0-1.5-0.673-1.5-1.5v-8c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v8c0 0.276 0.224 0.5 0.5 0.5h11c0.276 0 0.5-0.224 0.5-0.5v-8c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v8c0 0.827-0.673 1.5-1.5 1.5z"
  }, pathProps))));
}

LiniHome5.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniHome5;