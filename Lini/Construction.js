var React = require('react');

var PropTypes = require('prop-types');

function LiniConstruction({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniConstruction';

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
    d: "M20 5v-1.5c0-0.276-0.224-0.5-0.5-0.5h-3.5c-0 0-0 0-0 0h-5c-0 0-0 0-0 0h-5c-0 0-0 0-0 0h-5.5c-0.276 0-0.5 0.224-0.5 0.5v6c0 0.276 0.224 0.5 0.5 0.5h1.5v6h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.5v-3h10v3h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.5v-6h1.5c0.276 0 0.5-0.224 0.5-0.5v-4.5c0-0 0-0 0-0zM19 4.793l-4.207 4.207h-3.586l5-5h2.793v0.793zM6.207 9l5-5h3.586l-5 5h-3.586zM1.207 9l5-5h3.586l-5 5h-3.586zM4.793 4l-3.793 3.793v-3.793h3.793zM3 16v-6h1v6h-1zM5 12v-2h10v2h-10zM17 16h-1v-6h1v6zM16.207 9l2.793-2.793v2.793h-2.793z"
  }, pathProps))));
}

LiniConstruction.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniConstruction;