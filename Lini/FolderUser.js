var React = require('react');

var PropTypes = require('prop-types');

function LiniFolderUser({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniFolderUser';

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
    d: "M18.5 18h-17c-0.827 0-1.5-0.673-1.5-1.5v-10.5c0-0.352 0.119-0.856 0.276-1.171l0.553-1.106c0.206-0.413 0.71-0.724 1.171-0.724h7c0.461 0 0.964 0.311 1.171 0.724l0.553 1.106c0.038 0.077 0.191 0.171 0.276 0.171h7.5c0.827 0 1.5 0.673 1.5 1.5v10c0 0.827-0.673 1.5-1.5 1.5zM2 4c-0.086 0-0.238 0.094-0.276 0.171l-0.553 1.106c-0.088 0.176-0.171 0.527-0.171 0.724v10.5c0 0.276 0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5h-7.5c-0.461 0-0.965-0.311-1.171-0.724l-0.553-1.106c-0.038-0.077-0.191-0.171-0.276-0.171h-7z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M13 14.467c-0.004-0.166-0.038-0.909-0.351-1.659-0.214-0.514-0.514-0.927-0.891-1.229-0.096-0.077-0.198-0.146-0.303-0.208 0.338-0.358 0.545-0.84 0.545-1.37 0-1.103-0.897-2-2-2s-2 0.897-2 2c0 0.53 0.208 1.012 0.545 1.37-0.105 0.062-0.206 0.131-0.303 0.208-0.377 0.302-0.677 0.716-0.891 1.229-0.347 0.833-0.351 1.658-0.351 1.692 0 0.276 0.224 0.5 0.5 0.5h5c0 0 0 0 0.001 0 0.276 0 0.5-0.224 0.5-0.5 0-0.011-0-0.022-0.001-0.033zM9 10c0-0.551 0.449-1 1-1s1 0.449 1 1-0.449 1-1 1c-0.551 0-1-0.449-1-1zM8.050 14c0.038-0.234 0.106-0.523 0.224-0.808 0.334-0.802 0.899-1.192 1.726-1.192 1.429 0 1.837 1.268 1.953 2h-3.904z"
  }, pathProps))));
}

LiniFolderUser.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFolderUser;