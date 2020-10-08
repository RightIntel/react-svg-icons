var React = require('react');

var PropTypes = require('prop-types');

function LiniFunnel({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniFunnel';

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
  }, /*#__PURE__*/React.createElement("path", _extends({
    d: "M16.23 3.307c-0.396-0.268-0.949-0.504-1.643-0.702-1.366-0.39-3.172-0.605-5.087-0.605s-3.722 0.215-5.087 0.605c-0.694 0.198-1.246 0.434-1.643 0.702-0.637 0.43-0.77 0.886-0.77 1.193v0.5c0 0.428 0.321 1.133 0.639 1.609l4.891 7.336c0.251 0.376 0.471 1.103 0.471 1.555v3c0 0.173 0.090 0.334 0.237 0.425 0.080 0.050 0.171 0.075 0.263 0.075 0.076 0 0.153-0.018 0.224-0.053l2-1c0.169-0.085 0.276-0.258 0.276-0.447v-2c0-0.452 0.22-1.179 0.471-1.555l4.891-7.336c0.317-0.476 0.639-1.182 0.639-1.609v-0.5c0-0.307-0.134-0.763-0.77-1.193zM4.688 3.567c1.279-0.365 2.988-0.567 4.812-0.567s3.534 0.201 4.812 0.567c1.378 0.394 1.688 0.816 1.688 0.933s-0.31 0.54-1.688 0.933c-1.279 0.365-2.988 0.567-4.812 0.567s-3.534-0.201-4.812-0.567c-1.378-0.394-1.688-0.816-1.688-0.933s0.31-0.54 1.688-0.933zM10.639 13.391c-0.358 0.537-0.639 1.464-0.639 2.109v1.691l-1 0.5v-2.191c0-0.646-0.281-1.572-0.639-2.109l-4.88-7.32c0.274 0.117 0.585 0.226 0.932 0.324 1.366 0.39 3.172 0.605 5.087 0.605s3.722-0.215 5.087-0.605c0.346-0.099 0.658-0.207 0.932-0.325l-4.88 7.32z"
  }, pathProps))));
}

LiniFunnel.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFunnel;