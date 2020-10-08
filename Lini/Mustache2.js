var React = require('react');

var PropTypes = require('prop-types');

function LiniMustache2({
  size,
  ...props
}) {
  var className = 'Component Lini LiniMustache2';

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
    d: "M18.909 10.212c-0.119-0.169-0.33-0.247-0.53-0.197-0.386 0.097-0.747 0.146-1.073 0.146-0 0-0 0-0 0-1.277-0-1.936-0.755-2.633-1.553-0.657-0.753-1.402-1.607-2.673-1.607-1.042 0-1.962 0.534-2.5 1.344-0.538-0.809-1.458-1.344-2.5-1.344-1.271 0-2.016 0.854-2.673 1.607-0.697 0.799-1.355 1.553-2.633 1.553-0.326 0-0.686-0.049-1.073-0.146-0.2-0.050-0.411 0.028-0.53 0.197s-0.122 0.393-0.007 0.565c1.922 2.884 4.524 3.195 5.554 3.195 0.551 0 1.078-0.081 1.525-0.235 1.015-0.35 1.843-1.054 2.337-1.917 0.494 0.863 1.322 1.568 2.337 1.917 0.447 0.154 0.974 0.235 1.525 0.235 1.029-0 3.632-0.311 5.554-3.195 0.115-0.172 0.112-0.397-0.007-0.565zM6.837 12.791c-0.343 0.118-0.758 0.181-1.199 0.181-0.744 0-2.464-0.197-3.981-1.812 0.012 0 0.025 0 0.037 0 1.732 0 2.649-1.051 3.386-1.896 0.684-0.784 1.143-1.265 1.92-1.265 1.103 0 2 0.897 2 2 0 1.185-0.91 2.359-2.163 2.791zM13.362 12.972c-0.441 0-0.856-0.063-1.199-0.181-1.253-0.432-2.163-1.606-2.163-2.791 0-1.103 0.897-2 2-2 0.777 0 1.235 0.481 1.92 1.265 0.737 0.845 1.654 1.896 3.386 1.896 0 0 0 0 0 0 0.012 0 0.025-0 0.037-0-1.518 1.615-3.237 1.812-3.981 1.812z"
  })));
}

LiniMustache2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniMustache2;