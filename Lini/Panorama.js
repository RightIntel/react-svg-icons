var React = require('react');

var PropTypes = require('prop-types');

function LiniPanorama({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniPanorama';

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
    d: "M15.5 8c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM15.5 6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M16.912 3.211c-1.854-0.781-4.309-1.211-6.912-1.211s-5.057 0.43-6.912 1.211c-1.992 0.839-3.088 2.007-3.088 3.289v8c0 1.283 1.097 2.451 3.088 3.289 1.854 0.781 4.309 1.211 6.912 1.211s5.057-0.43 6.912-1.211c1.992-0.839 3.088-2.007 3.088-3.289v-8c0-1.283-1.097-2.451-3.088-3.289zM3.477 4.132c1.734-0.73 4.051-1.132 6.523-1.132s4.789 0.402 6.523 1.132c1.574 0.663 2.477 1.526 2.477 2.368s-0.903 1.705-2.477 2.368c-0.443 0.187-0.925 0.352-1.437 0.494l-4.548-4.962c-0.274-0.299-0.655-0.467-1.045-0.459s-0.765 0.189-1.027 0.499l-1.799 2.122-0.129-0.146c-0.271-0.305-0.649-0.477-1.039-0.471s-0.763 0.187-1.025 0.499l-1.74 2.070c-1.111-0.601-1.734-1.314-1.734-2.013 0-0.842 0.903-1.705 2.477-2.368zM8.33 9.937c-1.744-0.132-3.352-0.472-4.656-0.989l1.565-1.861c0.076-0.091 0.173-0.141 0.274-0.143s0.199 0.047 0.278 0.135l2.54 2.858zM9.722 9.998l-2.384-2.682 1.891-2.23c0.078-0.092 0.179-0.144 0.283-0.146s0.208 0.046 0.289 0.135l4.171 4.551c-1.223 0.244-2.573 0.374-3.973 0.374-0.093 0-0.185-0.001-0.278-0.002zM16.523 16.868c-1.734 0.73-4.051 1.132-6.523 1.132s-4.789-0.402-6.523-1.132c-1.574-0.663-2.477-1.526-2.477-2.368v-1.987c0.41 0.382 0.94 0.732 1.58 1.045 1.524 0.745 3.615 1.239 5.886 1.391 0.011 0.001 0.023 0.001 0.034 0.001 0.261 0 0.481-0.203 0.498-0.467 0.018-0.276-0.19-0.514-0.466-0.532-2.145-0.143-4.103-0.602-5.514-1.291-1.302-0.636-2.019-1.404-2.019-2.16v-1.988c0.512 0.477 1.214 0.909 2.088 1.277 1.854 0.781 4.309 1.211 6.912 1.211s5.057-0.43 6.912-1.211c0.874-0.368 1.576-0.8 2.088-1.277v1.988c0 0.81-0.846 1.648-2.322 2.301-1.624 0.718-3.822 1.142-6.189 1.194-0.243 0.005-0.447 0.184-0.483 0.425s0.105 0.472 0.335 0.549l3 1.005c0.053 0.018 0.106 0.026 0.159 0.026 0.209 0 0.404-0.132 0.474-0.341 0.088-0.262-0.053-0.545-0.315-0.633l-0.667-0.224c1.538-0.209 2.943-0.579 4.091-1.087 0.795-0.352 1.439-0.759 1.917-1.205v1.99c0 0.842-0.903 1.705-2.476 2.368z"
  }, pathProps))));
}

LiniPanorama.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPanorama;