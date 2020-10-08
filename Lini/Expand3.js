var React = require('react');

var PropTypes = require('prop-types');

function LiniExpand3({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniExpand3';

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
    d: "M17.5 18h-16c-0.827 0-1.5-0.673-1.5-1.5v-12c0-0.827 0.673-1.5 1.5-1.5h16c0.827 0 1.5 0.673 1.5 1.5v12c0 0.827-0.673 1.5-1.5 1.5zM1.5 4c-0.276 0-0.5 0.224-0.5 0.5v12c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-12c0-0.276-0.224-0.5-0.5-0.5h-16z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.854 6.646l-2-2c-0.195-0.195-0.512-0.195-0.707 0l-2 2c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l1.146-1.146v2.293c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-2.293l1.146 1.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.854 13.646c-0.195-0.195-0.512-0.195-0.707 0l-1.146 1.146v-2.293c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v2.293l-1.146-1.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l2 2c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l2-2c0.195-0.195 0.195-0.512-0-0.707z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.354 10.146l-2-2c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l1.146 1.146h-2.293c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2.293l-1.146 1.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l2-2c0.195-0.195 0.195-0.512 0-0.707z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 10h-2.293l1.146-1.146c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-2 2c-0.195 0.195-0.195 0.512 0 0.707l2 2c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-1.146-1.146h2.293c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z",
    fill: color
  })));
}

LiniExpand3.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniExpand3;