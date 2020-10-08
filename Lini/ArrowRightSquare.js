var React = require('react');

var PropTypes = require('prop-types');

function LiniArrowRightSquare({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniArrowRightSquare';

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
    d: "M0 2.5v16c0 0.827 0.673 1.5 1.5 1.5h16c0.827 0 1.5-0.673 1.5-1.5v-16c0-0.827-0.673-1.5-1.5-1.5h-16c-0.827 0-1.5 0.673-1.5 1.5zM18 18.5c0 0.276-0.224 0.5-0.5 0.5h-16c-0.276 0-0.5-0.224-0.5-0.5v-16c0-0.276 0.224-0.5 0.5-0.5h16c0.276 0 0.5 0.224 0.5 0.5v16z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.354 7.146l3 3c0.195 0.195 0.195 0.512 0 0.707l-3 3c-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707l2.146-2.146h-8.293c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h8.293l-2.146-2.146c-0.098-0.098-0.146-0.226-0.146-0.354s0.049-0.256 0.146-0.354c0.195-0.195 0.512-0.195 0.707 0z",
    fill: color
  })));
}

LiniArrowRightSquare.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniArrowRightSquare;