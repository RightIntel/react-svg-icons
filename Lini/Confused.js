var React = require('react');

var PropTypes = require('prop-types');

function LiniConfused({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniConfused';

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
    d: "M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M6.5 8c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM6.5 6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M12.5 8c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM12.5 6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M5.5 15.001c-0.276 0-0.5-0.225-0.5-0.501 0-0.063 0.008-0.635 0.303-1.224 0.412-0.823 1.192-1.276 2.197-1.276 1.207 0 1.843 0.636 2.354 1.146 0.477 0.477 0.854 0.854 1.646 0.854 0.622 0 1.044-0.228 1.29-0.698 0.203-0.389 0.21-0.8 0.21-0.805 0-0.276 0.224-0.499 0.5-0.499s0.5 0.225 0.5 0.501c0 0.063-0.008 0.635-0.303 1.224-0.412 0.823-1.192 1.276-2.197 1.276-1.207 0-1.843-0.636-2.354-1.146-0.477-0.477-0.854-0.854-1.646-0.854-0.622 0-1.044 0.228-1.29 0.698-0.203 0.389-0.21 0.8-0.21 0.805 0 0.276-0.224 0.499-0.5 0.499z"
  }, pathProps))));
}

LiniConfused.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniConfused;