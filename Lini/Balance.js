var React = require('react');

var PropTypes = require('prop-types');

function LiniBalance({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniBalance';

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
    d: "M18.985 13.379l-3-12c-0.057-0.227-0.261-0.379-0.485-0.379-0.004 0-0.007 0-0.011 0h-11.978c-0.029-0.001-0.058 0.001-0.088 0.006-0.033 0.005-0.066 0.014-0.097 0.025-0.086 0.032-0.158 0.085-0.213 0.152-0.031 0.037-0.056 0.079-0.075 0.125-0.011 0.026-0.019 0.053-0.026 0.080l-2.998 11.99c-0.020 0.081-0.019 0.164 0.001 0.242l-0.001 0c0.016 0.063 0.169 0.634 0.671 1.208 0.467 0.534 1.335 1.171 2.814 1.171s2.346-0.637 2.814-1.171c0.502-0.574 0.656-1.145 0.671-1.208l-0.001-0c0.020-0.079 0.021-0.162 0.001-0.242l-2.845-11.379h10.719l-2.845 11.379c-0.020 0.081-0.019 0.164 0.001 0.242l-0.001 0c0.016 0.063 0.169 0.634 0.671 1.208 0.467 0.534 1.335 1.171 2.814 1.171s2.346-0.637 2.814-1.171c0.502-0.574 0.656-1.145 0.671-1.208l-0.001-0c0.020-0.079 0.021-0.162 0.001-0.242zM3.5 15c-1.214 0-1.865-0.542-2.198-1h4.397c-0.333 0.458-0.984 1-2.198 1zM5.86 13h-4.719l2.36-9.438 2.36 9.438zM15.5 3.562l2.36 9.438h-4.719l2.36-9.438zM15.5 15c-1.214 0-1.865-0.542-2.198-1h4.397c-0.333 0.458-0.984 1-2.198 1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M15.5 18h-5.46l0.959-12.462c0.005-0.066-0.003-0.133-0.024-0.196l-1-3c-0.068-0.204-0.259-0.342-0.474-0.342s-0.406 0.138-0.474 0.342l-1 3c-0.021 0.063-0.029 0.13-0.024 0.196l0.959 12.462h-5.46c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h12c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM9.5 4.081l0.494 1.481-0.494 6.418-0.494-6.418 0.494-1.481z"
  }, pathProps))));
}

LiniBalance.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBalance;