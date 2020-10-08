var React = require('react');

var PropTypes = require('prop-types');

function LiniMapMarkerUser({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniMapMarkerUser';

  if (props.className) {
    className += ' ' + props.className;
  }

  const pathProps = {};

  if (color) {
    pathProps.fill = color;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10 20c-0.153 0-0.298-0.070-0.393-0.191-0.057-0.073-1.418-1.814-2.797-4.385-0.812-1.513-1.46-2.999-1.925-4.416-0.587-1.787-0.884-3.472-0.884-5.008 0-3.308 2.692-6 6-6s6 2.692 6 6c0 1.536-0.298 3.22-0.884 5.008-0.465 1.417-1.113 2.903-1.925 4.416-1.38 2.571-2.74 4.312-2.797 4.385-0.095 0.121-0.24 0.191-0.393 0.191zM10 1c-2.757 0-5 2.243-5 5 0 3.254 1.463 6.664 2.691 8.951 0.902 1.681 1.809 3.014 2.309 3.71 0.502-0.699 1.415-2.040 2.318-3.726 1.223-2.283 2.682-5.687 2.682-8.935 0-2.757-2.243-5-5-5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M13 9.467c-0.004-0.166-0.038-0.909-0.351-1.659-0.214-0.514-0.514-0.927-0.891-1.229-0.096-0.077-0.198-0.146-0.303-0.208 0.338-0.358 0.545-0.84 0.545-1.37 0-1.103-0.897-2-2-2s-2 0.897-2 2c0 0.53 0.208 1.012 0.545 1.37-0.105 0.062-0.206 0.131-0.303 0.208-0.377 0.302-0.677 0.716-0.891 1.229-0.347 0.833-0.351 1.658-0.351 1.692 0 0.276 0.224 0.5 0.5 0.5h5c0 0 0 0 0.001 0 0.276 0 0.5-0.224 0.5-0.5 0-0.011-0-0.022-0.001-0.033zM9 5c0-0.551 0.449-1 1-1s1 0.449 1 1-0.449 1-1 1c-0.551 0-1-0.449-1-1zM8.050 9c0.038-0.234 0.106-0.523 0.224-0.808 0.334-0.802 0.899-1.192 1.726-1.192 1.429 0 1.837 1.268 1.953 2h-3.904z"
  }, pathProps))));
}

LiniMapMarkerUser.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniMapMarkerUser;