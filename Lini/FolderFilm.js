var React = require('react');

var PropTypes = require('prop-types');

function LiniFolderFilm({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniFolderFilm';

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
    d: "M15.5 8h-11c-0.276 0-0.5 0.224-0.5 0.5v6c0 0.276 0.224 0.5 0.5 0.5h11c0.276 0 0.5-0.224 0.5-0.5v-6c0-0.276-0.224-0.5-0.5-0.5zM5 11h1v1h-1v-1zM7 9h6v5h-6v-5zM14 11h1v1h-1v-1zM15 10h-1v-1h1v1zM6 9v1h-1v-1h1zM5 13h1v1h-1v-1zM14 14v-1h1v1h-1z"
  }, pathProps))));
}

LiniFolderFilm.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFolderFilm;