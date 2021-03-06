var React = require('react');

var PropTypes = require('prop-types');

function LiniSmartphoneWaves({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniSmartphoneWaves';

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
    d: "M12.5 16h-5c-0.827 0-1.5-0.673-1.5-1.5v-9c0-0.827 0.673-1.5 1.5-1.5h5c0.827 0 1.5 0.673 1.5 1.5v9c0 0.827-0.673 1.5-1.5 1.5zM7.5 5c-0.276 0-0.5 0.224-0.5 0.5v9c0 0.276 0.224 0.5 0.5 0.5h5c0.276 0 0.5-0.224 0.5-0.5v-9c0-0.276-0.224-0.5-0.5-0.5h-5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10.5 14h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M15.5 6c-0.276 0-0.5-0.224-0.5-0.5 0-1.378-1.122-2.5-2.5-2.5-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c1.93 0 3.5 1.57 3.5 3.5 0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M17.5 6c-0.276 0-0.5-0.224-0.5-0.5 0-2.481-2.019-4.5-4.5-4.5-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c3.033 0 5.5 2.467 5.5 5.5 0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M7.5 18c-1.93 0-3.5-1.57-3.5-3.5 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 1.378 1.122 2.5 2.5 2.5 0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M7.5 20c-3.033 0-5.5-2.467-5.5-5.5 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 2.481 2.019 4.5 4.5 4.5 0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniSmartphoneWaves.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSmartphoneWaves;