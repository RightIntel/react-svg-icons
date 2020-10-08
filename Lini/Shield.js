var React = require('react');

var PropTypes = require('prop-types');

function LiniShield({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniShield';

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
    d: "M9.5 20c-0.053 0-0.107-0.009-0.158-0.026-1.839-0.613-4.147-2.651-5.88-5.193-1.579-2.316-3.462-6.154-3.462-11.282 0-0.276 0.224-0.5 0.5-0.5 2.814 0 7.238-1.926 8.723-2.916 0.168-0.112 0.387-0.112 0.555 0 1.485 0.99 5.909 2.916 8.723 2.916 0.276 0 0.5 0.224 0.5 0.5 0 5.128-1.883 8.965-3.462 11.282-1.733 2.541-4.041 4.58-5.88 5.193-0.051 0.017-0.105 0.026-0.158 0.026zM1.006 3.984c0.113 4.631 1.832 8.108 3.282 10.235 1.769 2.594 3.856 4.23 5.212 4.751 1.356-0.521 3.443-2.156 5.212-4.751 1.45-2.127 3.169-5.604 3.282-10.235-1.628-0.102-3.442-0.662-4.73-1.14-1.418-0.525-2.849-1.193-3.764-1.751-0.915 0.558-2.346 1.226-3.764 1.751-1.289 0.477-3.102 1.038-4.73 1.14z"
  }, pathProps))));
}

LiniShield.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniShield;