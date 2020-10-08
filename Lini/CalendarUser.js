var React = require('react');

var PropTypes = require('prop-types');

function LiniCalendarUser({
  size,
  ...props
}) {
  var className = 'Component Lini LiniCalendarUser';

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
    d: "M18.5 2h-2.5v-0.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v0.5h-10v-0.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v0.5h-2.5c-0.827 0-1.5 0.673-1.5 1.5v14c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-14c0-0.827-0.673-1.5-1.5-1.5zM19 17.5c0 0.276-0.224 0.5-0.5 0.5h-17c-0.276 0-0.5-0.224-0.5-0.5v-14c0-0.276 0.224-0.5 0.5-0.5h2.5v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.5h10v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.5h2.5c0.276 0 0.5 0.224 0.5 0.5v14z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 11c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3c0 1.654-1.346 3-3 3zM10 6c-1.103 0-2 0.897-2 2s0.897 2 2 2 2-0.897 2-2-0.897-2-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 16h-7c-0.425 0-0.796-0.177-1.019-0.486s-0.273-0.717-0.139-1.12c0.033-0.098 0.842-2.393 4.658-2.393s4.626 2.296 4.658 2.393c0.134 0.403 0.084 0.811-0.139 1.12s-0.594 0.486-1.019 0.486zM6.289 14.714c-0.030 0.091-0.029 0.172 0.003 0.215s0.11 0.071 0.208 0.071h7c0.098 0 0.176-0.027 0.208-0.071s0.033-0.124 0.003-0.215c-0.011-0.029-0.175-0.442-0.679-0.847-0.704-0.567-1.752-0.866-3.032-0.866s-2.327 0.3-3.032 0.866c-0.504 0.406-0.668 0.818-0.679 0.847z"
  })));
}

LiniCalendarUser.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCalendarUser;