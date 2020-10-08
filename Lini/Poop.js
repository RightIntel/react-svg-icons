var React = require('react');

var PropTypes = require('prop-types');

function LiniPoop({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniPoop';

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
    d: "M17.913 12.637c0.714-0.644 1.087-1.372 1.087-2.137 0-1.019-0.678-2.035-1.911-2.862-0.34-0.228-0.718-0.439-1.127-0.63 0.024-0.168 0.037-0.337 0.037-0.508 0-1.307-0.585-3.5-4.5-3.5-0.684 0-1.5-0.173-1.5-1 0-0.453 0.578-0.948 0.779-1.085 0.183-0.123 0.264-0.35 0.2-0.561s-0.258-0.354-0.478-0.354c-1.567 0-3.178 0.515-4.418 1.413-0.633 0.458-1.135 0.988-1.493 1.575-0.391 0.641-0.589 1.318-0.589 2.012 0 0.288 0.024 0.574 0.070 0.855-0.849 0.41-1.566 0.951-2.090 1.581-0.641 0.77-0.98 1.657-0.98 2.564 0 0.561 0.129 1.133 0.375 1.685-0.901 0.842-1.375 1.809-1.375 2.815 0 1.53 1.083 2.943 3.050 3.978 1.865 0.981 4.333 1.522 6.95 1.522 2.603 0 5.057-0.43 6.912-1.211 1.992-0.839 3.088-2.007 3.088-3.289 0-1.041-0.74-2.053-2.087-2.863zM16.523 17.868c-1.734 0.73-4.051 1.132-6.523 1.132-2.458 0-4.761-0.5-6.485-1.407-1.622-0.854-2.515-1.952-2.515-3.093 0-0.782 0.423-1.435 0.89-1.919 0.108 0.152 0.226 0.301 0.353 0.446 0.796 0.909 1.904 1.603 3.118 1.953 0.046 0.013 0.093 0.020 0.139 0.020 0.217 0 0.417-0.142 0.48-0.361 0.077-0.265-0.076-0.542-0.342-0.619-2.074-0.599-3.639-2.327-3.639-4.020 0-1.224 0.88-2.399 2.329-3.155 0.524 1.443 1.63 2.641 3.004 3.127 0.055 0.019 0.111 0.029 0.167 0.029 0.206 0 0.399-0.128 0.471-0.333 0.092-0.26-0.044-0.546-0.305-0.638-1.52-0.537-2.667-2.269-2.667-4.029 0-1.012 0.592-1.998 1.668-2.777 0.744-0.538 1.643-0.918 2.578-1.1-0.144 0.258-0.246 0.554-0.246 0.877 0 0.967 0.657 2 2.5 2 1.278 0 2.219 0.254 2.797 0.756 0.466 0.405 0.703 0.992 0.703 1.744 0 0.038-0.001 0.075-0.003 0.113-0.748-0.266-1.566-0.473-2.42-0.607-0.273-0.043-0.529 0.144-0.572 0.416s0.144 0.529 0.416 0.572c1.611 0.253 3.071 0.777 4.11 1.474 0.947 0.635 1.468 1.357 1.468 2.032 0 0.68-0.53 1.245-1.053 1.637-1.232-0.55-2.755-0.946-4.39-1.133-0.274-0.031-0.522 0.166-0.554 0.44s0.166 0.522 0.44 0.554c1.886 0.216 3.598 0.72 4.822 1.419 1.119 0.639 1.735 1.379 1.735 2.084 0 0.842-0.903 1.705-2.477 2.368z",
    fill: color
  })));
}

LiniPoop.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPoop;