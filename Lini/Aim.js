var React = require('react');

var PropTypes = require('prop-types');

function LiniAim({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniAim';

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
    d: "M9.5 1c-0.276 0-0.5 0.224-0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M9.5 15c-0.276 0-0.5 0.224-0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M5 10.5c0-0.276-0.224-0.5-0.5-0.5h-4c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M18.5 10h-4c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M16.21 9c-0.216 0-0.414-0.14-0.479-0.357-0.628-2.111-2.263-3.746-4.374-4.374-0.265-0.079-0.415-0.357-0.337-0.622s0.357-0.415 0.622-0.337c1.187 0.353 2.28 1.006 3.161 1.886s1.533 1.974 1.886 3.161c0.079 0.265-0.072 0.543-0.337 0.622-0.048 0.014-0.096 0.021-0.143 0.021z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M11.5 17.71c-0.216 0-0.414-0.14-0.479-0.357-0.079-0.265 0.072-0.543 0.337-0.622 2.11-0.628 3.745-2.263 4.374-4.374 0.079-0.265 0.357-0.415 0.622-0.337s0.415 0.357 0.337 0.622c-0.353 1.187-1.006 2.28-1.886 3.161s-1.973 1.533-3.161 1.886c-0.048 0.014-0.096 0.021-0.143 0.021z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M7.5 17.71c-0.047 0-0.095-0.007-0.143-0.021-1.187-0.353-2.28-1.005-3.161-1.886s-1.533-1.973-1.886-3.161c-0.079-0.265 0.072-0.543 0.337-0.622s0.543 0.072 0.622 0.337c0.628 2.11 2.263 3.745 4.374 4.373 0.265 0.079 0.415 0.357 0.337 0.622-0.065 0.217-0.264 0.358-0.479 0.358z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M2.79 9c-0.047 0-0.095-0.007-0.143-0.021-0.265-0.079-0.415-0.357-0.337-0.622 0.353-1.187 1.006-2.28 1.886-3.161s1.973-1.533 3.161-1.886c0.265-0.079 0.543 0.072 0.622 0.337s-0.072 0.543-0.337 0.622c-2.11 0.628-3.745 2.263-4.373 4.374-0.065 0.217-0.264 0.358-0.479 0.358z"
  }, pathProps))));
}

LiniAim.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniAim;