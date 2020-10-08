var React = require('react');

var PropTypes = require('prop-types');

function LiniDelete({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniDelete';

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
    d: "M13.707 10.5l2.646-2.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-2.646 2.646-2.646-2.646c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l2.646 2.646-2.646 2.646c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l2.646-2.646 2.646 2.646c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-2.646-2.646z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 17h-11c-0.704 0-1.574-0.408-2.024-0.948l-3.72-4.464c-0.509-0.61-0.509-1.566 0-2.177l3.72-4.464c0.45-0.541 1.321-0.948 2.024-0.948h11c0.827 0 1.5 0.673 1.5 1.5v10c0 0.827-0.673 1.5-1.5 1.5zM7.5 5c-0.401 0-0.999 0.28-1.256 0.588l-3.72 4.464c-0.199 0.239-0.199 0.657 0 0.896l3.72 4.464c0.257 0.308 0.855 0.588 1.256 0.588h11c0.276 0 0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5h-11z",
    fill: color
  })));
}

LiniDelete.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniDelete;