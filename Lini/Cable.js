var React = require('react');

var PropTypes = require('prop-types');

function LiniCable({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniCable';

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
    d: "M15.5 5h-0.5v-3.5c0-0.276-0.224-0.5-0.5-0.5h-9c-0.276 0-0.5 0.224-0.5 0.5v3.5h-0.5c-0.827 0-1.5 0.673-1.5 1.5v3c0 0.654 0.307 1.577 0.7 2.1l1.8 2.4c0.266 0.355 0.5 1.056 0.5 1.5 0 0.652 0.418 1.208 1 1.414v2.586c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-2.5h4v2.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-2.586c0.582-0.206 1-0.762 1-1.414 0-0.444 0.234-1.145 0.5-1.5l1.8-2.4c0.392-0.523 0.7-1.446 0.7-2.1v-3c0-0.827-0.673-1.5-1.5-1.5zM6 2h8v3h-1v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5h-4v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5h-1v-3zM16 9.5c0 0.444-0.234 1.145-0.5 1.5l-1.8 2.4c-0.393 0.523-0.7 1.446-0.7 2.1 0 0.276-0.224 0.5-0.5 0.5h-5c-0.276 0-0.5-0.224-0.5-0.5 0-0.654-0.307-1.577-0.7-2.1l-1.8-2.4c-0.266-0.355-0.5-1.056-0.5-1.5v-3c0-0.276 0.224-0.5 0.5-0.5h11c0.276 0 0.5 0.224 0.5 0.5v3z"
  }, pathProps))));
}

LiniCable.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCable;