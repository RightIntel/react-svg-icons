var React = require('react');

var PropTypes = require('prop-types');

function LiniPushpin2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniPushpin2';

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
    d: "M14 4.5c0-2.481-2.019-4.5-4.5-4.5s-4.5 2.019-4.5 4.5c0 1.956 1.254 3.623 3 4.243v10.757c0 0.22 0.144 0.415 0.355 0.479 0.048 0.014 0.097 0.022 0.145 0.022 0.164 0 0.322-0.081 0.416-0.223l2-3c0.055-0.082 0.084-0.179 0.084-0.277v-7.757c1.746-0.619 3-2.287 3-4.243zM10 16.349l-1 1.5v-8.877c0.164 0.018 0.331 0.028 0.5 0.028s0.336-0.010 0.5-0.028v7.377zM9.5 8c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M7.5 5c-0.276 0-0.5-0.224-0.5-0.5 0-1.378 1.122-2.5 2.5-2.5 0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.827 0-1.5 0.673-1.5 1.5 0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniPushpin2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPushpin2;