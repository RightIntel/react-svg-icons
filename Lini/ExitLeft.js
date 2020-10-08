var React = require('react');

var PropTypes = require('prop-types');

function LiniExitLeft({
  size,
  ...props
}) {
  var className = 'Component Lini LiniExitLeft';

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
    d: "M20 4.5v12c0 0.827-0.673 1.5-1.5 1.5h-10c-0.827 0-1.5-0.673-1.5-1.5v-4c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5h10c0.276 0 0.5-0.224 0.5-0.5v-12c0-0.276-0.224-0.5-0.5-0.5h-10c-0.276 0-0.5 0.224-0.5 0.5v4c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-4c0-0.827 0.673-1.5 1.5-1.5h10c0.827 0 1.5 0.673 1.5 1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.646 7.147l-3 3c-0.195 0.195-0.195 0.512 0 0.707l3 3c0.195 0.195 0.512 0.195 0.707 0s0.195-0.512 0-0.707l-2.146-2.147h11.293c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-11.293l2.146-2.147c0.098-0.098 0.146-0.226 0.146-0.353s-0.049-0.256-0.146-0.353c-0.195-0.195-0.512-0.195-0.707 0z"
  })));
}

LiniExitLeft.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniExitLeft;