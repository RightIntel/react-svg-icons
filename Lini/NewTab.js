var React = require('react');

var PropTypes = require('prop-types');

function LiniNewTab({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniNewTab';

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
    d: "M3 3.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M5 3.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M7 3.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18.5 1h-17c-0.827 0-1.5 0.673-1.5 1.5v12c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-8.5h7.5c0.827 0 1.5-0.673 1.5-1.5 0-0.276 0.224-0.5 0.5-0.5h5c0.276 0 0.5 0.224 0.5 0.5 0 0.827 0.673 1.5 1.5 1.5h1.5v11.5c0 0.276-0.224 0.5-0.5 0.5h-14c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h14c0.827 0 1.5-0.673 1.5-1.5v-15c0-0.827-0.673-1.5-1.5-1.5zM17.5 5c-0.276 0-0.5-0.224-0.5-0.5 0-0.827-0.673-1.5-1.5-1.5h-5c-0.827 0-1.5 0.673-1.5 1.5 0 0.276-0.224 0.5-0.5 0.5h-7.5v-2.5c0-0.276 0.224-0.5 0.5-0.5h17c0.276 0 0.5 0.224 0.5 0.5v2.5h-1.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M7.5 11h-3c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.793l-5.146 5.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l5.146-5.146v1.793c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5z"
  }, pathProps))));
}

LiniNewTab.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniNewTab;