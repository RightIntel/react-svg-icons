var React = require('react');

var PropTypes = require('prop-types');

function LiniClipboardUser({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniClipboardUser';

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
    d: "M16.5 20h-14c-0.827 0-1.5-0.673-1.5-1.5v-14c0-0.827 0.673-1.5 1.5-1.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-1c-0.276 0-0.5 0.224-0.5 0.5v14c0 0.276 0.224 0.5 0.5 0.5h14c0.276 0 0.5-0.224 0.5-0.5v-14c0-0.276-0.224-0.5-0.5-0.5h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.827 0 1.5 0.673 1.5 1.5v14c0 0.827-0.673 1.5-1.5 1.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.501 5c-0 0-0 0-0.001 0h-8c-0.276 0-0.5-0.224-0.5-0.5 0-1.005 0.453-1.786 1.276-2.197 0.275-0.138 0.547-0.213 0.764-0.254 0.213-1.164 1.235-2.049 2.459-2.049s2.246 0.885 2.459 2.049c0.218 0.041 0.489 0.116 0.764 0.254 0.816 0.408 1.268 1.178 1.276 2.17 0.001 0.009 0.001 0.018 0.001 0.027 0 0.276-0.224 0.5-0.5 0.5zM6.060 4h6.88c-0.096-0.356-0.307-0.617-0.638-0.79-0.389-0.203-0.8-0.21-0.805-0.21-0.276 0-0.497-0.224-0.497-0.5 0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5c0 0.276-0.224 0.5-0.5 0.5-0.001 0-0.413 0.007-0.802 0.21-0.331 0.173-0.542 0.433-0.638 0.79z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 3c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.26-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 17h-6c-0.425 0-0.796-0.177-1.019-0.486s-0.273-0.717-0.139-1.12c0.022-0.065 0.229-0.649 0.849-1.232 0.564-0.53 1.596-1.161 3.309-1.161s2.745 0.631 3.309 1.161c0.62 0.583 0.827 1.167 0.849 1.232 0.134 0.403 0.084 0.811-0.139 1.12s-0.594 0.486-1.019 0.486zM9.5 14c-2.609 0-3.204 1.692-3.209 1.709-0.031 0.093-0.030 0.175 0.002 0.219s0.11 0.071 0.208 0.071h6c0.098 0 0.176-0.027 0.208-0.071s0.033-0.125 0.003-0.217c-0.032-0.089-0.651-1.712-3.21-1.712z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 12c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM9.5 8c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5z",
    fill: color
  })));
}

LiniClipboardUser.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniClipboardUser;