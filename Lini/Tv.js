var React = require('react');

var PropTypes = require('prop-types');

function LiniTv({
  size,
  ...props
}) {
  var className = 'Component Lini LiniTv';

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
    d: "M18.5 5h-7.185l3.517-3.126c0.206-0.183 0.225-0.499 0.042-0.706s-0.499-0.225-0.706-0.042l-4.174 3.71-3.169-2.716c-0.21-0.18-0.525-0.155-0.705 0.054s-0.155 0.525 0.054 0.705l2.474 2.12h-7.148c-0.827 0-1.5 0.673-1.5 1.5v12c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-12c0-0.827-0.673-1.5-1.5-1.5zM19 18.5c0 0.276-0.224 0.5-0.5 0.5h-17c-0.276 0-0.5-0.224-0.5-0.5v-12c0-0.276 0.224-0.5 0.5-0.5h17c0.276 0 0.5 0.224 0.5 0.5v12z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 18h-9c-0.827 0-1.5-0.673-1.5-1.5v-8c0-0.827 0.673-1.5 1.5-1.5h9c0.827 0 1.5 0.673 1.5 1.5v8c0 0.827-0.673 1.5-1.5 1.5zM3.5 8c-0.276 0-0.5 0.224-0.5 0.5v8c0 0.276 0.224 0.5 0.5 0.5h9c0.276 0 0.5-0.224 0.5-0.5v-8c0-0.276-0.224-0.5-0.5-0.5h-9z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 11c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5c0 0.827-0.673 1.5-1.5 1.5zM16.5 9c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 15c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM16.5 13c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z",
    fill: "#000000"
  })));
}

LiniTv.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTv;