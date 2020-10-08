var React = require('react');

var PropTypes = require('prop-types');

function LiniSpeedFast({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniSpeedFast';

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
    d: "M9.5 15c-0.401 0-0.777-0.156-1.061-0.439-0.585-0.585-0.585-1.536 0-2.121 0.402-0.402 4.252-3.064 5.019-3.594 0.199-0.137 0.467-0.113 0.637 0.058s0.195 0.439 0.058 0.637c-0.529 0.768-3.191 4.617-3.594 5.019-0.283 0.283-0.66 0.439-1.061 0.439zM11.739 11.261c-1.345 0.945-2.436 1.73-2.593 1.886-0.195 0.195-0.195 0.512 0 0.707 0.094 0.094 0.22 0.146 0.354 0.146s0.259-0.052 0.354-0.146c0.155-0.157 0.941-1.248 1.885-2.593z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.218 5.783c-1.794-1.794-4.18-2.783-6.718-2.783s-4.923 0.988-6.717 2.783-2.782 4.18-2.782 6.717c0 1.889 0.553 3.714 1.6 5.278 0.093 0.139 0.249 0.222 0.416 0.222l14.969-0c0.167 0 0.323-0.083 0.416-0.222 1.047-1.564 1.6-3.389 1.6-5.278 0-2.538-0.988-4.923-2.782-6.717zM16.712 17l-14.425 0c-0.755-1.207-1.19-2.577-1.273-4h0.485c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.485c0.25-4.29 3.695-7.735 7.985-7.985v0.485c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.485c4.29 0.25 7.735 3.695 7.985 7.985h-0.485c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.485c-0.083 1.423-0.518 2.793-1.273 4z",
    fill: color
  })));
}

LiniSpeedFast.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSpeedFast;