var React = require('react');

var PropTypes = require('prop-types');

function LiniArrowUp({
  size,
  ...props
}) {
  var className = 'Component Lini LiniArrowUp';

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
    d: "M9.146 0.646l-6 6c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l5.146-5.146v16.293c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-16.293l5.146 5.146c0.195 0.195 0.512 0.195 0.707 0 0.098-0.098 0.146-0.226 0.146-0.354s-0.049-0.256-0.146-0.354l-6-6c-0.195-0.195-0.512-0.195-0.707 0z",
    fill: "#000000"
  })));
}

LiniArrowUp.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniArrowUp;