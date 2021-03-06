var React = require('react');

var PropTypes = require('prop-types');

function LiniFiles({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniFiles';

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
    d: "M16.5 4h-0.5v-0.5c0-0.827-0.673-1.5-1.5-1.5h-0.5v-0.5c0-0.827-0.673-1.5-1.5-1.5h-7.5c-0.133 0-0.26 0.053-0.354 0.146l-3.5 3.5c-0.094 0.094-0.146 0.221-0.146 0.354v10.5c0 0.827 0.673 1.5 1.5 1.5h0.5v0.5c0 0.827 0.673 1.5 1.5 1.5h0.5v0.5c0 0.827 0.673 1.5 1.5 1.5h10c0.827 0 1.5-0.673 1.5-1.5v-13c0-0.827-0.673-1.5-1.5-1.5zM5 1.207v2.293c0 0.276-0.224 0.5-0.5 0.5h-2.293l2.793-2.793zM2 14.5v-9.5h2.5c0.827 0 1.5-0.673 1.5-1.5v-2.5h6.5c0.276 0 0.5 0.224 0.5 0.5v13c0 0.276-0.224 0.5-0.5 0.5h-10c-0.276 0-0.5-0.224-0.5-0.5zM4 16.5v-0.5h8.5c0.827 0 1.5-0.673 1.5-1.5v-11.5h0.5c0.276 0 0.5 0.224 0.5 0.5v13c0 0.276-0.224 0.5-0.5 0.5h-10c-0.276 0-0.5-0.224-0.5-0.5zM17 18.5c0 0.276-0.224 0.5-0.5 0.5h-10c-0.276 0-0.5-0.224-0.5-0.5v-0.5h8.5c0.827 0 1.5-0.673 1.5-1.5v-11.5h0.5c0.276 0 0.5 0.224 0.5 0.5v13z"
  }, pathProps))));
}

LiniFiles.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFiles;