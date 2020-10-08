var React = require('react');

var PropTypes = require('prop-types');

function LiniFolderHeart({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniFolderHeart';

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
    d: "M18.5 18h-17c-0.827 0-1.5-0.673-1.5-1.5v-10.5c0-0.352 0.119-0.856 0.276-1.171l0.553-1.106c0.206-0.413 0.71-0.724 1.171-0.724h7c0.461 0 0.964 0.311 1.171 0.724l0.553 1.106c0.038 0.077 0.191 0.171 0.276 0.171h7.5c0.827 0 1.5 0.673 1.5 1.5v10c0 0.827-0.673 1.5-1.5 1.5zM2 4c-0.086 0-0.238 0.094-0.276 0.171l-0.553 1.106c-0.088 0.176-0.171 0.527-0.171 0.724v10.5c0 0.276 0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5h-7.5c-0.461 0-0.965-0.311-1.171-0.724l-0.553-1.106c-0.038-0.077-0.191-0.171-0.276-0.171h-7z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9.5 15c-0.077 0-0.154-0.018-0.224-0.053-0.042-0.021-1.049-0.529-2.069-1.297-1.455-1.095-2.192-2.154-2.192-3.149 0-0.735 0.294-1.391 0.827-1.846 0.494-0.422 1.172-0.654 1.909-0.654 0.598 0 1.215 0.275 1.75 0.769 0.535-0.494 1.152-0.769 1.75-0.769 0.737 0 1.415 0.232 1.909 0.654 0.534 0.456 0.827 1.111 0.827 1.846 0 0.995-0.738 2.055-2.192 3.149-1.021 0.768-2.027 1.276-2.069 1.297-0.071 0.035-0.147 0.053-0.224 0.053zM7.75 9c-0.864 0-1.736 0.464-1.736 1.5 0 1.284 2.378 2.836 3.484 3.435 0.342-0.187 1.028-0.582 1.705-1.093 1.15-0.867 1.783-1.699 1.783-2.342 0-1.036-0.872-1.5-1.736-1.5-0.44 0-0.949 0.304-1.361 0.814-0.095 0.117-0.238 0.186-0.389 0.186s-0.294-0.068-0.389-0.186c-0.412-0.51-0.921-0.814-1.361-0.814z"
  }, pathProps))));
}

LiniFolderHeart.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFolderHeart;