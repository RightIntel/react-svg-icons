var React = require('react');

var PropTypes = require('prop-types');

function LiniEnterUp({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniEnterUp';

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
    d: "M12.854 9.354c-0.195 0.195-0.512 0.195-0.707 0l-2.146-2.146v12.293c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-12.293l-2.146 2.146c-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707l3-3c0.098-0.098 0.226-0.146 0.354-0.146s0.256 0.049 0.354 0.146l3 3c0.195 0.195 0.195 0.512 0 0.707z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M15.5 1h-12c-0.827 0-1.5 0.673-1.5 1.5v10c0 0.827 0.673 1.5 1.5 1.5h4c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-4c-0.276 0-0.5-0.224-0.5-0.5v-10c0-0.276 0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5v10c0 0.276-0.224 0.5-0.5 0.5h-4c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4c0.827 0 1.5-0.673 1.5-1.5v-10c0-0.827-0.673-1.5-1.5-1.5z"
  }, pathProps))));
}

LiniEnterUp.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniEnterUp;