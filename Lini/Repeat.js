var React = require('react');

var PropTypes = require('prop-types');

function LiniRepeat({
  size,
  ...props
}) {
  var className = 'Component Lini LiniRepeat';

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
    d: "M17.354 3.146l-3-3c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l2.146 2.146h-13.293c-0.827 0-1.5 0.673-1.5 1.5v9c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-9c0-0.276 0.224-0.5 0.5-0.5h13.293l-2.146 2.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l3-3c0.195-0.195 0.195-0.512 0-0.707z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 6c-0.276 0-0.5 0.224-0.5 0.5v9c0 0.276-0.224 0.5-0.5 0.5h-13.293l2.146-2.146c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-3 3c-0.195 0.195-0.195 0.512 0 0.707l3 3c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-2.146-2.146h13.293c0.827 0 1.5-0.673 1.5-1.5v-9c0-0.276-0.224-0.5-0.5-0.5z",
    fill: "#000000"
  })));
}

LiniRepeat.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniRepeat;