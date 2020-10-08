var React = require('react');

var PropTypes = require('prop-types');

function LiniExitUp2({
  size,
  ...props
}) {
  var className = 'Component Lini LiniExitUp2';

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
    d: "M17.5 19h-16c-0.827 0-1.5-0.673-1.5-1.5v-1c0-0.827 0.673-1.5 1.5-1.5h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-6c-0.276 0-0.5 0.224-0.5 0.5v1c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-1c0-0.276-0.224-0.5-0.5-0.5h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.827 0 1.5 0.673 1.5 1.5v1c0 0.827-0.673 1.5-1.5 1.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.854 6.354c-0.195 0.195-0.512 0.195-0.707 0l-4.146-4.146v14.293c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-14.293l-4.146 4.146c-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707l5-5c0.098-0.098 0.226-0.146 0.354-0.146s0.256 0.049 0.354 0.146l5 5c0.195 0.195 0.195 0.512-0 0.707z",
    fill: "#000000"
  })));
}

LiniExitUp2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniExitUp2;