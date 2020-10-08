var React = require('react');

var PropTypes = require('prop-types');

function LiniFileCode({
  size,
  ...props
}) {
  var className = 'Component Lini LiniFileCode';

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
    d: "M17.854 5.646l-4.5-4.5c-0.094-0.094-0.221-0.146-0.354-0.146h-9.5c-0.827 0-1.5 0.673-1.5 1.5v16c0 0.827 0.673 1.5 1.5 1.5h13c0.827 0 1.5-0.673 1.5-1.5v-12.5c0-0.133-0.053-0.26-0.146-0.354zM16.793 6h-3.293c-0.276 0-0.5-0.224-0.5-0.5v-3.293l3.793 3.793zM16.5 19h-13c-0.276 0-0.5-0.224-0.5-0.5v-16c0-0.276 0.224-0.5 0.5-0.5h8.5v3.5c0 0.827 0.673 1.5 1.5 1.5h3.5v11.5c0 0.276-0.224 0.5-0.5 0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 17c-0.128 0-0.256-0.049-0.354-0.146l-2-2c-0.195-0.195-0.195-0.512 0-0.707l2-2c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-1.646 1.646 1.646 1.646c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 17c-0.037 0-0.074-0.004-0.112-0.013-0.269-0.062-0.438-0.33-0.376-0.599l0.914-4c0.062-0.269 0.33-0.438 0.599-0.376s0.438 0.33 0.376 0.599l-0.914 4c-0.053 0.232-0.259 0.389-0.487 0.389z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 17c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l1.646-1.646-1.646-1.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2 2c0.195 0.195 0.195 0.512 0 0.707l-2 2c-0.098 0.098-0.226 0.146-0.354 0.146z",
    fill: "#000000"
  })));
}

LiniFileCode.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFileCode;