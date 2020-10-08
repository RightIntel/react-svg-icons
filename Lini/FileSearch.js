var React = require('react');

var PropTypes = require('prop-types');

function LiniFileSearch({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniFileSearch';

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
    d: "M17.854 5.646l-4.5-4.5c-0.094-0.094-0.221-0.146-0.354-0.146h-9.5c-0.827 0-1.5 0.673-1.5 1.5v16c0 0.827 0.673 1.5 1.5 1.5h13c0.827 0 1.5-0.673 1.5-1.5v-12.5c0-0.133-0.053-0.26-0.146-0.354zM16.793 6h-3.293c-0.276 0-0.5-0.224-0.5-0.5v-3.293l3.793 3.793zM16.5 19h-13c-0.276 0-0.5-0.224-0.5-0.5v-16c0-0.276 0.224-0.5 0.5-0.5h8.5v3.5c0 0.827 0.673 1.5 1.5 1.5h3.5v11.5c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M14.882 17.177l-2.938-3.472c0.655-0.713 1.056-1.663 1.056-2.705 0-2.206-1.794-4-4-4s-4 1.794-4 4c0 2.206 1.794 4 4 4 0.804 0 1.553-0.239 2.181-0.648l2.937 3.471c0.099 0.117 0.24 0.177 0.382 0.177 0.114 0 0.229-0.039 0.323-0.118 0.211-0.178 0.237-0.494 0.059-0.705zM6 11c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z"
  }, pathProps))));
}

LiniFileSearch.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFileSearch;