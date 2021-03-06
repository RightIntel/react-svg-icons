var React = require('react');

var PropTypes = require('prop-types');

function LiniPlusCircle({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniPlusCircle';

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
    d: "M16.218 3.782c-1.794-1.794-4.18-2.782-6.718-2.782s-4.923 0.988-6.718 2.782-2.782 4.18-2.782 6.717 0.988 4.923 2.782 6.718 4.18 2.782 6.718 2.782 4.923-0.988 6.718-2.782 2.782-4.18 2.782-6.718-0.988-4.923-2.782-6.717zM9.5 19c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5c4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M15.5 10h-5.5v-5.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v5.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h5.5v5.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-5.5h5.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z"
  }, pathProps))));
}

LiniPlusCircle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPlusCircle;