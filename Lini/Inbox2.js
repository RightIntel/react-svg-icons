var React = require('react');

var PropTypes = require('prop-types');

function LiniInbox2({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniInbox2';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.5 9.382l-2.606-5.211c-0.328-0.657-1.16-1.171-1.894-1.171h-2.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2.5c0.362 0 0.838 0.295 1 0.618l2.606 5.211c0.028 0.055 0.055 0.117 0.081 0.183-0.061-0.008-0.123-0.012-0.187-0.012h-5c-0.276 0-0.5 0.224-0.5 0.5 0 1.378-1.122 2.5-2.5 2.5s-2.5-1.122-2.5-2.5c0-0.276-0.224-0.5-0.5-0.5h-5c-0.063 0-0.125 0.004-0.187 0.012 0.026-0.066 0.053-0.128 0.081-0.183l2.606-5.211c0.162-0.323 0.638-0.618 1-0.618h2.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2.5c-0.734 0-1.566 0.514-1.894 1.171l-2.606 5.211c-0.28 0.561-0.5 1.491-0.5 2.118v4c0 0.827 0.673 1.5 1.5 1.5h16c0.827 0 1.5-0.673 1.5-1.5v-4c0-0.627-0.22-1.557-0.5-2.118zM18 15.5c0 0.276-0.224 0.5-0.5 0.5h-16c-0.276 0-0.5-0.224-0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5h4.536c0.243 1.694 1.704 3 3.464 3s3.221-1.306 3.464-3h4.536c0.276 0 0.5 0.224 0.5 0.5v4z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.854 6.646c-0.195-0.195-0.512-0.195-0.707 0l-1.146 1.146v-4.293c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v4.293l-1.146-1.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l2 2c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l2-2c0.195-0.195 0.195-0.512-0-0.707z",
    fill: color
  })));
}

LiniInbox2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniInbox2;