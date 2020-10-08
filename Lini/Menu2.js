var React = require('react');

var PropTypes = require('prop-types');

function LiniMenu2({
  size,
  ...props
}) {
  var className = 'Component Lini LiniMenu2';

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
    d: "M18.5 7h-17c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5h17c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM1.5 5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-17z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 12h-17c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5h17c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM1.5 10c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-17z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 17h-17c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5h17c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM1.5 15c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-17z"
  })));
}

LiniMenu2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniMenu2;