var React = require('react');

var PropTypes = require('prop-types');

function LiniBenchPress({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniBenchPress';

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
    d: "M0.5 10c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.5 10c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 6c-1.103 0-2-0.897-2-2s0.897-2 2-2c1.103 0 2 0.897 2 2s-0.897 2-2 2zM10 3c-0.551 0-1 0.449-1 1s0.449 1 1 1c0.551 0 1-0.449 1-1s-0.449-1-1-1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 5c-0.827 0-1.5 0.673-1.5 1.5v1.5h-1.086c-0.206-0.582-0.762-1-1.414-1s-1.208 0.418-1.414 1h-4.172c-0.206-0.582-0.762-1-1.414-1s-1.208 0.418-1.414 1h-1.086v-1.5c0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5v4c0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5v-1.5h1.086c0.206 0.582 0.762 1 1.414 1s1.208-0.418 1.414-1h4.172c0.206 0.582 0.762 1 1.414 1s1.208-0.418 1.414-1h1.086v1.5c0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5v-4c0-0.827-0.673-1.5-1.5-1.5zM3 10.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v4zM6.5 9c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5 0 0 0 0 0 0s0 0 0 0c-0 0.276-0.224 0.5-0.5 0.5zM13.5 9c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5zM18 10.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v4z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 20h-7c-0.827 0-1.5-0.673-1.5-1.5v-7c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v7c0 0.276 0.224 0.5 0.5 0.5h7c0.276 0 0.5-0.224 0.5-0.5v-7c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v7c0 0.827-0.673 1.5-1.5 1.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 6c-0.276 0-0.5-0.224-0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5h-7c-0.276 0-0.5 0.224-0.5 0.5v4c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-4c0-0.827 0.673-1.5 1.5-1.5h7c0.827 0 1.5 0.673 1.5 1.5v4c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.501 18c-0.027 0-0.055-0.002-0.083-0.007-0.272-0.045-0.456-0.303-0.411-0.575 0.010-0.062 0.26-1.547 0.701-3.058 0.669-2.292 1.397-3.36 2.293-3.36s1.624 1.068 2.293 3.36c0.441 1.511 0.69 2.995 0.701 3.058 0.045 0.272-0.139 0.53-0.411 0.575s-0.53-0.139-0.575-0.411c-0.002-0.015-0.252-1.495-0.676-2.95-0.244-0.835-0.496-1.494-0.748-1.96-0.289-0.532-0.507-0.673-0.582-0.673s-0.294 0.141-0.584 0.676c-0.253 0.467-0.505 1.127-0.749 1.964-0.424 1.455-0.672 2.928-0.674 2.942-0.041 0.245-0.253 0.418-0.493 0.418z",
    fill: color
  })));
}

LiniBenchPress.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBenchPress;