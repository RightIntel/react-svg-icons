var React = require('react');

var PropTypes = require('prop-types');

function LiniStopCircle({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniStopCircle';

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
    d: "M12.5 15h-6c-0.827 0-1.5-0.673-1.5-1.5v-6c0-0.827 0.673-1.5 1.5-1.5h6c0.827 0 1.5 0.673 1.5 1.5v6c0 0.827-0.673 1.5-1.5 1.5zM6.5 7c-0.276 0-0.5 0.224-0.5 0.5v6c0 0.276 0.224 0.5 0.5 0.5h6c0.276 0 0.5-0.224 0.5-0.5v-6c0-0.276-0.224-0.5-0.5-0.5h-6z"
  }, pathProps))));
}

LiniStopCircle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniStopCircle;