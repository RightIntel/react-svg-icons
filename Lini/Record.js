var React = require('react');

var PropTypes = require('prop-types');

function LiniRecord({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniRecord';

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
    d: "M11.5 17c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-3.5v-1.5c0-0.276 0.224-0.5 0.5-0.5h3c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-3c-0.827 0-1.5 0.673-1.5 1.5v4c0 0.827 0.673 1.5 1.5 1.5h3c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5-0.224-0.5-0.5v-1.5h3.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M18.5 20h-3c-0.827 0-1.5-0.673-1.5-1.5v-4c0-0.827 0.673-1.5 1.5-1.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M4.884 19.18l-1.817-2.18h0.432c0.827 0 1.5-0.673 1.5-1.5v-1c0-0.827-0.673-1.5-1.5-1.5h-2c-0.827 0-1.5 0.673-1.5 1.5v5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-2.5h0.766l2.35 2.82c0.099 0.119 0.241 0.18 0.384 0.18 0.113 0 0.226-0.038 0.32-0.116 0.212-0.177 0.241-0.492 0.064-0.704zM1 14.5c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5h-1.502c-0 0-0.001 0-0.001 0h-0.997v-1.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9.5 10c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5zM9.5 2c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z"
  }, pathProps))));
}

LiniRecord.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniRecord;