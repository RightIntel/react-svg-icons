var React = require('react');

var PropTypes = require('prop-types');

function LiniBold({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniBold';

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
    d: "M10 9h-2.5c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h2.5c1.103 0 2 0.897 2 2s-0.897 2-2 2zM8 8h2c0.551 0 1-0.449 1-1s-0.449-1-1-1h-2v2z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M11 15h-3.5c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h3.5c1.103 0 2 0.897 2 2s-0.897 2-2 2zM8 14h3c0.551 0 1-0.449 1-1s-0.449-1-1-1h-3v2z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M11 18h-5.5c-0.827 0-1.5-0.673-1.5-1.5v-13c0-0.827 0.673-1.5 1.5-1.5h4.5c2.757 0 5 2.243 5 5 0 0.824-0.202 1.628-0.587 2.349 1.013 0.945 1.587 2.253 1.587 3.651 0 2.757-2.243 5-5 5zM5.5 3c-0.276 0-0.5 0.224-0.5 0.5v13c0 0.276 0.224 0.5 0.5 0.5h5.5c2.206 0 4-1.794 4-4 0-1.237-0.561-2.385-1.539-3.151-0.211-0.165-0.253-0.466-0.1-0.682 0.418-0.646 0.639-1.395 0.639-2.167 0-2.206-1.794-4-4-4h-4.5z"
  }, pathProps))));
}

LiniBold.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBold;