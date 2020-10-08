var React = require('react');

var PropTypes = require('prop-types');

function LiniIceCream({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniIceCream';

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
    d: "M17 8c0-1.861-1.278-3.43-3.002-3.874 0.001-0.042 0.002-0.084 0.002-0.126 0-2.206-1.788-4-3.985-4s-3.985 1.794-3.985 4c0 0.040 0.001 0.079 0.002 0.119-1.74 0.434-3.032 2.009-3.032 3.881 0 1.806 1.204 3.337 2.851 3.832l1.9 6.839c0.207 0.746 0.976 1.33 1.749 1.33h1c0.774 0 1.542-0.584 1.749-1.33l1.9-6.839c1.647-0.495 2.851-2.025 2.851-3.832zM11.946 16.026l-3.539 1.269-0.489-1.762 4.627-1.659-0.598 2.152zM10.5 19h-1c-0.324 0-0.699-0.285-0.786-0.597l-0.039-0.141 2.943-1.056-0.332 1.197c-0.087 0.313-0.461 0.597-0.786 0.597zM12.872 12.694l-5.223 1.873-0.713-2.568c0.022 0 0.043 0.001 0.065 0.001h6c0.022 0 0.043-0.001 0.065-0.001l-0.193 0.695zM13 11h-6c-1.654 0-3-1.346-3-3s1.346-3 3-3c0.79 0 1.535 0.304 2.099 0.857 0.197 0.193 0.514 0.19 0.707-0.007s0.19-0.514-0.007-0.707c-0.745-0.73-1.727-1.135-2.769-1.142 0-0 0-0 0-0 0-1.654 1.339-3 2.985-3s2.985 1.346 2.985 3c-0.191 0-0.383 0.014-0.571 0.041-0.273 0.039-0.463 0.292-0.424 0.566s0.292 0.463 0.566 0.424c0.141-0.020 0.285-0.030 0.429-0.030 1.654 0 3 1.346 3 3s-1.346 3-3 3z"
  }, pathProps))));
}

LiniIceCream.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniIceCream;