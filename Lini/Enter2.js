var React = require('react');

var PropTypes = require('prop-types');

function LiniEnter2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniEnter2';

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
    d: "M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 4.687 3.813 8.5 8.5 8.5s8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c2.538 0 4.923 0.988 6.717 2.783s2.783 4.18 2.783 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9.5 4c-0.276 0-0.5 0.224-0.5 0.5v4.793l-8.146-8.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l8.146 8.146h-4.793c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h6c0.276 0 0.5-0.224 0.5-0.5v-6c0-0.276-0.224-0.5-0.5-0.5z"
  }, pathProps))));
}

LiniEnter2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniEnter2;