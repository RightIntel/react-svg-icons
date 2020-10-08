var React = require('react');

var PropTypes = require('prop-types');

function LiniBroom({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniBroom';

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
    d: "M19.521 0.564l-0.086-0.086c-0.283-0.283-0.659-0.438-1.061-0.438s-0.778 0.156-1.061 0.438l-5.314 5.314-0.146-0.146c-0.195-0.195-0.512-0.195-0.707 0l-1.147 1.147c-0.498-0.488-1.202-0.768-1.936-0.768-0.625 0-1.226 0.203-1.693 0.571-0.031 0.025-3.149 2.469-6.029 3.429-0.204 0.068-0.342 0.259-0.342 0.474 0 2.538 0.988 4.923 2.782 6.717s4.18 2.782 6.717 2.782c0.215 0 0.406-0.138 0.474-0.342 0.96-2.88 3.404-5.997 3.429-6.029 0.83-1.051 0.74-2.673-0.197-3.629l1.147-1.147c0.195-0.195 0.195-0.512 0-0.707l-0.146-0.146 5.314-5.314c0.585-0.585 0.585-1.536-0-2.121zM8.063 7.025c0.48 0 0.934 0.179 1.247 0.492l0.336 0.336c0 0 0 0 0 0l2.836 2.836c0.596 0.596 0.658 1.659 0.136 2.321-0.015 0.019-0.078 0.099-0.177 0.23l-5.679-5.684c0.13-0.098 0.208-0.16 0.227-0.174 0.291-0.23 0.672-0.356 1.073-0.356zM9.148 18.993c-0.745-0.031-1.466-0.158-2.15-0.369 0.967-1.87 2.837-3.751 2.856-3.77 0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0c-0.084 0.084-2.065 2.077-3.091 4.124-0.807-0.359-1.548-0.84-2.199-1.42l2.997-2.997c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-2.997 2.997c-0.58-0.652-1.061-1.392-1.42-2.199 2.047-1.025 4.040-3.007 4.124-3.091 0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0c-0.019 0.019-1.897 1.887-3.77 2.856-0.211-0.684-0.338-1.405-0.369-2.15 1.905-0.7 3.803-1.91 4.936-2.701l5.904 5.91c-0.791 1.133-2 3.030-2.699 4.933zM12.5 9.293l-1.793-1.793 0.793-0.793 1.793 1.793-0.793 0.793zM18.814 1.979l-5.314 5.314-0.793-0.793 5.314-5.314c0.094-0.094 0.219-0.145 0.354-0.145s0.26 0.052 0.354 0.145l0.086 0.086c0.195 0.195 0.195 0.512 0 0.707z",
    fill: color
  })));
}

LiniBroom.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBroom;