var React = require('react');

var PropTypes = require('prop-types');

function LiniPizza({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniPizza';

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
    d: "M19.95 9.332c-0.045-0.125-0.137-0.227-0.257-0.284l-2.711-1.286c-0-0-0-0-0-0s-0-0-0-0l-16.268-7.714c-0.191-0.091-0.418-0.051-0.568 0.098s-0.189 0.377-0.098 0.568l7.714 16.268c0 0 0 0 0 0s0 0 0 0l1.285 2.711c0.057 0.12 0.159 0.212 0.284 0.257 0.054 0.019 0.111 0.029 0.168 0.029 0.074 0 0.147-0.016 0.215-0.048 4.466-2.122 8.094-5.75 10.216-10.216 0.057-0.12 0.064-0.257 0.019-0.382zM14 8c0 0.551-0.449 1-1 1s-1-0.449-1-1 0.449-1 1-1c0.012 0 0.024-0.001 0.036-0.002l0.711 0.337c0.164 0.183 0.253 0.416 0.253 0.665zM11.791 6.408c-0.48 0.366-0.791 0.943-0.791 1.592 0 1.103 0.897 2 2 2s2-0.897 2-2c0-0.024-0.002-0.048-0.006-0.073l1.101 0.522c-1.676 3.281-4.365 5.97-7.646 7.646l-1.962-4.138c0.168 0.029 0.34 0.044 0.514 0.044 1.654 0 3-1.346 3-3s-1.346-3-3-3c-0.788 0-1.532 0.303-2.096 0.853-0.207 0.202-0.38 0.429-0.519 0.674l-2.833-5.975 10.239 4.855zM5.007 8.837c0.082-1.038 0.937-1.837 1.993-1.837 1.103 0 2 0.897 2 2s-0.897 2-2 2c-0.411 0-0.801-0.122-1.135-0.353l-0.858-1.81zM9.735 18.807l-0.858-1.809c3.489-1.775 6.346-4.632 8.121-8.121l1.809 0.858c-1.974 3.904-5.168 7.099-9.072 9.072z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M4.5 5h1c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M11.5 13c0.276 0 0.5-0.224 0.5-0.5v-1c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1c0 0.276 0.224 0.5 0.5 0.5z"
  }, pathProps))));
}

LiniPizza.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPizza;