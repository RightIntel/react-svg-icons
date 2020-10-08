var React = require('react');

var PropTypes = require('prop-types');

function LiniDinner({
  size,
  ...props
}) {
  var className = 'Component Lini LiniDinner';

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
    d: "M8 0.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5c0 1.306 0.252 2.397 0.455 3.274 0.198 0.854 0.353 1.529 0.13 1.811-0.186 0.234-0.717 0.37-1.581 0.406-0.002-0.162-0.004-0.326-0.004-0.49v-4c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v4c0 0.165-0.001 0.328-0.004 0.49-0.861-0.037-1.391-0.174-1.577-0.408-0.225-0.283-0.069-0.959 0.128-1.814 0.202-0.875 0.453-1.965 0.453-3.267 0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5c0 1.189-0.237 2.217-0.427 3.043-0.258 1.118-0.461 2.002 0.064 2.662 0.39 0.49 1.101 0.733 2.333 0.785-0.112 2.79-0.516 5.19-0.851 7.177-0.446 2.644-0.74 4.39 0.012 5.279 0.311 0.368 0.772 0.555 1.37 0.555s1.059-0.187 1.37-0.555c0.752-0.89 0.458-2.638 0.012-5.284-0.334-1.985-0.738-4.384-0.851-7.172 1.235-0.050 1.946-0.292 2.337-0.783 0.524-0.659 0.32-1.541 0.062-2.659-0.191-0.827-0.429-1.857-0.429-3.048zM6.106 18.799c-0.073 0.086-0.215 0.201-0.606 0.201s-0.533-0.114-0.606-0.2c-0.452-0.535-0.145-2.357 0.211-4.467 0.129-0.762 0.267-1.585 0.396-2.467 0.129 0.881 0.267 1.701 0.395 2.463 0.356 2.112 0.663 3.936 0.211 4.472z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.882 14.162c-0.393-2.331-0.881-5.231-0.882-8.662v-5c0-0.227-0.153-0.425-0.372-0.483s-0.45 0.038-0.562 0.235c-2.019 3.534-3.016 8.931-3.058 9.159-0.027 0.146 0.013 0.296 0.108 0.41s0.236 0.18 0.384 0.18h2.235c-0.175 1.544-0.409 2.935-0.617 4.166-0.446 2.644-0.74 4.39 0.012 5.279 0.311 0.368 0.772 0.555 1.37 0.555s1.059-0.187 1.37-0.555c0.752-0.89 0.458-2.638 0.012-5.284zM12.111 9c0.248-1.171 0.882-3.887 1.889-6.317v2.817c0 1.236-0.063 2.403-0.163 3.5h-1.727zM15.106 18.799c-0.073 0.086-0.215 0.201-0.606 0.201s-0.533-0.114-0.606-0.2c-0.452-0.535-0.145-2.357 0.211-4.467 0.129-0.762 0.267-1.585 0.396-2.467 0.129 0.881 0.267 1.702 0.395 2.463 0.356 2.112 0.663 3.936 0.211 4.472z",
    fill: "#000000"
  })));
}

LiniDinner.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniDinner;