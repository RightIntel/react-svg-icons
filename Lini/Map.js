var React = require('react');

var PropTypes = require('prop-types');

function LiniMap({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniMap';

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
    d: "M14.5 7c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM14.5 5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14.5 13c-0.146 0-0.285-0.064-0.38-0.175-0.032-0.037-0.79-0.926-1.554-2.265-1.039-1.818-1.566-3.521-1.566-5.061 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.54-0.527 3.242-1.566 5.061-0.765 1.338-1.523 2.228-1.554 2.265-0.095 0.111-0.234 0.175-0.38 0.175zM14.5 3c-1.378 0-2.5 1.122-2.5 2.5 0 2.543 1.717 5.139 2.5 6.19 0.782-1.052 2.5-3.651 2.5-6.19 0-1.378-1.122-2.5-2.5-2.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18.5 0h-17c-0.827 0-1.5 0.673-1.5 1.5v17c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-17c0-0.827-0.673-1.5-1.5-1.5zM6.5 18c-0.276 0-0.5 0.224-0.5 0.5v0.5h-2v-18h2v0.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.5h2v18h-2v-0.5c0-0.276-0.224-0.5-0.5-0.5zM3 16h-2v-1h2v1zM10 15h9v1h-9v-1zM19 1.5v12.5h-9v-13h8.5c0.276 0 0.5 0.224 0.5 0.5zM1.5 1h1.5v13h-2v-12.5c0-0.276 0.224-0.5 0.5-0.5zM1 18.5v-1.5h2v2h-1.5c-0.276 0-0.5-0.224-0.5-0.5zM18.5 19h-8.5v-2h9v1.5c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6.5 5c0.276 0 0.5-0.224 0.5-0.5v-1c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1c0 0.276 0.224 0.5 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6.5 8c0.276 0 0.5-0.224 0.5-0.5v-1c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1c0 0.276 0.224 0.5 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6.5 11c0.276 0 0.5-0.224 0.5-0.5v-1c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1c0 0.276 0.224 0.5 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6.5 14c0.276 0 0.5-0.224 0.5-0.5v-1c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1c0 0.276 0.224 0.5 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M7 15.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1z"
  }, pathProps))));
}

LiniMap.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniMap;