var React = require('react');

var PropTypes = require('prop-types');

function LiniFileCharts({
  size,
  ...props
}) {
  var className = 'Component Lini LiniFileCharts';

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
    d: "M14.5 14h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 16h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 10c-0.276 0-0.5 0.224-0.5 0.5v0.5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3h0.5c0.276 0 0.5-0.224 0.5-0.5 0-1.93-1.57-3.5-3.5-3.5zM9 11.050c0.978 0.199 1.75 0.972 1.95 1.95h-1.95v-1.95zM8 16c-1.103 0-2-0.897-2-2s0.897-2 2-2v1.5c0 0.276 0.224 0.5 0.5 0.5h1.5c0 1.103-0.897 2-2 2z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 12h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: "#000000"
  })));
}

LiniFileCharts.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFileCharts;