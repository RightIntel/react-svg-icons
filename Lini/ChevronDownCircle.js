var React = require('react');

var PropTypes = require('prop-types');

function LiniChevronDownCircle({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniChevronDownCircle';

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
    d: "M16.218 17.218c1.794-1.794 2.782-4.18 2.782-6.718s-0.988-4.923-2.782-6.717-4.18-2.782-6.718-2.782-4.923 0.988-6.718 2.782-2.782 4.18-2.782 6.717 0.988 4.923 2.782 6.718 4.18 2.782 6.718 2.782 4.923-0.988 6.718-2.782zM1 10.5c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5c0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 9c0-0.128 0.049-0.256 0.146-0.354 0.195-0.195 0.512-0.195 0.707 0l4.646 4.646 4.646-4.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-5 5c-0.195 0.195-0.512 0.195-0.707 0l-5-5c-0.098-0.098-0.146-0.226-0.146-0.354z",
    fill: color
  })));
}

LiniChevronDownCircle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniChevronDownCircle;