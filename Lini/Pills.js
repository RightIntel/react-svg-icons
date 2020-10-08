var React = require('react');

var PropTypes = require('prop-types');

function LiniPills({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniPills';

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
    d: "M18.293 11.95c-1.021-0.613-2.368-0.95-3.793-0.95s-2.772 0.337-3.793 0.95c-1.101 0.661-1.707 1.566-1.707 2.55v2c0 0.984 0.606 1.89 1.707 2.55 1.021 0.613 2.368 0.95 3.793 0.95s2.772-0.337 3.793-0.95c1.101-0.661 1.707-1.566 1.707-2.55v-2c0-0.984-0.606-1.89-1.707-2.55zM14.5 12c2.439 0 4.5 1.145 4.5 2.5s-2.061 2.5-4.5 2.5-4.5-1.145-4.5-2.5 2.061-2.5 4.5-2.5zM14.5 19c-2.419 0-4.466-1.126-4.499-2.467 0.206 0.185 0.442 0.358 0.706 0.517 1.021 0.613 2.368 0.95 3.793 0.95s2.772-0.337 3.793-0.95c0.265-0.159 0.5-0.332 0.706-0.517-0.033 1.341-2.080 2.467-4.499 2.467z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M13.5 16c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l2-2c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-2 2c-0.098 0.098-0.226 0.146-0.354 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M12.975 1.025c-0.661-0.661-1.54-1.025-2.475-1.025s-1.814 0.364-2.475 1.025l-7 7c-0.661 0.661-1.025 1.54-1.025 2.475s0.364 1.814 1.025 2.475c0.661 0.661 1.54 1.025 2.475 1.025s1.814-0.364 2.475-1.025l7-7c1.365-1.365 1.365-3.585 0-4.95zM5.268 12.268c-0.472 0.472-1.1 0.732-1.768 0.732s-1.296-0.26-1.768-0.732c-0.472-0.472-0.732-1.1-0.732-1.768s0.26-1.296 0.732-1.768l3.646-3.646c1.775 0.352 3.183 1.76 3.536 3.536l-3.646 3.646zM12.268 5.268l-2.534 2.534c-0.265-0.821-0.721-1.567-1.345-2.191s-1.37-1.080-2.191-1.344l2.534-2.534c0.472-0.472 1.1-0.732 1.768-0.732s1.296 0.26 1.768 0.732c0.975 0.975 0.975 2.561 0 3.536z"
  }, pathProps))));
}

LiniPills.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPills;