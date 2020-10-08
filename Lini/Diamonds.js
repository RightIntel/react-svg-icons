var React = require('react');

var PropTypes = require('prop-types');

function LiniDiamonds({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniDiamonds';

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
    d: "M9.5 20c-0.154 0-0.3-0.071-0.395-0.193l-7-9c-0.14-0.181-0.14-0.433 0-0.614l7-9c0.095-0.122 0.24-0.193 0.395-0.193s0.3 0.071 0.395 0.193l7 9c0.14 0.181 0.14 0.433 0 0.614l-7 9c-0.095 0.122-0.24 0.193-0.395 0.193zM3.133 10.5l6.367 8.186 6.367-8.186-6.367-8.186-6.367 8.186z"
  }, pathProps))));
}

LiniDiamonds.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniDiamonds;