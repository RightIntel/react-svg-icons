var React = require('react');

var PropTypes = require('prop-types');

function LiniLibrary({
  size,
  ...props
}) {
  var className = 'Component Lini LiniLibrary';

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
    d: "M10.5 0h-2c-0.827 0-1.5 0.673-1.5 1.5v0.586c-0.157-0.056-0.325-0.086-0.5-0.086h-5c-0.827 0-1.5 0.673-1.5 1.5v15c0 0.827 0.673 1.5 1.5 1.5h5c0.384 0 0.734-0.145 1-0.383 0.266 0.238 0.616 0.383 1 0.383h2c0.827 0 1.5-0.673 1.5-1.5v-17c0-0.827-0.673-1.5-1.5-1.5zM6.5 19h-5c-0.276 0-0.5-0.224-0.5-0.5v-15c0-0.276 0.224-0.5 0.5-0.5h5c0.276 0 0.5 0.224 0.5 0.5v15c0 0.276-0.224 0.5-0.5 0.5zM11 18.5c0 0.276-0.224 0.5-0.5 0.5h-2c-0.276 0-0.5-0.224-0.5-0.5v-17c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v17z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 6h-2.859c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2.859c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.61 19.623l-2.978 0.366c-0.821 0.101-1.571-0.485-1.672-1.306l-1.95-15.881c-0.101-0.821 0.485-1.571 1.306-1.672l2.978-0.366c0.821-0.101 1.571 0.485 1.672 1.306l1.95 15.881c0.101 0.821-0.485 1.571-1.306 1.672zM13.439 2.123c-0.274 0.034-0.469 0.284-0.435 0.557l1.95 15.881c0.034 0.274 0.284 0.469 0.557 0.435l2.978-0.366c0.274-0.034 0.469-0.284 0.435-0.557l-1.95-15.881c-0.034-0.274-0.284-0.469-0.557-0.435l-2.978 0.366z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.79 4.857l-0.993 0.122c-0.274 0.034-0.524-0.161-0.557-0.435s0.161-0.524 0.435-0.557l0.993-0.122c0.274-0.034 0.524 0.161 0.557 0.435s-0.161 0.524-0.435 0.557z",
    fill: "#000000"
  })));
}

LiniLibrary.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniLibrary;