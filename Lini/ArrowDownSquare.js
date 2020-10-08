var React = require('react');

var PropTypes = require('prop-types');

function LiniArrowDownSquare({
  size,
  ...props
}) {
  var className = 'Component Lini LiniArrowDownSquare';

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
    d: "M17.5 1h-16c-0.827 0-1.5 0.673-1.5 1.5v16c0 0.827 0.673 1.5 1.5 1.5h16c0.827 0 1.5-0.673 1.5-1.5v-16c0-0.827-0.673-1.5-1.5-1.5zM1.5 19c-0.276 0-0.5-0.224-0.5-0.5v-16c0-0.276 0.224-0.5 0.5-0.5h16c0.276 0 0.5 0.224 0.5 0.5v16c0 0.276-0.224 0.5-0.5 0.5h-16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.854 12.354l-3 3c-0.195 0.195-0.512 0.195-0.707 0l-3-3c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2.146 2.146v-8.293c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v8.293l2.146-2.146c0.098-0.098 0.226-0.146 0.354-0.146s0.256 0.049 0.354 0.146c0.195 0.195 0.195 0.512 0 0.707z"
  })));
}

LiniArrowDownSquare.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniArrowDownSquare;