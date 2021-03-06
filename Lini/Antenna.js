var React = require('react');

var PropTypes = require('prop-types');

function LiniAntenna({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniAntenna';

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
    d: "M12.328 9.828c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707 0.661-0.661 1.025-1.54 1.025-2.475s-0.364-1.814-1.025-2.475c-0.195-0.195-0.195-0.512-0-0.707s0.512-0.195 0.707 0c0.85 0.85 1.318 1.98 1.318 3.182s-0.468 2.332-1.318 3.182c-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14.45 11.95c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707 1.228-1.228 1.904-2.86 1.904-4.596s-0.676-3.369-1.904-4.596c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0c1.417 1.417 2.197 3.3 2.197 5.303s-0.78 3.887-2.197 5.303c-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6.672 9.828c-0.128 0-0.256-0.049-0.354-0.146-0.85-0.85-1.318-1.98-1.318-3.182s0.468-2.332 1.318-3.182c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707c-0.661 0.661-1.025 1.54-1.025 2.475s0.364 1.814 1.025 2.475c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M4.55 11.95c-0.128 0-0.256-0.049-0.354-0.146-1.417-1.417-2.197-3.3-2.197-5.303s0.78-3.887 2.197-5.303c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707c-1.228 1.228-1.904 2.86-1.904 4.596s0.676 3.368 1.904 4.596c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M11 6.5c0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5c0 0.652 0.418 1.208 1 1.414v10.586c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10.586c0.582-0.206 1-0.762 1-1.414zM9.5 7c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniAntenna.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniAntenna;