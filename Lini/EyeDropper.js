var React = require('react');

var PropTypes = require('prop-types');

function LiniEyeDropper({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniEyeDropper';

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
  }, /*#__PURE__*/React.createElement("path", _extends({
    d: "M19 3.975c0-0.795-0.309-1.542-0.871-2.104s-1.309-0.871-2.104-0.871c-0.795 0-1.542 0.309-2.104 0.871l-3.422 3.422-0.646-0.646c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l1.146 1.146-7.115 7.115c-0.389 0.389-0.619 0.904-0.658 1.443-0.872 0.216-1.52 1.004-1.52 1.942 0 1.103 0.897 2 2 2 0.937 0 1.726-0.648 1.942-1.52 0.539-0.039 1.055-0.269 1.443-0.658l7.115-7.115 1.146 1.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-0.646-0.646 3.422-3.422c0.562-0.562 0.871-1.309 0.871-2.104zM5.678 16.115c-0.287 0.287-0.698 0.42-1.099 0.355-0.147-0.024-0.296 0.019-0.408 0.117s-0.175 0.24-0.171 0.389c0 0.008 0 0.016 0 0.024 0 0.551-0.449 1-1 1s-1-0.449-1-1 0.449-1 1-1c0.008 0 0.016 0 0.024 0 0.148 0.003 0.291-0.059 0.388-0.171s0.14-0.261 0.117-0.408c-0.064-0.401 0.068-0.812 0.355-1.099l7.115-7.115 1.793 1.793-7.115 7.115zM17.422 5.371l-3.422 3.422-2.793-2.793 3.422-3.422c0.373-0.373 0.869-0.578 1.396-0.578s1.023 0.205 1.396 0.578 0.578 0.869 0.578 1.396-0.205 1.023-0.578 1.396z"
  }, pathProps))));
}

LiniEyeDropper.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniEyeDropper;