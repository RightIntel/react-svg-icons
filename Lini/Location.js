var React = require('react');

var PropTypes = require('prop-types');

function LiniLocation({
  size,
  ...props
}) {
  var className = 'Component Lini LiniLocation';

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
    d: "M8.5 20c-0.043 0-0.087-0.006-0.13-0.017-0.218-0.059-0.37-0.257-0.37-0.483v-7.5h-7.5c-0.226 0-0.424-0.152-0.483-0.37s0.037-0.449 0.232-0.562l19-11c0.196-0.113 0.444-0.081 0.604 0.079s0.193 0.408 0.079 0.604l-11 19c-0.091 0.157-0.258 0.249-0.433 0.249zM2.362 11h6.138c0.276 0 0.5 0.224 0.5 0.5v6.138l9.128-15.766-15.766 9.128z",
    fill: "#000000"
  })));
}

LiniLocation.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniLocation;