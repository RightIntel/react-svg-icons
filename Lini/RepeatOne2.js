var React = require('react');

var PropTypes = require('prop-types');

function LiniRepeatOne2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniRepeatOne2';

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
    d: "M19.854 8.646c-0.195-0.195-0.512-0.195-0.707 0l-1.149 1.149c-0.051-2.060-0.878-3.99-2.341-5.452-1.511-1.511-3.52-2.343-5.657-2.343-2.974 0-5.686 1.635-7.077 4.266-0.129 0.244-0.036 0.547 0.208 0.676s0.547 0.036 0.676-0.208c1.217-2.303 3.59-3.734 6.193-3.734 3.789 0 6.885 3.027 6.997 6.789l-1.143-1.143c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l2 2c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l2-2c0.195-0.195 0.195-0.512 0-0.707z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16.869 13.058c-0.244-0.129-0.547-0.036-0.676 0.208-1.217 2.303-3.59 3.734-6.193 3.734-3.789 0-6.885-3.027-6.997-6.789l1.143 1.143c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-2-2c-0.195-0.195-0.512-0.195-0.707 0l-2 2c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l1.149-1.149c0.051 2.060 0.878 3.99 2.341 5.452 1.511 1.511 3.52 2.343 5.657 2.343 2.974 0 5.686-1.635 7.077-4.266 0.129-0.244 0.036-0.547-0.208-0.676z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10.5 13c-0.276 0-0.5-0.224-0.5-0.5v-4.5h-0.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniRepeatOne2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniRepeatOne2;