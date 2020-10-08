var React = require('react');

var PropTypes = require('prop-types');

function LiniFolderSearch({
  size,
  ...props
}) {
  var className = 'Component Lini LiniFolderSearch';

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
    d: "M12.9 14.2l-1.531-2.042c0.392-0.442 0.631-1.022 0.631-1.658 0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5 1.122 2.5 2.5 2.5c0.382 0 0.745-0.087 1.069-0.241l1.531 2.041c0.098 0.131 0.248 0.2 0.4 0.2 0.104 0 0.21-0.033 0.3-0.1 0.221-0.166 0.266-0.479 0.1-0.7zM8 10.5c0-0.827 0.673-1.5 1.5-1.5s1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5c-0.827 0-1.5-0.673-1.5-1.5z"
  })));
}

LiniFolderSearch.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFolderSearch;