var React = require('react');

var PropTypes = require('prop-types');

function LiniPresentation({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniPresentation';

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
    d: "M18.5 0h-18c-0.276 0-0.5 0.224-0.5 0.5v15c0 0.276 0.224 0.5 0.5 0.5h7.793l-3.146 3.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l3.146-3.146v2.793c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-2.793l3.146 3.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-3.146-3.146h7.793c0.276 0 0.5-0.224 0.5-0.5v-15c0-0.276-0.224-0.5-0.5-0.5zM1 1h17v12h-17v-12zM18 15h-17v-1h17v1z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M12.787 6.59l-5-3.5c-0.153-0.107-0.352-0.12-0.518-0.034s-0.269 0.257-0.269 0.443v7c0 0.186 0.104 0.357 0.269 0.443 0.073 0.038 0.152 0.057 0.231 0.057 0.101 0 0.201-0.030 0.287-0.090l5-3.5c0.134-0.094 0.213-0.246 0.213-0.41s-0.080-0.316-0.213-0.41zM8 9.54v-5.079l3.628 2.54-3.628 2.54z"
  }, pathProps))));
}

LiniPresentation.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPresentation;