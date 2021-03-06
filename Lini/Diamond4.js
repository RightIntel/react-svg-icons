var React = require('react');

var PropTypes = require('prop-types');

function LiniDiamond4({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniDiamond4';

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
    d: "M9.5 18c-0.142 0-0.277-0.060-0.372-0.166l-9-10c-0.16-0.178-0.172-0.443-0.028-0.634l3-4c0.094-0.126 0.243-0.2 0.4-0.2h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-5.75l-2.603 3.471 8.353 9.281 8.353-9.281-2.603-3.471h-1.75c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.157 0 0.306 0.074 0.4 0.2l3 4c0.143 0.191 0.131 0.457-0.028 0.634l-9 10c-0.095 0.105-0.23 0.166-0.372 0.166z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M11.5 10c-0.276 0-0.5-0.224-0.5-0.5 0-1.378-1.122-2.5-2.5-2.5-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c1.378 0 2.5-1.122 2.5-2.5 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 1.378 1.122 2.5 2.5 2.5 0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-1.378 0-2.5 1.122-2.5 2.5 0 0.276-0.224 0.5-0.5 0.5zM10.301 6.5c0.49 0.296 0.903 0.708 1.199 1.199 0.296-0.49 0.708-0.903 1.199-1.199-0.49-0.296-0.903-0.708-1.199-1.199-0.296 0.49-0.708 0.903-1.199 1.199z"
  }, pathProps))));
}

LiniDiamond4.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniDiamond4;