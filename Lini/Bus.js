var React = require('react');

var PropTypes = require('prop-types');

function LiniBus({
  size,
  ...props
}) {
  var className = 'Component Lini LiniBus';

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
    d: "M6.5 13h-4c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5zM3 12h3v-2h-3v2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 13h-4c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5zM9 12h3v-2h-3v2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.854 13.439l-0.717-5.020c-0.114-0.796-0.832-1.419-1.636-1.419h-15c-1.378 0-2.5 1.122-2.5 2.5v8c0 0.827 0.673 1.5 1.5 1.5h0.769c0.346 0.597 0.992 1 1.731 1s1.385-0.403 1.731-1h7.538c0.346 0.597 0.992 1 1.731 1s1.385-0.403 1.731-1h1.769c0.827 0 1.5-0.673 1.5-1.5v-2c0-0.571-0.066-1.495-0.146-2.061zM18.638 12h-3.638v-2h3.352l0.286 2zM2.5 8h15c0.302 0 0.604 0.262 0.646 0.561l0.063 0.439h-3.709c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h4.281l0.083 0.581c0.018 0.123 0.034 0.266 0.050 0.419h-17.913v-4.5c0-0.827 0.673-1.5 1.5-1.5zM4 19c-0.551 0-1-0.449-1-1s0.449-1 1-1 1 0.449 1 1-0.449 1-1 1zM15 19c-0.551 0-1-0.449-1-1s0.449-1 1-1 1 0.449 1 1-0.449 1-1 1zM18.5 18h-1.5c0-1.103-0.897-2-2-2s-2 0.897-2 2h-7c0-1.103-0.897-2-2-2s-2 0.897-2 2h-0.5c-0.276 0-0.5-0.224-0.5-0.5v-2.5h17.987c0.008 0.184 0.013 0.356 0.013 0.5v0.5h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v0.5c0 0.276-0.224 0.5-0.5 0.5z"
  })));
}

LiniBus.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBus;