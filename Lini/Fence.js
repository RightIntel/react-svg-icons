var React = require('react');

var PropTypes = require('prop-types');

function LiniFence({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniFence';

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
    d: "M3 6.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 6.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 6.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.854 2.646l-2-2c-0.195-0.195-0.512-0.195-0.707 0l-2 2c-0.094 0.094-0.146 0.221-0.146 0.354v1h-2v-1c0-0.133-0.053-0.26-0.146-0.354l-2-2c-0.195-0.195-0.512-0.195-0.707 0l-2 2c-0.094 0.094-0.146 0.221-0.146 0.354v1h-2v-1c0-0.133-0.053-0.26-0.146-0.354l-2-2c-0.195-0.195-0.512-0.195-0.707 0l-2 2c-0.094 0.094-0.146 0.221-0.146 0.354v16.5c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5v-1.5h2v1.5c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5v-1.5h2v1.5c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5v-16.5c0-0.133-0.053-0.26-0.146-0.354zM12 9h2v4h-2v-4zM14 5v3h-2v-3h2zM5 9h2v4h-2v-4zM7 5v3h-2v-3h2zM4 19h-3v-15.793l1.5-1.5 1.5 1.5v15.793zM5 17v-3h2v3h-2zM11 19h-3v-15.793l1.5-1.5 1.5 1.5v15.793zM12 17v-3h2v3h-2zM18 19h-3v-15.793l1.5-1.5 1.5 1.5v15.793z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 15.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 15.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 15.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  })));
}

LiniFence.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFence;