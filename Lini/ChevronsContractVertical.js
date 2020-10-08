var React = require('react');

var PropTypes = require('prop-types');

function LiniChevronsContractVertical({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniChevronsContractVertical';

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
    d: "M9.5 7.5c-0.128 0-0.256-0.049-0.354-0.146l-6-6c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l5.646 5.646 5.646-5.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-6 6c-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M15.5 19.5c-0.128 0-0.256-0.049-0.354-0.146l-5.646-5.646-5.646 5.646c-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707l6-6c0.195-0.195 0.512-0.195 0.707 0l6 6c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps))));
}

LiniChevronsContractVertical.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniChevronsContractVertical;