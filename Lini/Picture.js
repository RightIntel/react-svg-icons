var React = require('react');

var PropTypes = require('prop-types');

function LiniPicture({
  size,
  ...props
}) {
  var className = 'Component Lini LiniPicture';

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
    d: "M13.5 9c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM13.5 5c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5-0.673-1.5-1.5-1.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 0h-17c-0.827 0-1.5 0.673-1.5 1.5v17c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-17c0-0.827-0.673-1.5-1.5-1.5zM1 18.5v-4.807l4.197-4.617c0.085-0.093 0.196-0.145 0.314-0.147s0.231 0.048 0.318 0.139l9.5 9.932h-13.83c-0.276 0-0.5-0.224-0.5-0.5zM19 18.5c0 0.276-0.224 0.5-0.5 0.5h-1.786l-10.161-10.623c-0.281-0.294-0.655-0.452-1.053-0.447s-0.768 0.173-1.042 0.474l-3.457 3.803v-10.707c0-0.276 0.224-0.5 0.5-0.5h17c0.276 0 0.5 0.224 0.5 0.5v17z",
    fill: "#000000"
  })));
}

LiniPicture.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPicture;