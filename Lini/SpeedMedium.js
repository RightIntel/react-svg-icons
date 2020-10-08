var React = require('react');

var PropTypes = require('prop-types');

function LiniSpeedMedium({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniSpeedMedium';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.5 15c-0.827 0-1.5-0.673-1.5-1.5 0-0.569 0.84-5.173 1.008-6.090 0.044-0.237 0.25-0.41 0.492-0.41s0.448 0.172 0.492 0.41c0.168 0.917 1.008 5.521 1.008 6.090 0 0.827-0.673 1.5-1.5 1.5zM9.5 10.334c-0.283 1.619-0.499 2.946-0.5 3.167 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c-0.001-0.221-0.217-1.548-0.5-3.166z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.218 5.783c-1.794-1.794-4.18-2.783-6.718-2.783s-4.923 0.988-6.717 2.783-2.782 4.18-2.782 6.717c0 1.889 0.553 3.714 1.6 5.278 0.093 0.139 0.249 0.222 0.416 0.222l14.969-0c0.167 0 0.323-0.083 0.416-0.222 1.047-1.564 1.6-3.389 1.6-5.278 0-2.538-0.988-4.923-2.782-6.717zM16.712 17l-14.425 0c-0.755-1.207-1.19-2.577-1.273-4h0.485c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.485c0.25-4.29 3.695-7.735 7.985-7.985v0.485c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.485c4.29 0.25 7.735 3.695 7.985 7.985h-0.485c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.485c-0.083 1.423-0.518 2.793-1.273 4z",
    fill: color
  })));
}

LiniSpeedMedium.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSpeedMedium;