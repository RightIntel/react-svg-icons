var React = require('react');

var PropTypes = require('prop-types');

function LiniAmbulance({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniAmbulance';

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
    d: "M8.5 12h-1.5v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5h-1.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.5v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.5h1.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M13.5 5c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18.5 13h-0.662l-1.503-3.757c-0.217-0.543-0.754-0.994-1.336-1.167v-0.576c0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5v0.586c-0.186 0.066-0.356 0.168-0.5 0.297-0.266-0.238-0.616-0.383-1-0.383h-8c-0.827 0-1.5 0.673-1.5 1.5v7c0 0.827 0.673 1.5 1.5 1.5h1.5c0 1.103 0.897 2 2 2s2-0.897 2-2h6c0 1.103 0.897 2 2 2s2-0.897 2-2h0.5c0.827 0 1.5-0.673 1.5-1.5v-2c0-0.827-0.673-1.5-1.5-1.5zM15.962 11l0.8 2h-2.262c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5h1.462zM13.5 7c0.276 0 0.5 0.224 0.5 0.5v0.5h-1v-0.5c0-0.276 0.224-0.5 0.5-0.5zM6 19c-0.551 0-1-0.449-1-1s0.449-1 1-1 1 0.449 1 1-0.449 1-1 1zM7.731 17c-0.346-0.597-0.992-1-1.731-1s-1.385 0.403-1.731 1h-1.769c-0.276 0-0.5-0.224-0.5-0.5v-7c0-0.276 0.224-0.5 0.5-0.5h8c0.276 0 0.5 0.224 0.5 0.5v7.5h-3.269zM16 19c-0.551 0-1-0.449-1-1s0.449-1 1-1 1 0.449 1 1-0.449 1-1 1zM18.5 17h-0.769c-0.346-0.597-0.992-1-1.731-1s-1.385 0.403-1.731 1h-2.269v-7.5c0-0.276 0.224-0.5 0.5-0.5h2c0.346 0 0.779 0.293 0.907 0.614l0.154 0.386h-1.062c-0.827 0-1.5 0.673-1.5 1.5v1c0 0.827 0.673 1.5 1.5 1.5h4c0.276 0 0.5 0.224 0.5 0.5v0.5h-0.543c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.543v0.5c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M15.5 6c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l1-1c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-1 1c-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M11.5 6c-0.128 0-0.256-0.049-0.354-0.146l-1-1c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l1 1c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps))));
}

LiniAmbulance.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniAmbulance;