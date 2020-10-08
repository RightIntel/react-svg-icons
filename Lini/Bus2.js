var React = require('react');

var PropTypes = require('prop-types');

function LiniBus2({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniBus2';

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
    d: "M5.5 16c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM5.5 14c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 16c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM14.5 14c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 5h-7c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h7c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 6h-11c-0.276 0-0.5 0.224-0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5h4.998c0.001 0 0.001 0 0.002 0s0.001-0 0.002-0h4.996c0.001 0 0.001 0 0.002 0s0.001-0 0.002-0h0.998c0.276 0 0.5-0.224 0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5zM5 7h10v4h-0.349l-2.874-1.916c-0.23-0.153-0.54-0.091-0.693 0.139s-0.091 0.54 0.139 0.693l1.626 1.084h-3.197l-2.874-1.916c-0.23-0.153-0.54-0.091-0.693 0.139s-0.091 0.54 0.139 0.693l1.626 1.084h-2.849v-4z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.616 1.783c-1.363-0.519-3.253-0.783-5.616-0.783s-4.252 0.263-5.616 0.783c-1.971 0.751-2.384 1.892-2.384 2.717v11c0 1.207 0.86 2.217 2 2.45v1.050c0 0.551 0.449 1 1 1h1c0.551 0 1-0.449 1-1v-1h6v1c0 0.551 0.449 1 1 1h1c0.551 0 1-0.449 1-1v-1.050c1.14-0.232 2-1.242 2-2.45v-11c0-0.825-0.414-1.966-2.384-2.717zM6 19h-1v-1h1v1zM14 19v-1h1v1h-1zM17 15.5c0 0.827-0.673 1.5-1.5 1.5h-11c-0.827 0-1.5-0.673-1.5-1.5v-11c0-0.743 0.586-1.343 1.741-1.783 1.232-0.469 3.050-0.717 5.259-0.717s4.028 0.248 5.259 0.717c1.155 0.44 1.741 1.040 1.741 1.783v11z",
    fill: color
  })));
}

LiniBus2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBus2;