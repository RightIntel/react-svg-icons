var React = require('react');

var PropTypes = require('prop-types');

function LiniArrowDownCircle({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniArrowDownCircle';

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
    d: "M9.853 16.353l4-4c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-3.146 3.147v-10.293c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v10.293l-3.147-3.146c-0.195-0.195-0.512-0.195-0.707 0-0.098 0.098-0.146 0.226-0.146 0.353s0.049 0.256 0.147 0.353l4 4c0.195 0.195 0.512 0.195 0.707 0z",
    fill: color
  })));
}

LiniArrowDownCircle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniArrowDownCircle;