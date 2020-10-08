var React = require('react');

var PropTypes = require('prop-types');

function LiniPaw({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniPaw';

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
    d: "M3 12c-1.122 0-2-1.322-2-3.011s0.878-3.011 2-3.011 2 1.322 2 3.011-0.878 3.011-2 3.011zM3 6.978c-0.472 0-1 0.86-1 2.011s0.528 2.011 1 2.011 1-0.86 1-2.011-0.528-2.011-1-2.011z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6.998 8c-1.12 0-1.998-1.318-1.998-3s0.878-3 1.998-3 1.998 1.318 1.998 3-0.878 3-1.998 3zM6.998 3c-0.471 0-0.998 0.855-0.998 2s0.527 2 0.998 2 0.998-0.855 0.998-2-0.527-2-0.998-2z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M12 8c-1.122 0-2-1.318-2-3s0.878-3 2-3 2 1.318 2 3-0.878 3-2 3zM12 3c-0.472 0-1 0.855-1 2s0.528 2 1 2 1-0.855 1-2-0.528-2-1-2z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16 12c-1.122 0-2-1.322-2-3.011s0.878-3.011 2-3.011 2 1.322 2 3.011-0.878 3.011-2 3.011zM16 6.978c-0.472 0-1 0.86-1 2.011s0.528 2.011 1 2.011 1-0.86 1-2.011-0.528-2.011-1-2.011z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M13 18c-0.868 0-1.455-0.294-1.972-0.553-0.48-0.24-0.894-0.447-1.528-0.447-0.631 0-1.045 0.207-1.525 0.447-0.519 0.259-1.107 0.553-1.975 0.553-0.556 0-1.079-0.303-1.437-0.831-0.627-0.926-0.637-2.331-0.028-3.855 1.097-2.742 2.906-4.314 4.964-4.314s3.868 1.572 4.964 4.314c0.609 1.524 0.599 2.929-0.028 3.855-0.357 0.528-0.881 0.831-1.437 0.831zM9.5 16c0.869 0 1.457 0.294 1.975 0.553 0.479 0.24 0.893 0.447 1.525 0.447 0.218 0 0.44-0.143 0.609-0.391 0.432-0.637 0.404-1.73-0.073-2.923-0.937-2.342-2.408-3.686-4.036-3.686s-3.099 1.343-4.036 3.686c-0.477 1.193-0.504 2.286-0.073 2.923 0.168 0.249 0.39 0.391 0.609 0.391 0.632 0 1.047-0.207 1.528-0.448 0.518-0.259 1.106-0.553 1.972-0.553z"
  }, pathProps))));
}

LiniPaw.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPaw;