var React = require('react');

var PropTypes = require('prop-types');

function LiniLaunch({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniLaunch';

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
    d: "M19.5 0h-5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h3.833l-11.186 11.146c-0.196 0.195-0.196 0.511-0.001 0.707 0.098 0.098 0.226 0.147 0.354 0.147s0.255-0.049 0.353-0.146l11.147-11.107v3.753c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16.5 20h-15c-0.827 0-1.5-0.673-1.5-1.5v-15c0-0.827 0.673-1.5 1.5-1.5h10c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-10c-0.276 0-0.5 0.224-0.5 0.5v15c0 0.276 0.224 0.5 0.5 0.5h15c0.276 0 0.5-0.224 0.5-0.5v-10c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v10c0 0.827-0.673 1.5-1.5 1.5z"
  }, pathProps))));
}

LiniLaunch.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniLaunch;