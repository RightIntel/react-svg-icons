var React = require('react');

var PropTypes = require('prop-types');

function LiniEgg2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniEgg2';

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
    d: "M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c3.947 0 6.447 0.731 7.869 2.3 0.647 0.714 1.084 1.611 1.335 2.744 0.202 0.911 0.293 1.977 0.293 3.455 0 1.053 0.258 2.13 0.508 3.172 0.219 0.916 0.427 1.781 0.46 2.607 0.040 0.985-0.186 1.775-0.691 2.416-1.258 1.595-4.272 2.306-9.773 2.306zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5c5.026 0 7.966-0.63 8.988-1.925 0.8-1.014 0.45-2.477 0.044-4.17-0.263-1.098-0.535-2.234-0.535-3.405 0-2.411-0.233-4.274-1.369-5.528-1.219-1.345-3.484-1.972-7.128-1.972z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M7.5 15c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5 4.5 2.019 4.5 4.5c0 2.481-2.019 4.5-4.5 4.5zM7.5 7c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M7.5 13c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.827 0 1.5-0.673 1.5-1.5 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 1.378-1.122 2.5-2.5 2.5z"
  }, pathProps))));
}

LiniEgg2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniEgg2;