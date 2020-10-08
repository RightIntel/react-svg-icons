var React = require('react');

var PropTypes = require('prop-types');

function LiniLayersCrossed({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniLayersCrossed';

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
    d: "M19.306 13.039l-9.306 3.918-5.562-2.342 1.487-1.289 3.881 1.634c0.062 0.026 0.128 0.039 0.194 0.039s0.132-0.013 0.194-0.039l9.5-4c0.254-0.107 0.374-0.4 0.267-0.655s-0.4-0.374-0.655-0.267l-9.306 3.918-3.232-1.361 1.487-1.289 1.551 0.653c0.062 0.026 0.128 0.039 0.194 0.039s0.132-0.013 0.194-0.039l9.5-4c0.185-0.078 0.306-0.26 0.306-0.461s-0.121-0.383-0.306-0.461l-4.384-1.846 1.518-1.315c0.209-0.181 0.231-0.497 0.050-0.705s-0.497-0.231-0.705-0.050l-1.89 1.638-4.088-1.721c-0.124-0.052-0.264-0.052-0.388 0l-9.5 4c-0.185 0.078-0.306 0.26-0.306 0.461s0.121 0.383 0.306 0.461l6.921 2.914-1.487 1.289-5.046-2.125c-0.255-0.107-0.548 0.012-0.655 0.267s0.012 0.548 0.267 0.655l4.591 1.933-1.487 1.289-2.716-1.144c-0.255-0.107-0.548 0.012-0.655 0.267s0.012 0.548 0.267 0.655l2.262 0.952-1.395 1.209c-0.209 0.181-0.231 0.497-0.050 0.705 0.099 0.114 0.238 0.173 0.378 0.173 0.116 0 0.233-0.040 0.327-0.122l1.768-1.532 6.211 2.615c0.062 0.026 0.128 0.039 0.194 0.039s0.132-0.013 0.194-0.039l9.5-4c0.254-0.107 0.374-0.4 0.267-0.655s-0.4-0.374-0.655-0.267zM18.212 7.5l-8.212 3.457-0.903-0.38 5.37-4.654 3.744 1.577zM1.788 7.5l8.212-3.457 3.44 1.448-5.37 4.654-6.281-2.645z"
  }, pathProps))));
}

LiniLayersCrossed.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniLayersCrossed;