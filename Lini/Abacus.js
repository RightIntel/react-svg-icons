var React = require('react');

var PropTypes = require('prop-types');

function LiniAbacus({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniAbacus';

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
  }, /*#__PURE__*/React.createElement("path", _extends({
    d: "M17.5 2h-16c-0.827 0-1.5 0.673-1.5 1.5v14c0 0.827 0.673 1.5 1.5 1.5h16c0.827 0 1.5-0.673 1.5-1.5v-14c0-0.827-0.673-1.5-1.5-1.5zM18 3.5v3.5h-2v-2.086c0.582-0.206 1-0.762 1-1.414 0-0.175-0.031-0.343-0.086-0.5h0.586c0.276 0 0.5 0.224 0.5 0.5zM16 10.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5zM3 13.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5zM16 3.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5zM15 4.914v2.086h-3v-2.086c0.582-0.206 1-0.762 1-1.414 0-0.175-0.031-0.343-0.086-0.5h1.172c-0.056 0.157-0.086 0.325-0.086 0.5 0 0.652 0.418 1.208 1 1.414zM12 3.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5zM11 4.914v2.086h-3v-2.086c0.582-0.206 1-0.762 1-1.414 0-0.175-0.031-0.343-0.086-0.5h1.172c-0.056 0.157-0.086 0.325-0.086 0.5 0 0.652 0.418 1.208 1 1.414zM8 3.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5zM7 4.914v2.086h-3v-2.086c0.582-0.206 1-0.762 1-1.414 0-0.175-0.031-0.343-0.086-0.5h1.172c-0.056 0.157-0.086 0.325-0.086 0.5 0 0.652 0.418 1.208 1 1.414zM4 3.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5zM4 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5zM3 15.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5zM3 17.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5zM4.617 16.5c0.238-0.266 0.383-0.616 0.383-1s-0.145-0.734-0.383-1c0.238-0.266 0.383-0.616 0.383-1 0-0.652-0.418-1.208-1-1.414v-2.172c0.582-0.206 1-0.762 1-1.414 0-0.175-0.031-0.343-0.086-0.5h2.086v2.086c-0.582 0.206-1 0.762-1 1.414 0 0.384 0.145 0.734 0.383 1-0.238 0.266-0.383 0.616-0.383 1s0.145 0.734 0.383 1c-0.238 0.266-0.383 0.616-0.383 1s0.145 0.734 0.383 1c-0.238 0.266-0.383 0.616-0.383 1 0 0.175 0.031 0.343 0.086 0.5h-1.172c0.056-0.157 0.086-0.325 0.086-0.5 0-0.384-0.145-0.734-0.383-1zM8 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5zM7 15.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5zM7 11.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5zM7 17.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5zM8.617 16.5c0.238-0.266 0.383-0.616 0.383-1s-0.145-0.734-0.383-1c0.238-0.266 0.383-0.616 0.383-1s-0.145-0.734-0.383-1c0.238-0.266 0.383-0.616 0.383-1 0-0.652-0.418-1.208-1-1.414v-2.086h3v2.086c-0.582 0.206-1 0.762-1 1.414 0 0.384 0.145 0.734 0.383 1-0.238 0.266-0.383 0.616-0.383 1s0.145 0.734 0.383 1c-0.238 0.266-0.383 0.616-0.383 1s0.145 0.734 0.383 1c-0.238 0.266-0.383 0.616-0.383 1 0 0.175 0.031 0.343 0.086 0.5h-1.172c0.056-0.157 0.086-0.325 0.086-0.5 0-0.384-0.145-0.734-0.383-1zM12 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5zM11 15.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5zM11 11.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5zM11 17.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5zM12.617 16.5c0.238-0.266 0.383-0.616 0.383-1s-0.145-0.734-0.383-1c0.238-0.266 0.383-0.616 0.383-1s-0.145-0.734-0.383-1c0.238-0.266 0.383-0.616 0.383-1 0-0.652-0.418-1.208-1-1.414v-2.086h2.086c-0.056 0.157-0.086 0.325-0.086 0.5 0 0.384 0.145 0.734 0.383 1-0.238 0.266-0.383 0.616-0.383 1 0 0.652 0.418 1.208 1 1.414v2.172c-0.582 0.206-1 0.762-1 1.414 0 0.384 0.145 0.734 0.383 1-0.238 0.266-0.383 0.616-0.383 1 0 0.175 0.031 0.343 0.086 0.5h-1.172c0.056-0.157 0.086-0.325 0.086-0.5 0-0.384-0.145-0.734-0.383-1zM15 17.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5zM15 15.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5-0.5-0.224-0.5-0.5zM16 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5zM1.5 3h0.586c-0.056 0.157-0.086 0.325-0.086 0.5 0 0.652 0.418 1.208 1 1.414v2.086h-2v-3.5c0-0.276 0.224-0.5 0.5-0.5zM1 17.5v-9.5h1.086c-0.056 0.157-0.086 0.325-0.086 0.5 0 0.652 0.418 1.208 1 1.414v2.172c-0.582 0.206-1 0.762-1 1.414 0 0.384 0.145 0.734 0.383 1-0.238 0.266-0.383 0.616-0.383 1s0.145 0.734 0.383 1c-0.238 0.266-0.383 0.616-0.383 1 0 0.175 0.031 0.343 0.086 0.5h-0.586c-0.276 0-0.5-0.224-0.5-0.5zM17.5 18h-0.586c0.056-0.157 0.086-0.325 0.086-0.5 0-0.384-0.145-0.734-0.383-1 0.238-0.266 0.383-0.616 0.383-1 0-0.652-0.418-1.208-1-1.414v-2.172c0.582-0.206 1-0.762 1-1.414 0-0.384-0.145-0.734-0.383-1 0.238-0.266 0.383-0.616 0.383-1 0-0.175-0.031-0.343-0.086-0.5h1.086v9.5c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniAbacus.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniAbacus;