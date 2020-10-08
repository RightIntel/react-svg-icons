var React = require('react');

var PropTypes = require('prop-types');

function LiniPieChart2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniPieChart2';

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
    d: "M8.5 20c-2.27 0-4.405-0.884-6.010-2.49s-2.49-3.74-2.49-6.010c0-2.27 0.884-4.405 2.49-6.010s3.74-2.49 6.010-2.49c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-4.136 0-7.5 3.364-7.5 7.5s3.364 7.5 7.5 7.5c4.136 0 7.5-3.364 7.5-7.5 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 2.27-0.884 4.405-2.49 6.010s-3.74 2.49-6.010 2.49z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M18.5 10h-8c-0.276 0-0.5-0.224-0.5-0.5v-8c0-0.276 0.224-0.5 0.5-0.5 2.27 0 4.405 0.884 6.010 2.49s2.49 3.74 2.49 6.010c0 0.276-0.224 0.5-0.5 0.5zM11 9h6.984c-0.247-3.738-3.246-6.736-6.984-6.984v6.984z"
  }, pathProps))));
}

LiniPieChart2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPieChart2;