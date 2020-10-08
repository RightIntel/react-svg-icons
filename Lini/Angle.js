var React = require('react');

var PropTypes = require('prop-types');

function LiniAngle({
  size,
  ...props
}) {
  var className = 'Component Lini LiniAngle';

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
    d: "M19.5 18h-8.512c-0.126-2.65-1.247-5.146-3.139-7h1.652c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-3c-0.036 0-0.071 0.004-0.105 0.011l4.529-7.246c0.146-0.234 0.075-0.543-0.159-0.689s-0.543-0.075-0.689 0.159l-10 16c-0.096 0.154-0.101 0.348-0.013 0.507s0.256 0.258 0.437 0.258h19c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM6 10.643v2.857c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.928c1.79 1.68 2.858 3.98 2.987 6.428h-8.585l4.598-7.357z",
    fill: "#000000"
  })));
}

LiniAngle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniAngle;