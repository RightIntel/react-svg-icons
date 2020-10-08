var React = require('react');

var PropTypes = require('prop-types');

function LiniLamp({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniLamp';

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
    d: "M10.5 20h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10 0c-3.308 0-6 2.692-6 6 0 2.114 1.014 3.828 1.057 3.9 0.266 0.444 0.645 1.228 0.826 1.712l0.798 2.127c0.121 0.322 0.353 0.613 0.641 0.834-0.201 0.255-0.322 0.577-0.322 0.927 0 0.384 0.145 0.734 0.383 1-0.238 0.266-0.383 0.616-0.383 1 0 0.827 0.673 1.5 1.5 1.5h3c0.827 0 1.5-0.673 1.5-1.5 0-0.384-0.145-0.734-0.383-1 0.238-0.266 0.383-0.616 0.383-1 0-0.35-0.121-0.672-0.322-0.927 0.288-0.221 0.52-0.511 0.641-0.834l0.797-2.127c0.182-0.484 0.56-1.268 0.826-1.712 0.043-0.072 1.058-1.786 1.058-3.9 0-3.308-2.692-6-6-6zM11.5 18h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM12 15.5c0 0.276-0.224 0.5-0.5 0.5h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5zM14.085 9.385c-0.297 0.494-0.703 1.336-0.905 1.876l-0.797 2.127c-0.12 0.32-0.541 0.612-0.883 0.612h-3c-0.342 0-0.763-0.292-0.883-0.612l-0.798-2.127c-0.202-0.54-0.608-1.381-0.905-1.876-0.009-0.015-0.914-1.545-0.914-3.385 0-2.757 2.243-5 5-5s5 2.243 5 5c0 1.829-0.906 3.371-0.915 3.385z"
  }, pathProps))));
}

LiniLamp.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniLamp;