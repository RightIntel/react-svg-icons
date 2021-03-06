var React = require('react');

var PropTypes = require('prop-types');

function LiniMan2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniMan2';

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
    d: "M9.5 5c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM9.5 1c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M12.5 6h-6c-0.827 0-1.5 0.673-1.5 1.5v4c0 0.827 0.673 1.5 1.5 1.5 0.175 0 0.343-0.031 0.5-0.086v5.586c0 0.827 0.673 1.5 1.5 1.5 0.384 0 0.734-0.145 1-0.383 0.266 0.238 0.616 0.383 1 0.383 0.827 0 1.5-0.673 1.5-1.5v-5.586c0.157 0.056 0.325 0.086 0.5 0.086 0.827 0 1.5-0.673 1.5-1.5v-4c0-0.827-0.673-1.5-1.5-1.5zM13 11.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v10c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-6c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v6c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5v4z"
  }, pathProps))));
}

LiniMan2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniMan2;