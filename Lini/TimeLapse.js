var React = require('react');

var PropTypes = require('prop-types');

function LiniTimeLapse({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniTimeLapse';

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
    d: "M5.5 8c-0.128 0-0.256-0.049-0.354-0.146l-2-2c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2 2c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M13.5 18h-7c-0.827 0-1.5-0.673-1.5-1.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h7c0.276 0 0.5-0.224 0.5-0.5v-7c0-0.276-0.224-0.5-0.5-0.5h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.827 0 1.5 0.673 1.5 1.5v7c0 0.827-0.673 1.5-1.5 1.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M18.968 17.148c-0 0-0 0-0 0-0.193-0-0.39-0.050-0.586-0.148l-1.211-0.606c-0.657-0.328-1.171-1.16-1.171-1.894v-3c0-0.734 0.514-1.566 1.171-1.894l1.211-0.606c0.196-0.098 0.393-0.148 0.586-0.148 0.598 0 1.032 0.483 1.032 1.148v6c0 0.316-0.092 0.592-0.267 0.799-0.19 0.225-0.462 0.349-0.765 0.349zM18.968 9.852c-0.016 0-0.063 0.004-0.139 0.042l-1.211 0.606c-0.323 0.162-0.618 0.638-0.618 1v3c0 0.362 0.295 0.838 0.618 1l1.211 0.606c0.076 0.038 0.123 0.042 0.139 0.042 0.002 0 0.004-0 0.005-0 0.010-0.017 0.027-0.064 0.027-0.148v-6c0-0.084-0.017-0.131-0.027-0.148-0.001-0-0.003-0-0.005-0z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M5.5 13c-3.033 0-5.5-2.467-5.5-5.5 0-0.88 0.202-1.72 0.599-2.499 0.182-0.356 0.404-0.692 0.659-1.001l-0.758 0c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5l2-0c0.215 0 0.406 0.138 0.474 0.342s-0.002 0.429-0.174 0.558c-1.144 0.859-1.8 2.172-1.8 3.6 0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5c0-2.481-2.019-4.5-4.5-4.5-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c3.033 0 5.5 2.467 5.5 5.5s-2.467 5.5-5.5 5.5z"
  }, pathProps))));
}

LiniTimeLapse.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTimeLapse;