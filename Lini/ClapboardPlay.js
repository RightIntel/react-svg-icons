var React = require('react');

var PropTypes = require('prop-types');

function LiniClapboardPlay({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniClapboardPlay';

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
    d: "M17.5 2h-1.002c-0.001 0-0.001 0-0.002 0h-3.998c-0.001 0-0.001 0-0.002 0h-3.998c-0.001 0-0.001 0-0.002 0h-3.998c-0.001 0-0.001 0-0.002 0h-2.997c-0.827 0-1.5 0.673-1.5 1.5v13c0 0.827 0.673 1.5 1.5 1.5h16c0.827 0 1.5-0.673 1.5-1.5v-13c0-0.827-0.673-1.5-1.5-1.5zM18 3.5v1.5h-2.566l1.333-2h0.732c0.276 0 0.5 0.224 0.5 0.5zM11.434 5l1.333-2h2.798l-1.333 2h-2.798zM7.434 5l1.333-2h2.798l-1.333 2h-2.798zM3.434 5l1.333-2h2.798l-1.333 2h-2.798zM1.5 3h2.066l-1.333 2h-1.232v-1.5c0-0.276 0.224-0.5 0.5-0.5zM17.5 17h-16c-0.276 0-0.5-0.224-0.5-0.5v-10.5h1.498c0 0 0.001 0 0.001 0s0.001-0 0.002-0h3.997c0 0 0.001 0 0.001 0s0.001-0 0.002-0h3.997c0 0 0.001 0 0.001 0s0.001-0 0.002-0h3.997c0 0 0.001 0 0.001 0s0.001-0 0.002-0h3.499v10.5c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M7.5 15c-0.085 0-0.17-0.022-0.246-0.065-0.157-0.089-0.254-0.255-0.254-0.435v-6c0-0.18 0.097-0.346 0.254-0.435s0.349-0.086 0.504 0.006l5 3c0.151 0.090 0.243 0.253 0.243 0.429s-0.092 0.338-0.243 0.429l-5 3c-0.079 0.047-0.168 0.071-0.257 0.071zM8 9.383v4.234l3.528-2.117-3.528-2.117z"
  }, pathProps))));
}

LiniClapboardPlay.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniClapboardPlay;