var React = require('react');

var PropTypes = require('prop-types');

function LiniLoudspeaker({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniLoudspeaker';

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
    d: "M15.5 20h-11c-0.827 0-1.5-0.673-1.5-1.5v-16c0-0.827 0.673-1.5 1.5-1.5h11c0.827 0 1.5 0.673 1.5 1.5v16c0 0.827-0.673 1.5-1.5 1.5zM4.5 2c-0.276 0-0.5 0.224-0.5 0.5v16c0 0.276 0.224 0.5 0.5 0.5h11c0.276 0 0.5-0.224 0.5-0.5v-16c0-0.276-0.224-0.5-0.5-0.5h-11z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10 7c-1.103 0-2-0.897-2-2s0.897-2 2-2c1.103 0 2 0.897 2 2s-0.897 2-2 2zM10 4c-0.551 0-1 0.449-1 1s0.449 1 1 1c0.551 0 1-0.449 1-1s-0.449-1-1-1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10 18c-2.757 0-5-2.243-5-5s2.243-5 5-5c2.757 0 5 2.243 5 5s-2.243 5-5 5zM10 9c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10 15c-1.103 0-2-0.897-2-2s0.897-2 2-2c1.103 0 2 0.897 2 2s-0.897 2-2 2zM10 12c-0.551 0-1 0.449-1 1s0.449 1 1 1c0.551 0 1-0.449 1-1s-0.449-1-1-1z"
  }, pathProps))));
}

LiniLoudspeaker.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniLoudspeaker;