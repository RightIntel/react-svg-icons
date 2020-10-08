var React = require('react');

var PropTypes = require('prop-types');

function LiniCommunicationCrossed({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniCommunicationCrossed';

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
    d: "M1.5 11c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM1.5 9c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18.5 11c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM18.5 9c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18.931 4.247c-0.14-0.238-0.446-0.317-0.684-0.177l-5.957 3.504c0.308-0.997 0.856-1.911 1.615-2.67 0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0c-1.123 1.123-1.846 2.539-2.097 4.076l-2.1 1.235c0-0.003 0-0.005 0-0.008 0-2.003-0.78-3.887-2.197-5.303-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707c1.228 1.228 1.904 2.86 1.904 4.596 0 0.206-0.010 0.411-0.029 0.613l-2.472 1.454c0.327-0.631 0.501-1.336 0.501-2.068 0-1.202-0.468-2.332-1.318-3.182-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707c0.661 0.661 1.025 1.54 1.025 2.475s-0.364 1.814-1.025 2.475c-0.149 0.149-0.184 0.369-0.105 0.551l-2.623 1.543c-0.238 0.14-0.317 0.446-0.177 0.684 0.093 0.158 0.26 0.247 0.431 0.247 0.086 0 0.173-0.022 0.253-0.069l5.957-3.504c-0.308 0.997-0.856 1.911-1.615 2.67-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c1.123-1.123 1.845-2.539 2.097-4.076l2.1-1.235c0 0.003-0 0.005-0 0.008 0 2.003 0.78 3.887 2.197 5.303 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707-1.228-1.228-1.904-2.86-1.904-4.596 0-0.206 0.010-0.411 0.029-0.613l2.472-1.454c-0.327 0.631-0.501 1.336-0.501 2.068 0 1.202 0.468 2.332 1.318 3.182 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707-0.661-0.661-1.025-1.54-1.025-2.475s0.364-1.814 1.025-2.475c0.149-0.149 0.184-0.369 0.105-0.551l2.623-1.543c0.238-0.14 0.317-0.446 0.177-0.684z"
  }, pathProps))));
}

LiniCommunicationCrossed.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCommunicationCrossed;