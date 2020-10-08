var React = require('react');

var PropTypes = require('prop-types');

function LiniColorSampler({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniColorSampler';

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
    d: "M13.5 9c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM13.5 7c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M7 18.585c-0.401 0-0.778-0.156-1.061-0.438l-5.086-5.086c-0.283-0.283-0.438-0.659-0.438-1.061s0.156-0.778 0.438-1.061l9.586-9.586c0.283-0.283 0.659-0.438 1.061-0.438s0.778 0.156 1.061 0.438l5.086 5.086c0.585 0.585 0.585 1.536 0 2.121l-9.586 9.586c-0.283 0.283-0.659 0.438-1.061 0.438zM11.5 1.915c-0.134 0-0.26 0.052-0.354 0.145l-9.586 9.586c-0.094 0.094-0.145 0.219-0.145 0.354s0.052 0.26 0.145 0.353l5.086 5.086c0.094 0.094 0.219 0.145 0.354 0.145s0.26-0.052 0.354-0.145l9.586-9.586c0.195-0.195 0.195-0.512 0-0.707l-5.086-5.086c-0.094-0.094-0.219-0.145-0.354-0.145z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M11.223 19.981c-0.294 0-0.581-0.089-0.83-0.26l-1.176-0.808c-0.228-0.156-0.285-0.468-0.129-0.695s0.468-0.285 0.695-0.129l1.176 0.808c0.107 0.073 0.234 0.1 0.358 0.075s0.231-0.099 0.301-0.208l5.461-8.533c0.149-0.233 0.458-0.3 0.691-0.152s0.3 0.458 0.152 0.691l-5.461 8.533c-0.217 0.339-0.553 0.57-0.945 0.649-0.098 0.020-0.196 0.029-0.293 0.029z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M15.445 19.282c-0.119 0-0.238-0.019-0.353-0.057l-0.75-0.25c-0.262-0.087-0.404-0.37-0.316-0.632s0.37-0.404 0.632-0.316l0.75 0.25c0.014 0.005 0.055 0.018 0.126-0.020 0.085-0.046 0.194-0.162 0.246-0.352l1.237-4.535c0.073-0.266 0.348-0.423 0.614-0.351s0.423 0.348 0.351 0.614l-1.237 4.535c-0.117 0.428-0.386 0.782-0.739 0.971-0.179 0.096-0.37 0.144-0.561 0.144z"
  }, pathProps))));
}

LiniColorSampler.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniColorSampler;