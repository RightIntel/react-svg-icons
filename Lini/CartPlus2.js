var React = require('react');

var PropTypes = require('prop-types');

function LiniCartPlus2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniCartPlus2';

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
    d: "M17.539 4.467c-0.251-0.297-0.63-0.467-1.039-0.467h-4c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4c0.117 0 0.215 0.040 0.276 0.113s0.085 0.176 0.066 0.291l-0.671 4.027c-0.053 0.316-0.391 0.629-0.711 0.657l-10.043 0.873-0.994-5.962h4.076c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-4.243l-0.099-0.596c-0.131-0.787-0.859-1.404-1.658-1.404h-1c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1c0.307 0 0.621 0.266 0.671 0.569l1.671 10.027c0.131 0.787 0.859 1.404 1.658 1.404h10c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-10c-0.307 0-0.621-0.266-0.671-0.569l-0.247-1.48 9.965-0.867c0.775-0.067 1.483-0.721 1.611-1.489l0.671-4.027c0.067-0.404-0.038-0.806-0.289-1.102z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M8 20c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zM8 17c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M15 20c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zM15 17c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M12.5 6h-1.5v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5h-1.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.5v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.5h1.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z"
  }, pathProps))));
}

LiniCartPlus2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCartPlus2;