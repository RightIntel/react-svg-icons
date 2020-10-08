var React = require('react');

var PropTypes = require('prop-types');

function LiniUnderline({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniUnderline';

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
    d: "M14.5 18h-9c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h9c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10 15c-2.757 0-5-2.243-5-5v-7.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v7.5c0 2.206 1.794 4 4 4s4-1.794 4-4v-7.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v7.5c0 2.757-2.243 5-5 5z"
  }, pathProps))));
}

LiniUnderline.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniUnderline;