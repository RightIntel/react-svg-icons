var React = require('react');

var PropTypes = require('prop-types');

function LiniReminder2({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniReminder2';

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
    d: "M14 17.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 4c-0.276 0-0.5-0.224-0.5-0.5s-0.224-0.5-0.5-0.5-0.5 0.224-0.5 0.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.827 0.673-1.5 1.5-1.5s1.5 0.673 1.5 1.5c0 0.276-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.281 15.22c0.328-0.636 0.719-1.798 0.719-3.72 0-0.827-0.673-1.5-1.5-1.5-0.195 0-0.382 0.037-0.553 0.105-0.174-0.636-0.757-1.105-1.447-1.105-0.195 0-0.382 0.037-0.553 0.105-0.174-0.636-0.757-1.105-1.447-1.105-0.175 0-0.344 0.030-0.5 0.086v-0.586c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 2.102-0.516 3.139-0.748 3.5h-6.043l-4.057-4.108c-0.192-0.194-0.192-0.519-0.002-0.71 0.207-0.207 0.592-0.227 0.823-0.044l2.216 1.754c0.15 0.119 0.355 0.142 0.528 0.058s0.282-0.258 0.282-0.45v-4c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v2.966l-1.406-1.113c-0.304-0.241-0.695-0.361-1.098-0.339s-0.779 0.186-1.053 0.46c-0.581 0.581-0.583 1.532-0.003 2.12l3.479 3.523c-0.539 0.227-0.919 0.762-0.919 1.383v2c0 0.827 0.673 1.5 1.5 1.5h7c0.827 0 1.5-0.673 1.5-1.5v-2c0-0.541-0.288-1.016-0.719-1.28zM15 18.5c0 0.276-0.224 0.5-0.5 0.5h-7c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h7c0.276 0 0.5 0.224 0.5 0.5v2z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 4c-0.55 0-2.252 0.659-3 0.96-0.748-0.301-2.45-0.96-3-0.96-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5c0.55 0 2.252-0.659 3-0.96 0.748 0.301 2.45 0.96 3 0.96 0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5zM5.5 6c-0.276-0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.191 0.003 0.862 0.22 1.62 0.5-0.758 0.28-1.429 0.497-1.62 0.5zM11.5 6c-0.192-0.003-0.863-0.22-1.62-0.5 0.758-0.28 1.429-0.497 1.62-0.5 0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  })));
}

LiniReminder2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniReminder2;