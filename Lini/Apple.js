var React = require('react');

var PropTypes = require('prop-types');

function LiniApple({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniApple';

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
  }, /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16.215 5.318c-1.015-0.874-2.434-1.318-4.215-1.318-0.585 0-1.22 0.179-1.729 0.323-0.090 0.026-0.181 0.051-0.269 0.075 0.054-1.883 1.603-3.398 3.498-3.398 0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c-2.447 0-4.445 1.964-4.499 4.399-0.088-0.024-0.18-0.050-0.272-0.076-0.51-0.144-1.144-0.323-1.729-0.323-1.782 0-3.2 0.443-4.215 1.318-1.184 1.020-1.785 2.595-1.785 4.682 0 2.143 0.624 4.588 1.67 6.539 1.196 2.232 2.734 3.461 4.33 3.461 0.517 0 0.933-0.134 1.336-0.264 0.375-0.121 0.73-0.236 1.164-0.236s0.789 0.114 1.164 0.236c0.402 0.13 0.819 0.264 1.336 0.264 1.596 0 3.134-1.229 4.33-3.461 1.046-1.952 1.67-4.396 1.67-6.539 0-2.087-0.6-3.662-1.785-4.682zM15.448 16.067c-0.999 1.864-2.256 2.933-3.448 2.933-0.36 0-0.67-0.1-1.028-0.216-0.412-0.133-0.88-0.284-1.472-0.284s-1.059 0.151-1.472 0.284c-0.359 0.116-0.669 0.216-1.028 0.216-1.193 0-2.45-1.069-3.448-2.933-0.972-1.813-1.552-4.081-1.552-6.067 0-1.783 0.484-3.103 1.437-3.924 0.829-0.714 2.027-1.076 3.563-1.076 0.447 0 0.984 0.152 1.458 0.286 0.408 0.115 0.759 0.214 1.042 0.214s0.635-0.099 1.042-0.214c0.474-0.134 1.011-0.286 1.458-0.286 1.535 0 2.734 0.362 3.563 1.076 0.954 0.821 1.437 2.142 1.437 3.924 0 1.986-0.58 4.254-1.552 6.067z"
  }, pathProps))));
}

LiniApple.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniApple;