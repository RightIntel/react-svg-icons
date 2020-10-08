var React = require('react');

var PropTypes = require('prop-types');

function LiniAlarmSnooze({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniAlarmSnooze';

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
    d: "M19.5 5h-3c-0.189 0-0.363-0.107-0.447-0.276s-0.066-0.372 0.047-0.524l2.4-3.2h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.189 0 0.363 0.107 0.447 0.276s0.066 0.372-0.047 0.524l-2.4 3.2h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M2.5 5h-2c-0.184 0-0.354-0.102-0.441-0.264s-0.077-0.36 0.025-0.513l1.482-2.223h-1.066c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.184 0 0.354 0.102 0.441 0.264s0.077 0.36-0.025 0.513l-1.482 2.223h1.066c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M16.8 15.101c-1.144-0.859-1.8-2.172-1.8-3.601v-3c0-2.513-1.694-4.638-4-5.292l-0-0.708c0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5v0.708c-2.306 0.655-4 2.779-4 5.292v3c0 1.429-0.656 2.741-1.8 3.601-0.172 0.129-0.242 0.354-0.174 0.558s0.259 0.342 0.474 0.342h4.55c-0.033 0.164-0.051 0.331-0.051 0.5 0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5c0-0.168-0.017-0.336-0.050-0.5h4.55c0.215 0 0.406-0.138 0.474-0.342s-0.002-0.429-0.174-0.558zM9 2.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v0.523c-0.165-0.015-0.331-0.023-0.5-0.023s-0.335 0.008-0.5 0.023v-0.523zM11 16.5c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5c0-0.171 0.030-0.34 0.086-0.5h2.828c0.056 0.16 0.086 0.329 0.086 0.5zM3.742 15c0.255-0.309 0.477-0.646 0.659-1.001 0.398-0.778 0.599-1.619 0.599-2.499v-3c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v3c0 0.88 0.202 1.721 0.599 2.499 0.182 0.356 0.404 0.692 0.659 1.001h-11.517z"
  }, pathProps))));
}

LiniAlarmSnooze.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniAlarmSnooze;