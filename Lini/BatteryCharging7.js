var React = require('react');

var PropTypes = require('prop-types');

function LiniBatteryCharging7({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniBatteryCharging7';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.5 16h-5c-0.827 0-1.5-0.673-1.5-1.5v-8c0-0.827 0.673-1.5 1.5-1.5h5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-5c-0.276 0-0.5 0.224-0.5 0.5v8c0 0.276 0.224 0.5 0.5 0.5h5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 8h-0.5v-1.5c0-0.827-0.673-1.5-1.5-1.5h-5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h5c0.276 0 0.5 0.224 0.5 0.5v8c0 0.276-0.224 0.5-0.5 0.5h-5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h5c0.827 0 1.5-0.673 1.5-1.5v-1.5h0.5c0.827 0 1.5-0.673 1.5-1.5v-2c0-0.827-0.673-1.5-1.5-1.5zM18 11.5c0 0.276-0.224 0.5-0.5 0.5h-0.5v-3h0.5c0.276 0 0.5 0.224 0.5 0.5v2z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 16c-0.062 0-0.125-0.012-0.186-0.036-0.256-0.103-0.381-0.394-0.279-0.65l1.726-4.314h-3.262c-0.166 0-0.321-0.082-0.414-0.22s-0.112-0.312-0.050-0.466l2-5c0.103-0.256 0.394-0.381 0.65-0.279s0.381 0.394 0.279 0.65l-1.726 4.314h3.262c0.166 0 0.321 0.082 0.414 0.22s0.112 0.312 0.050 0.466l-2 5c-0.078 0.196-0.266 0.314-0.464 0.314z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 14c-0.276 0-0.5-0.224-0.5-0.5v-6c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v6c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 14c-0.276 0-0.5-0.224-0.5-0.5v-6c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v6c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 14c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 9c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 14c-0.276 0-0.5-0.224-0.5-0.5v-6c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v6c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 14c-0.276 0-0.5-0.224-0.5-0.5v-6c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v6c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  })));
}

LiniBatteryCharging7.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBatteryCharging7;