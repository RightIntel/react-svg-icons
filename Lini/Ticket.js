var React = require('react');

var PropTypes = require('prop-types');

function LiniTicket({
  size,
  ...props
}) {
  var className = 'Component Lini LiniTicket';

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
    d: "M19.5 16h-19c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5 0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h19c0.276 0 0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5c0.276 0 0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5zM1 15h18v-2.050c-1.14-0.232-2-1.242-2-2.45s0.86-2.217 2-2.45v-2.050h-18v2.050c1.14 0.232 2 1.242 2 2.45s-0.86 2.217-2 2.45v2.050z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 14h-11c-0.276 0-0.5-0.224-0.5-0.5v-6c0-0.276 0.224-0.5 0.5-0.5h11c0.276 0 0.5 0.224 0.5 0.5v6c0 0.276-0.224 0.5-0.5 0.5zM5 13h10v-5h-10v5z"
  })));
}

LiniTicket.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTicket;