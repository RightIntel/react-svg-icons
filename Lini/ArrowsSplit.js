var React = require('react');

var PropTypes = require('prop-types');

function LiniArrowsSplit({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniArrowsSplit';

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
    d: "M18.5 1h-5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h3.793l-8.146 8.146c-0.094 0.094-0.146 0.221-0.146 0.354v9c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-8.793l8-8v3.793c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M7.854 8.146l-6.146-6.146h3.793c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-5c-0.276 0-0.5 0.224-0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-3.793l6.146 6.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707z"
  }, pathProps))));
}

LiniArrowsSplit.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniArrowsSplit;