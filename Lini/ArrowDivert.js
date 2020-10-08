var React = require('react');

var PropTypes = require('prop-types');

function LiniArrowDivert({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniArrowDivert';

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
    d: "M19.5 4h-6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4.793l-9.793 9.793-7.646-7.646c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l8 8c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l10.146-10.146v4.793c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-6c0-0.276-0.224-0.5-0.5-0.5z"
  }, pathProps))));
}

LiniArrowDivert.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniArrowDivert;