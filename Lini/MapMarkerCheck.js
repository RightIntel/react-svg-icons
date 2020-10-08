var React = require('react');

var PropTypes = require('prop-types');

function LiniMapMarkerCheck({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniMapMarkerCheck';

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
    d: "M10 20c-0.153 0-0.298-0.070-0.393-0.191-0.057-0.073-1.418-1.814-2.797-4.385-0.812-1.513-1.46-2.999-1.925-4.416-0.587-1.787-0.884-3.472-0.884-5.008 0-3.308 2.692-6 6-6 1.244 0 2.437 0.377 3.451 1.091 0.226 0.159 0.28 0.471 0.121 0.697s-0.471 0.28-0.697 0.121c-0.844-0.594-1.838-0.909-2.875-0.909-2.757 0-5 2.243-5 5 0 3.254 1.463 6.664 2.691 8.951 0.902 1.681 1.809 3.014 2.309 3.71 0.483-0.672 1.346-1.938 2.214-3.533 1.192-2.19 2.642-5.468 2.776-8.649 0.012-0.276 0.245-0.49 0.521-0.479s0.49 0.245 0.478 0.521c-0.063 1.498-0.399 3.132-0.998 4.855-0.475 1.368-1.117 2.796-1.908 4.246-1.343 2.464-2.636 4.118-2.69 4.187-0.095 0.121-0.24 0.191-0.393 0.191z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M10 9c-0.128 0-0.256-0.049-0.354-0.146l-2.5-2.5c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2.146 2.146 5.146-5.146c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-5.5 5.5c-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps))));
}

LiniMapMarkerCheck.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniMapMarkerCheck;