var React = require('react');

var PropTypes = require('prop-types');

function LiniIceCream2({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniIceCream2';

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
    d: "M17 11.5c0-0.581-0.279-1.43-1.592-2.199 0.474-0.48 0.592-0.951 0.592-1.301 0-0.909-0.79-1.753-2.074-2.333 0.049-0.217 0.074-0.44 0.074-0.667 0-1.654-1.346-3-3-3-0.070 0-0.192-0.008-0.228-0.063-0.125-0.191-0.002-0.804 0.186-1.235 0.077-0.175 0.048-0.378-0.075-0.524s-0.318-0.209-0.504-0.163c-0.179 0.045-4.379 1.128-4.379 3.997 0 0.246 0.031 0.491 0.090 0.729-1.317 0.655-2.090 1.664-2.090 2.759 0 0.174 0.020 0.35 0.058 0.525-0.693 0.732-1.058 1.582-1.058 2.475 0 0.388 0.069 0.767 0.202 1.131l0.769 5.688c0.033 0.244 0.178 0.537 0.352 0.711 0.080 0.080 2.012 1.97 5.677 1.97s5.596-1.889 5.677-1.97c0.172-0.172 0.318-0.461 0.356-0.701l0.772-4.999c0.129-0.267 0.196-0.545 0.196-0.83zM4.503 9.050c0.134 0.203 0.294 0.401 0.478 0.588 0.614 0.624 1.463 1.102 2.392 1.345 0.042 0.011 0.085 0.016 0.127 0.016 0.222 0 0.424-0.149 0.483-0.373 0.070-0.267-0.090-0.54-0.357-0.61-0.757-0.199-1.443-0.582-1.932-1.079-0.448-0.455-0.694-0.966-0.694-1.437 0-0.692 0.547-1.361 1.485-1.839 0.061 0.095 0.127 0.188 0.198 0.277 0.441 0.546 1.051 0.92 1.719 1.053 0.033 0.007 0.066 0.010 0.098 0.010 0.234 0 0.443-0.165 0.49-0.403 0.054-0.271-0.122-0.534-0.393-0.588-0.911-0.181-1.598-1.040-1.598-1.997 0-1.433 1.684-2.319 2.756-2.738-0.062 0.406-0.050 0.858 0.179 1.209 0.154 0.236 0.464 0.517 1.066 0.517 1.103 0 2 0.897 2 2 0 0.106-0.008 0.211-0.025 0.314-0.434-0.131-0.904-0.235-1.402-0.309-0.273-0.040-0.527 0.149-0.568 0.422s0.149 0.527 0.422 0.568c2.207 0.325 3.573 1.294 3.573 2.005 0 0.331-0.301 0.628-0.573 0.828-0.82-0.325-1.791-0.563-2.864-0.7-0.274-0.035-0.524 0.159-0.559 0.433s0.159 0.524 0.433 0.559c2.602 0.332 4.563 1.355 4.563 2.38 0 0.58-0.637 1.186-1.747 1.662-1.261 0.541-2.949 0.838-4.753 0.838-1.505 0-2.913-0.386-3.965-1.088-0.99-0.66-1.535-1.517-1.535-2.412 0-0.503 0.172-0.995 0.503-1.45zM14.969 17.324c-0.030 0.029-0.462 0.438-1.263 0.84-0.76 0.382-2.020 0.837-3.707 0.837s-2.947-0.455-3.707-0.837c-0.798-0.401-1.229-0.808-1.262-0.839-0.024-0.028-0.063-0.106-0.069-0.139l-0.52-3.846c0.166 0.141 0.345 0.277 0.538 0.405 1.214 0.81 2.82 1.256 4.52 1.256 1.936 0 3.764-0.326 5.147-0.919 0.356-0.152 0.674-0.32 0.952-0.499l-0.555 3.594c-0.007 0.037-0.049 0.119-0.075 0.148z",
    fill: color
  })));
}

LiniIceCream2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniIceCream2;