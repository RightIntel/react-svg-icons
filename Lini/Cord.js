var React = require('react');

var PropTypes = require('prop-types');

function LiniCord({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniCord';

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
    d: "M18.756 17.15c-0.193-0.197-0.51-0.2-0.707-0.007-1.222 1.198-2.838 1.857-4.549 1.857-3.426 0-6.241-2.664-6.483-6.030 2.239-0.257 3.983-2.164 3.983-4.47v-3.5h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2.5v-3.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v3.5h-3v-3.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v3.5h-2.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v3.5c0 2.318 1.761 4.231 4.015 4.474 0.113 1.825 0.877 3.525 2.182 4.829 1.417 1.417 3.3 2.197 5.303 2.197 1.975 0 3.839-0.761 5.249-2.143 0.197-0.193 0.2-0.51 0.007-0.707zM3 8.5v-3.5h7v3.5c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5z",
    fill: color
  })));
}

LiniCord.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCord;