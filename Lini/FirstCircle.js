var React = require('react');

var PropTypes = require('prop-types');

function LiniFirstCircle({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniFirstCircle';

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
    d: "M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5c4.687 0 8.5-3.813 8.5-8.5s-3.813-8.5-8.5-8.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M9.5 15c-0.154 0-0.304-0.072-0.4-0.2l-3-4c-0.133-0.178-0.133-0.422 0-0.6l3-4c0.129-0.172 0.354-0.242 0.558-0.174s0.342 0.259 0.342 0.474v8c0 0.215-0.138 0.406-0.342 0.474-0.052 0.017-0.105 0.026-0.158 0.026zM7.125 10.5l1.875 2.5v-5l-1.875 2.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M5.5 15c-0.276 0-0.5-0.224-0.5-0.5v-8c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v8c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M13.5 15c-0.154 0-0.304-0.072-0.4-0.2l-3-4c-0.133-0.178-0.133-0.422 0-0.6l3-4c0.129-0.172 0.354-0.242 0.558-0.174s0.342 0.259 0.342 0.474v8c0 0.215-0.138 0.406-0.342 0.474-0.052 0.017-0.105 0.026-0.158 0.026zM11.125 10.5l1.875 2.5v-5l-1.875 2.5z"
  }, pathProps))));
}

LiniFirstCircle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFirstCircle;