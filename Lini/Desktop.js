var React = require('react');

var PropTypes = require('prop-types');

function LiniDesktop({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniDesktop';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.5 1h-17c-0.827 0-1.5 0.673-1.5 1.5v13c0 0.827 0.673 1.5 1.5 1.5h5.191l-0.691 1.382c-0.158 0.317-0.323 0.542-0.409 0.635-0.214 0.057-0.372 0.252-0.372 0.483 0 0.276 0.224 0.5 0.5 0.5h8.561c0.276 0 0.5-0.224 0.5-0.5 0-0.232-0.158-0.427-0.372-0.483-0.086-0.092-0.25-0.318-0.409-0.635l-0.691-1.382h5.191c0.827 0 1.5-0.673 1.5-1.5v-13c0-0.827-0.673-1.5-1.5-1.5zM1.5 2h17c0.276 0 0.5 0.224 0.5 0.5v9.5h-18v-9.5c0-0.276 0.224-0.5 0.5-0.5zM13.106 18.829c0.029 0.058 0.059 0.115 0.090 0.171h-6.39c0.031-0.056 0.061-0.113 0.090-0.171l0.915-1.829h4.382l0.915 1.829zM18.5 16h-17c-0.276 0-0.5-0.224-0.5-0.5v-2.5h18v2.5c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 15h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  })));
}

LiniDesktop.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniDesktop;