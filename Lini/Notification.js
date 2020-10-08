var React = require('react');

var PropTypes = require('prop-types');

function LiniNotification({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniNotification';

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
  }, /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9.5 19.671c-0.103 0-0.206-0.032-0.294-0.096l-2.148-1.561h-2.655c-0.217 0-0.409-0.139-0.476-0.346l-0.82-2.525-2.148-1.561c-0.175-0.127-0.249-0.353-0.182-0.559l0.82-2.525-0.82-2.525c-0.067-0.206 0.006-0.432 0.182-0.559l2.148-1.56 0.82-2.525c0.067-0.206 0.259-0.346 0.476-0.346h2.655l2.148-1.56c0.175-0.127 0.413-0.127 0.588 0l2.148 1.56h2.655c0.217 0 0.409 0.139 0.476 0.346l0.82 2.525 2.148 1.56c0.175 0.127 0.249 0.353 0.182 0.559l-0.82 2.525 0.82 2.525c0.067 0.206-0.006 0.432-0.182 0.559l-2.148 1.561-0.82 2.525c-0.067 0.206-0.259 0.346-0.476 0.346h-2.655l-2.148 1.561c-0.088 0.064-0.191 0.095-0.294 0.095zM4.767 17.015h2.454c0.106 0 0.208 0.033 0.294 0.096l1.985 1.442 1.985-1.442c0.085-0.062 0.188-0.096 0.294-0.096h2.454l0.758-2.334c0.033-0.1 0.096-0.188 0.182-0.25l1.985-1.442-0.758-2.334c-0.033-0.1-0.033-0.209 0-0.309l0.758-2.334-1.985-1.442c-0.085-0.062-0.149-0.15-0.182-0.25l-0.758-2.334h-2.454c-0.106 0-0.208-0.033-0.294-0.096l-1.985-1.442-1.985 1.442c-0.085 0.062-0.188 0.096-0.294 0.096h-2.454l-0.758 2.334c-0.033 0.1-0.096 0.188-0.182 0.25l-1.985 1.442 0.758 2.334c0.033 0.1 0.033 0.209 0 0.309l-0.758 2.334 1.985 1.442c0.085 0.062 0.149 0.15 0.182 0.25l0.758 2.334z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9.5 12c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9.5 15c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniNotification.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniNotification;