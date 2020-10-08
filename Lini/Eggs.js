var React = require('react');

var PropTypes = require('prop-types');

function LiniEggs({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniEggs';

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
    d: "M5.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5c0 0.827-0.673 1.5-1.5 1.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M5.5 10c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zM5.5 4c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M13.5 15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5c0 0.827-0.673 1.5-1.5 1.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M13.5 17c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zM13.5 11c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M19.111 9.962c-0.537-1.103-1.275-2.144-2.134-3.009-1.249-1.257-2.549-1.949-3.662-1.949-0.195 0-0.434 0.023-0.687 0.099 0.365-1.051 0.638-2.295-0.068-3.32-0.408-0.593-1.074-1.024-2.035-1.32-1.015-0.312-2.331-0.463-4.025-0.463-3.584 0-6.5 2.916-6.5 6.5 0 4.435 1.738 6.5 5.469 6.5 0.682 0 1.32-0.098 1.912-0.292-0.529 0.694-0.973 1.378-1.203 2.088-0.405 1.248-0.093 2.407 0.955 3.542 0.598 0.648 1.577 1.091 2.995 1.354 1.131 0.21 2.521 0.307 4.373 0.307 1.722 0 3.151-0.675 4.131-1.953 0.883-1.151 1.357-2.723 1.369-4.544 0.007-1.105-0.3-2.329-0.889-3.541zM2.121 10.791c-0.754-0.875-1.121-2.279-1.121-4.291 0-3.033 2.467-5.5 5.5-5.5 1.57 0 2.826 0.141 3.731 0.419 0.727 0.223 1.234 0.537 1.505 0.931 0.567 0.824 0.11 2.019-0.293 3.074-0.128 0.335-0.249 0.651-0.33 0.941-1.064 3.792-2.91 5.635-5.644 5.635-1.552 0-2.647-0.395-3.348-1.209zM14.5 19c-2.317 0-5.526-0.139-6.632-1.339-0.802-0.87-1.030-1.658-0.739-2.556 0.285-0.879 1.046-1.811 1.851-2.796 1.102-1.35 2.351-2.879 2.848-4.793 0.393-1.513 1.216-1.513 1.487-1.513 0.82 0 1.924 0.618 2.952 1.654 1.673 1.685 2.746 3.976 2.733 5.839-0.018 2.66-1.21 5.503-4.5 5.503z"
  }, pathProps))));
}

LiniEggs.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniEggs;