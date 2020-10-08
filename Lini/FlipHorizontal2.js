var React = require('react');

var PropTypes = require('prop-types');

function LiniFlipHorizontal2({
  size,
  ...props
}) {
  var className = 'Component Lini LiniFlipHorizontal2';

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
    d: "M0.5 19c-0.078 0-0.157-0.018-0.229-0.055-0.167-0.086-0.271-0.257-0.271-0.445v-10c0-0.187 0.105-0.359 0.271-0.445s0.367-0.071 0.519 0.038l7 5c0.131 0.094 0.209 0.245 0.209 0.407s-0.078 0.313-0.209 0.407l-7 5c-0.086 0.062-0.188 0.093-0.291 0.093zM1 9.472v8.057l5.64-4.028-5.64-4.028z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 19c-0.102 0-0.204-0.031-0.291-0.093l-7-5c-0.131-0.094-0.209-0.245-0.209-0.407s0.078-0.313 0.209-0.407l7-5c0.152-0.109 0.353-0.123 0.519-0.038s0.271 0.257 0.271 0.445v10c0 0.187-0.105 0.359-0.271 0.445-0.072 0.037-0.151 0.055-0.229 0.055zM12.36 13.5l5.64 4.028v-8.057l-5.64 4.028z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 10c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 13c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 16c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 19c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 1c-0.276 0-0.5 0.224-0.5 0.5v2.652c-1.97-2.011-4.666-3.152-7.5-3.152-1.679 0-3.284 0.385-4.77 1.144-1.417 0.724-2.672 1.78-3.63 3.055-0.166 0.221-0.121 0.534 0.099 0.7 0.090 0.068 0.195 0.1 0.3 0.1 0.152 0 0.302-0.069 0.4-0.2 1.814-2.415 4.584-3.799 7.6-3.799 2.633 0 5.134 1.088 6.928 3h-2.928c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5z"
  })));
}

LiniFlipHorizontal2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFlipHorizontal2;