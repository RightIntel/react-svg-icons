var React = require('react');

var PropTypes = require('prop-types');

function LiniMagnet({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniMagnet';

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
    d: "M16.992 1.411c-0.043-0.238-0.25-0.411-0.492-0.411h-4c-0.144 0-0.281 0.062-0.376 0.171s-0.138 0.253-0.119 0.395c0.010 0.075 0.996 7.49 0.996 9.434 0 1.682-1.318 3-3 3-1.654 0-3-1.346-3-3 0-1.878 0.986-9.359 0.996-9.434 0.019-0.143-0.025-0.287-0.12-0.395s-0.232-0.17-0.376-0.17h-4c-0.242 0-0.449 0.173-0.492 0.411-0.041 0.226-1.008 5.59-1.008 9.589 0 1.047 0.212 2.075 0.629 3.055 0.404 0.948 0.98 1.805 1.711 2.546 1.527 1.547 3.537 2.399 5.659 2.399s4.132-0.852 5.659-2.399c0.732-0.741 1.307-1.598 1.711-2.546 0.418-0.98 0.629-2.008 0.629-3.055 0-3.999-0.967-9.363-1.008-9.589zM16.079 2c0.095 0.564 0.273 1.662 0.447 2.989l-3.081 0.010c-0.149-1.243-0.291-2.356-0.375-2.999h3.009zM3.921 2h3.010c-0.083 0.64-0.224 1.75-0.371 2.988l-3.087 0.010c0.174-1.331 0.352-2.432 0.448-2.998zM10 18c-3.794 0-7-3.206-7-7 0-1.568 0.158-3.385 0.348-5.001l3.094-0.010c-0.23 2-0.442 4.098-0.442 5.011 0 2.206 1.794 4 4 4 2.243 0 4-1.757 4-4 0-0.939-0.21-3.019-0.438-5.002l3.089-0.010c0.191 1.619 0.349 3.44 0.349 5.012 0 3.794-3.206 7-7 7z"
  }, pathProps))));
}

LiniMagnet.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniMagnet;