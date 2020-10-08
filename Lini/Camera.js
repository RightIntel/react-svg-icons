var React = require('react');

var PropTypes = require('prop-types');

function LiniCamera({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniCamera';

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
    d: "M19.131 17.053c-0 0-0 0-0 0-0.242-0-0.485-0.097-0.724-0.288l-3.438-2.751c-0.552-0.442-0.969-1.308-0.969-2.015v-3c0-0.707 0.416-1.573 0.969-2.015l3.438-2.751c0.239-0.191 0.482-0.288 0.724-0.288 0.433-0 0.869 0.326 0.869 1.053v11c0 0.278-0.064 0.512-0.19 0.694-0.157 0.228-0.405 0.359-0.679 0.359zM19 5.040l-3.407 2.725c-0.31 0.248-0.593 0.837-0.593 1.234v3c0 0.398 0.283 0.986 0.593 1.234l3.407 2.725v-10.919z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 17h-10c-0.827 0-1.5-0.673-1.5-1.5v-10c0-0.827 0.673-1.5 1.5-1.5h10c0.827 0 1.5 0.673 1.5 1.5v10c0 0.827-0.673 1.5-1.5 1.5zM1.5 5c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5h10c0.276 0 0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5h-10z",
    fill: color
  })));
}

LiniCamera.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCamera;