var React = require('react');

var PropTypes = require('prop-types');

function LiniPlusSquare({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniPlusSquare';

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
    d: "M17.5 20h-16c-0.827 0-1.5-0.673-1.5-1.5v-16c0-0.827 0.673-1.5 1.5-1.5h16c0.827 0 1.5 0.673 1.5 1.5v16c0 0.827-0.673 1.5-1.5 1.5zM1.5 2c-0.276 0-0.5 0.224-0.5 0.5v16c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-16c0-0.276-0.224-0.5-0.5-0.5h-16z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14.5 10h-4.5v-4.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v4.5h-4.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4.5v4.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4.5h4.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z"
  }, pathProps))));
}

LiniPlusSquare.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPlusSquare;