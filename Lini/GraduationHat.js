var React = require('react');

var PropTypes = require('prop-types');

function LiniGraduationHat({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniGraduationHat';

  if (props.className) {
    className += ' ' + props.className;
  }

  const pathProps = {};

  if (color) {
    pathProps.fill = color;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", _extends({
    d: "M18.658 7.026l-9-3c-0.103-0.034-0.214-0.034-0.316 0l-9 3c-0.204 0.068-0.342 0.259-0.342 0.474s0.138 0.406 0.342 0.474l2.658 0.886v2.64c0 0.133 0.053 0.26 0.146 0.354 0.088 0.088 2.194 2.146 6.354 2.146 1.513 0 2.924-0.272 4.195-0.809 0.254-0.107 0.373-0.401 0.266-0.655s-0.401-0.373-0.655-0.266c-1.147 0.485-2.427 0.73-3.805 0.73-1.945 0-3.376-0.504-4.234-0.926-0.635-0.313-1.060-0.629-1.266-0.799v-2.081l5.342 1.781c0.051 0.017 0.105 0.026 0.158 0.026s0.107-0.009 0.158-0.026l5.342-1.781v0.892c-0.582 0.206-1 0.762-1 1.414 0 0.611 0.367 1.137 0.892 1.371l-0.877 3.508c-0.037 0.149-0.004 0.308 0.091 0.429s0.24 0.192 0.394 0.192h2c0.154 0 0.299-0.071 0.394-0.192s0.128-0.28 0.091-0.429l-0.877-3.508c0.525-0.234 0.892-0.76 0.892-1.371 0-0.652-0.418-1.208-1-1.414v-1.226l2.658-0.886c0.204-0.068 0.342-0.259 0.342-0.474s-0.138-0.406-0.342-0.474zM15.5 11c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5zM15.14 16l0.36-1.438 0.36 1.438h-0.719zM15.46 7.986l-5.877-0.98c-0.273-0.045-0.53 0.139-0.575 0.411s0.139 0.53 0.411 0.575l4.014 0.669-3.932 1.311-7.419-2.473 7.419-2.473 7.419 2.473-1.459 0.486z"
  }, pathProps))));
}

LiniGraduationHat.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniGraduationHat;