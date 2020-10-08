var React = require('react');

var PropTypes = require('prop-types');

function LiniRotationLock({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniRotationLock';

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
    d: "M13 9.086v-0.586c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v0.586c-0.582 0.206-1 0.762-1 1.414v3c0 0.827 0.673 1.5 1.5 1.5h4c0.827 0 1.5-0.673 1.5-1.5v-3c0-0.652-0.418-1.208-1-1.414zM10.5 7c0.827 0 1.5 0.673 1.5 1.5v0.5h-3v-0.5c0-0.827 0.673-1.5 1.5-1.5zM13 13.5c0 0.276-0.224 0.5-0.5 0.5h-4c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5v3z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10.5 20c-1.776 0-3.508-0.493-5.009-1.426-1.459-0.907-2.647-2.193-3.435-3.717-0.127-0.245-0.031-0.547 0.215-0.674s0.547-0.031 0.674 0.215c1.468 2.839 4.363 4.603 7.556 4.603 4.687 0 8.5-3.813 8.5-8.5s-3.813-8.5-8.5-8.5-8.5 3.813-8.5 8.5c0 0.253-0.188 0.465-0.439 0.496s-0.485-0.13-0.546-0.375l-1-4c-0.067-0.268 0.096-0.539 0.364-0.606s0.539 0.096 0.606 0.364l0.377 1.508c0.437-1.536 1.26-2.944 2.42-4.104 1.794-1.794 4.18-2.782 6.718-2.782s4.923 0.988 6.718 2.783c1.794 1.794 2.782 4.18 2.782 6.717s-0.988 4.923-2.782 6.718c-1.794 1.794-4.18 2.782-6.718 2.782z"
  }, pathProps))));
}

LiniRotationLock.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniRotationLock;