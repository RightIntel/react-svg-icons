var React = require('react');

var PropTypes = require('prop-types');

function LiniExitDown({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniExitDown';

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
    d: "M15.5 0h-12c-0.827 0-1.5 0.673-1.5 1.5v10c0 0.827 0.673 1.5 1.5 1.5h4c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-4c-0.276 0-0.5-0.224-0.5-0.5v-10c0-0.276 0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5v10c0 0.276-0.224 0.5-0.5 0.5h-4c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4c0.827 0 1.5-0.673 1.5-1.5v-10c0-0.827-0.673-1.5-1.5-1.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M12.853 16.354l-3 3c-0.195 0.195-0.512 0.195-0.707 0l-3-3c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2.147 2.146v-11.293c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v11.293l2.147-2.146c0.098-0.098 0.226-0.146 0.353-0.146s0.256 0.049 0.353 0.146c0.195 0.195 0.195 0.512 0 0.707z"
  }, pathProps))));
}

LiniExitDown.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniExitDown;