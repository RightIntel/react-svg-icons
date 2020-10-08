var React = require('react');

var PropTypes = require('prop-types');

function LiniFolderShared({
  size,
  ...props
}) {
  var className = 'Component Lini LiniFolderShared';

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
    d: "M18.5 18h-17c-0.827 0-1.5-0.673-1.5-1.5v-10.5c0-0.352 0.119-0.856 0.276-1.171l0.553-1.106c0.206-0.413 0.71-0.724 1.171-0.724h7c0.461 0 0.964 0.311 1.171 0.724l0.553 1.106c0.038 0.077 0.191 0.171 0.276 0.171h7.5c0.827 0 1.5 0.673 1.5 1.5v10c0 0.827-0.673 1.5-1.5 1.5zM2 4c-0.086 0-0.238 0.094-0.276 0.171l-0.553 1.106c-0.088 0.176-0.171 0.527-0.171 0.724v10.5c0 0.276 0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5h-7.5c-0.461 0-0.965-0.311-1.171-0.724l-0.553-1.106c-0.038-0.077-0.191-0.171-0.276-0.171h-7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 15c-0.863 0-1.691-0.317-2.334-0.891-0.206-0.184-0.223-0.5-0.039-0.706s0.5-0.223 0.706-0.039c0.459 0.411 1.050 0.637 1.667 0.637 1.378 0 2.5-1.122 2.5-2.5 0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-1.536c-0.243 1.694-1.704 3-3.464 3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 12h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1.536c0.243-1.694 1.704-3 3.464-3 0.863 0 1.691 0.317 2.333 0.891 0.206 0.184 0.223 0.5 0.039 0.706s-0.5 0.223-0.706 0.039c-0.459-0.41-1.050-0.636-1.667-0.636-1.378 0-2.5 1.122-2.5 2.5 0 0.276-0.224 0.5-0.5 0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 13c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM9.5 11c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  })));
}

LiniFolderShared.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFolderShared;