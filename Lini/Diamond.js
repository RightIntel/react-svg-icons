var React = require('react');

var PropTypes = require('prop-types');

function LiniDiamond({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniDiamond';

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
    d: "M9.5 18c-0.142 0-0.277-0.060-0.372-0.166l-9-10c-0.16-0.178-0.172-0.443-0.028-0.634l3-4c0.094-0.126 0.243-0.2 0.4-0.2h12c0.157 0 0.306 0.074 0.4 0.2l3 4c0.143 0.191 0.131 0.457-0.028 0.634l-9 10c-0.095 0.105-0.23 0.166-0.372 0.166zM1.147 7.471l8.353 9.281 8.353-9.281-2.603-3.471h-11.5l-2.603 3.471z"
  }, pathProps))));
}

LiniDiamond.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniDiamond;