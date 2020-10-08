var React = require('react');

var PropTypes = require('prop-types');

function LiniArrowUpRight({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniArrowUpRight';

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
    d: "M17.5 2h-8c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h6.793l-14.146 14.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l14.146-14.146v6.793c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-8c0-0.276-0.224-0.5-0.5-0.5z"
  }, pathProps))));
}

LiniArrowUpRight.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniArrowUpRight;