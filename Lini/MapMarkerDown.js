var React = require('react');

var PropTypes = require('prop-types');

function LiniMapMarkerDown({
  size,
  ...props
}) {
  var className = 'Component Lini LiniMapMarkerDown';

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
    d: "M10 9c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM10 4c-1.103 0-2 0.897-2 2s0.897 2 2 2c1.103 0 2-0.897 2-2s-0.897-2-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 20c-0.153 0-0.298-0.070-0.393-0.191-0.057-0.073-1.418-1.814-2.797-4.385-0.812-1.513-1.46-2.999-1.925-4.416-0.587-1.787-0.884-3.472-0.884-5.008 0-3.308 2.692-6 6-6s6 2.692 6 6c0 1.536-0.298 3.22-0.884 5.008-0.465 1.417-1.113 2.903-1.925 4.416-1.38 2.571-2.74 4.312-2.797 4.385-0.095 0.121-0.24 0.191-0.393 0.191zM10 1c-2.757 0-5 2.243-5 5 0 3.254 1.463 6.664 2.691 8.951 0.902 1.681 1.809 3.014 2.309 3.71 0.502-0.699 1.415-2.040 2.318-3.726 1.223-2.283 2.682-5.687 2.682-8.935 0-2.757-2.243-5-5-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.854 16.646c-0.195-0.195-0.512-0.195-0.707 0l-1.146 1.146v-5.293c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v5.293l-1.146-1.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l2 2c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l2-2c0.195-0.195 0.195-0.512 0-0.707z"
  })));
}

LiniMapMarkerDown.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniMapMarkerDown;