var React = require('react');

var PropTypes = require('prop-types');

function LiniSkull({
  size,
  ...props
}) {
  var className = 'Component Lini LiniSkull';

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
    d: "M14.5 20c-0.276 0-0.5-0.224-0.5-0.5v-3c0-1.324 0.809-2.63 1.842-2.974 0.617-0.206 1.158-1.152 1.158-2.026v-2c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5v2c0 0.873 0.541 1.82 1.158 2.026 1.033 0.344 1.842 1.651 1.842 2.974v3c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-3c0-0.873-0.541-1.82-1.158-2.026-1.033-0.344-1.842-1.651-1.842-2.974v-2c0-2.27 0.884-4.405 2.49-6.010s3.74-2.49 6.010-2.49c2.27 0 4.405 0.884 6.010 2.49s2.49 3.74 2.49 6.010v2c0 1.324-0.809 2.63-1.842 2.974-0.617 0.206-1.158 1.152-1.158 2.026v3c0 0.276-0.224 0.5-0.5 0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 20c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 20c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 20c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 20c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 13c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM12.5 9c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5c0-0.827-0.673-1.5-1.5-1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 13c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM6.5 9c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5c0-0.827-0.673-1.5-1.5-1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.438 15.786c-0 0-0 0-0 0-0.108 0-0.224-0.021-0.346-0.061-0.148-0.049-0.363-0.077-0.592-0.077s-0.444 0.028-0.592 0.077c-0.122 0.041-0.238 0.061-0.346 0.061-0.268 0-0.492-0.124-0.614-0.341-0.11-0.195-0.176-0.536 0.138-1.059l0.471-0.785c0.227-0.379 0.571-0.596 0.943-0.596s0.716 0.217 0.943 0.596l0.471 0.785c0.314 0.523 0.248 0.865 0.138 1.059-0.123 0.217-0.347 0.341-0.614 0.341zM9.5 14.647c0.144 0 0.285 0.008 0.42 0.024l-0.334-0.557c-0.037-0.062-0.069-0.091-0.086-0.104-0.017 0.013-0.049 0.042-0.086 0.104l-0.334 0.557c0.134-0.016 0.276-0.024 0.42-0.024z"
  })));
}

LiniSkull.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSkull;