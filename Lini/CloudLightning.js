var React = require('react');

var PropTypes = require('prop-types');

function LiniCloudLightning({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniCloudLightning';

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
    d: "M16.006 16h-3.506c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3.506c1.651 0 2.994-1.343 2.994-2.994s-1.343-2.994-2.994-2.994c-0.354 0-0.699 0.061-1.026 0.18-0.218 0.080-0.462-0.001-0.59-0.195s-0.104-0.45 0.056-0.619c0.357-0.376 0.554-0.865 0.554-1.379 0-1.103-0.897-2-2-2-0.642 0-1.229 0.297-1.61 0.814-0.23 0.312-0.365 0.678-0.388 1.057-0.013 0.212-0.159 0.392-0.363 0.45s-0.423-0.020-0.545-0.193c-0.11-0.156-0.229-0.307-0.354-0.447-0.949-1.068-2.312-1.681-3.74-1.681-2.757 0-5 2.243-5 5s2.243 5 5 5h2.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2.5c-3.308 0-6-2.692-6-6s2.692-6 6-6c1.602 0 3.137 0.643 4.26 1.775 0.088-0.194 0.196-0.38 0.325-0.555 0.564-0.764 1.467-1.22 2.415-1.22 1.654 0 3 1.346 3 3 0 0.351-0.061 0.694-0.178 1.017 0.061-0.003 0.122-0.004 0.184-0.004 2.202 0 3.994 1.792 3.994 3.994s-1.792 3.994-3.994 3.994z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 16c-0.075 0-0.151-0.017-0.223-0.053-0.247-0.123-0.347-0.424-0.224-0.671l1.138-2.276h-2.191c-0.173 0-0.334-0.090-0.425-0.237s-0.099-0.331-0.022-0.486l1.5-3c0.123-0.247 0.424-0.347 0.671-0.224s0.347 0.424 0.224 0.671l-1.138 2.276h2.191c0.173 0 0.334 0.090 0.425 0.237s0.099 0.331 0.022 0.486l-1.5 3c-0.088 0.175-0.264 0.277-0.448 0.277z",
    fill: color
  })));
}

LiniCloudLightning.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCloudLightning;