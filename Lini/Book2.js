var React = require('react');

var PropTypes = require('prop-types');

function LiniBook2({
  size,
  ...props
}) {
  var className = 'Component Lini LiniBook2';

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
    d: "M14.5 18h-10c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h10c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 3c-0.276 0-0.5 0.224-0.5 0.5v15c0 0.276-0.224 0.5-0.5 0.5h-11c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5h9c0.827 0 1.5-0.673 1.5-1.5v-12c0-0.827-0.673-1.5-1.5-1.5h-10c-0.827 0-1.5 0.673-1.5 1.5v15c0 1.378 1.122 2.5 2.5 2.5h11c0.827 0 1.5-0.673 1.5-1.5v-15c0-0.276-0.224-0.5-0.5-0.5zM3.5 2h10c0.276 0 0.5 0.224 0.5 0.5v12c0 0.276-0.224 0.5-0.5 0.5h-9c-0.562 0-1.082 0.187-1.5 0.501v-13.001c0-0.276 0.224-0.5 0.5-0.5z",
    fill: "#000000"
  })));
}

LiniBook2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBook2;