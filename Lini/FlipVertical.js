var React = require('react');

var PropTypes = require('prop-types');

function LiniFlipVertical({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniFlipVertical';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 8.5v-8c0-0.167 0.084-0.324 0.223-0.417s0.316-0.109 0.471-0.044l19 8c0.219 0.092 0.343 0.326 0.296 0.56s-0.252 0.401-0.49 0.401h-19c-0.276 0-0.5-0.224-0.5-0.5zM1 1.253v6.747h16.024l-16.024-6.747z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 19.5v-8c0-0.276 0.224-0.5 0.5-0.5h19c0.238 0 0.443 0.168 0.49 0.401s-0.077 0.467-0.296 0.56l-19 8c-0.154 0.065-0.331 0.048-0.471-0.044s-0.223-0.249-0.223-0.417zM1 12v6.747l16.024-6.747h-16.024z",
    fill: color
  })));
}

LiniFlipVertical.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFlipVertical;