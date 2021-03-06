var React = require('react');

var PropTypes = require('prop-types');

function LiniChevronsExpandHorizontal({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniChevronsExpandHorizontal';

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
    d: "M12.5 15.5c0-0.128 0.049-0.256 0.146-0.354l5.646-5.646-5.646-5.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l6 6c0.195 0.195 0.195 0.512 0 0.707l-6 6c-0.195 0.195-0.512 0.195-0.707 0-0.098-0.098-0.146-0.226-0.146-0.354z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M0.5 9.5c0-0.128 0.049-0.256 0.146-0.354l6-6c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-5.646 5.646 5.646 5.646c0.195 0.195 0.195 0.512 0 0.707s-0.512 0.195-0.707 0l-6-6c-0.098-0.098-0.146-0.226-0.146-0.354z"
  }, pathProps))));
}

LiniChevronsExpandHorizontal.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniChevronsExpandHorizontal;