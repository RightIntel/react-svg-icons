var React = require('react');

var PropTypes = require('prop-types');

function LiniPaintRoller({
  size,
  ...props
}) {
  var className = 'Component Lini LiniPaintRoller';

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
    d: "M17.5 4h-0.5v-0.5c0-0.827-0.673-1.5-1.5-1.5h-14c-0.827 0-1.5 0.673-1.5 1.5v2c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-0.5h0.5c0.276 0 0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5h-8c-0.827 0-1.5 0.673-1.5 1.5v1.586c-0.582 0.206-1 0.762-1 1.414v5c0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5v-5c0-0.652-0.418-1.208-1-1.414v-1.586c0-0.276 0.224-0.5 0.5-0.5h8c0.827 0 1.5-0.673 1.5-1.5v-2c0-0.827-0.673-1.5-1.5-1.5zM16 5.5c0 0.276-0.224 0.5-0.5 0.5h-14c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h14c0.276 0 0.5 0.224 0.5 0.5v2zM9 17.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v5z",
    fill: "#000000"
  })));
}

LiniPaintRoller.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPaintRoller;