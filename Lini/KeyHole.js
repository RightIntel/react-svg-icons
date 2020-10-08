var React = require('react');

var PropTypes = require('prop-types');

function LiniKeyHole({
  size,
  ...props
}) {
  var className = 'Component Lini LiniKeyHole';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.5 20h-9c-0.157 0-0.306-0.074-0.4-0.2s-0.124-0.289-0.080-0.44l2.873-9.824c-1.748-0.813-2.893-2.58-2.893-4.536 0-2.757 2.243-5 5-5s5 2.243 5 5c0 1.956-1.145 3.723-2.894 4.536l2.873 9.824c0.044 0.151 0.015 0.314-0.080 0.44s-0.243 0.2-0.4 0.2zM6.167 19h7.666l-2.813-9.616c-0.075-0.255 0.063-0.523 0.313-0.612 1.595-0.564 2.667-2.080 2.667-3.772 0-2.206-1.794-4-4-4s-4 1.794-4 4c0 1.692 1.072 3.208 2.667 3.772 0.25 0.088 0.388 0.357 0.313 0.612l-2.813 9.616z"
  })));
}

LiniKeyHole.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniKeyHole;