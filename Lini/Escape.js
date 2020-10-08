var React = require('react');

var PropTypes = require('prop-types');

function LiniEscape({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniEscape';

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
    d: "M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 4.687 3.813 8.5 8.5 8.5s8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c2.538 0 4.923 0.988 6.717 2.783s2.783 4.18 2.783 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.854 10.146l-8.146-8.146h4.793c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-6c-0.276 0-0.5 0.224-0.5 0.5v6c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4.793l8.146 8.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707z",
    fill: color
  })));
}

LiniEscape.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniEscape;