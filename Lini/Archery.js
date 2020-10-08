var React = require('react');

var PropTypes = require('prop-types');

function LiniArchery({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniArchery';

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
    d: "M15.671 16.723c0.188-0.161 0.37-0.329 0.547-0.506 1.794-1.794 2.782-4.18 2.782-6.718 0-1.483-0.332-2.904-0.988-4.223-0.123-0.247-0.423-0.348-0.67-0.225s-0.348 0.423-0.225 0.67c0.586 1.179 0.883 2.45 0.883 3.778 0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5 3.813-8.5 8.5-8.5c1.327 0 2.598 0.297 3.777 0.883 0.247 0.123 0.547 0.022 0.67-0.225s0.022-0.547-0.225-0.67c-1.319-0.655-2.74-0.988-4.223-0.988-2.538 0-4.923 0.988-6.717 2.782s-2.783 4.18-2.783 6.717c0 2.538 0.988 4.923 2.783 6.717 0.177 0.177 0.359 0.345 0.547 0.506l-1.276 2.553c-0.123 0.247-0.023 0.547 0.224 0.671 0.072 0.036 0.148 0.053 0.223 0.053 0.183 0 0.36-0.101 0.448-0.277l1.19-2.38c1.567 1.076 3.42 1.656 5.363 1.656s3.796-0.58 5.363-1.656l1.19 2.38c0.088 0.175 0.264 0.277 0.448 0.277 0.075 0 0.151-0.017 0.223-0.053 0.247-0.123 0.347-0.424 0.224-0.671l-1.276-2.553z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 15c-3.033 0-5.5-2.467-5.5-5.5s2.467-5.5 5.5-5.5c0.765 0 1.505 0.154 2.2 0.458 0.253 0.111 0.369 0.405 0.258 0.658s-0.405 0.369-0.658 0.258c-0.568-0.248-1.174-0.374-1.8-0.374-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5c2.481 0 4.5-2.019 4.5-4.5 0-0.791-0.208-1.569-0.602-2.25-0.138-0.239-0.057-0.545 0.182-0.683s0.545-0.057 0.683 0.182c0.482 0.833 0.736 1.784 0.736 2.751 0 3.033-2.467 5.5-5.5 5.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 4h-1.5v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.768c-0.685 0.585-3.14 2.732-4.89 4.92-0.173 0.216-0.138 0.53 0.078 0.703 0.092 0.074 0.202 0.11 0.312 0.11 0.147 0 0.292-0.064 0.391-0.188 1.705-2.131 4.188-4.295 4.793-4.812h1.817c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 3h-2c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1.5h1.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 12c-1.378 0-2.5-1.122-2.5-2.5 0-1.141 0.771-2.137 1.875-2.421 0.268-0.069 0.54 0.092 0.609 0.36s-0.092 0.54-0.36 0.609c-0.662 0.17-1.125 0.768-1.125 1.453 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 1.378-1.122 2.5-2.5 2.5z",
    fill: color
  })));
}

LiniArchery.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniArchery;