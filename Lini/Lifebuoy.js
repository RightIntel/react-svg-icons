var React = require('react');

var PropTypes = require('prop-types');

function LiniLifebuoy({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniLifebuoy';

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
    d: "M17.071 2.929c-1.889-1.889-4.4-2.929-7.071-2.929s-5.182 1.040-7.071 2.929c-1.889 1.889-2.929 4.4-2.929 7.071s1.040 5.182 2.929 7.071c1.889 1.889 4.4 2.929 7.071 2.929s5.182-1.040 7.071-2.929c1.889-1.889 2.929-4.4 2.929-7.071s-1.040-5.182-2.929-7.071zM10 15c-2.757 0-5-2.243-5-5s2.243-5 5-5c2.757 0 5 2.243 5 5s-2.243 5-5 5zM1 10c0-0.338 0.019-0.672 0.056-1h3.028c-0.055 0.325-0.084 0.659-0.084 1s0.029 0.675 0.084 1l-3.028-0c-0.036-0.328-0.056-0.662-0.056-1zM15.916 9h3.028c0.036 0.328 0.056 0.662 0.056 1s-0.019 0.672-0.056 1h-3.028c0.055-0.325 0.084-0.659 0.084-1s-0.029-0.675-0.084-1zM18.776 8h-3.119c-0.604-1.702-1.955-3.053-3.657-3.657l0-3.119c3.36 0.765 6.010 3.416 6.776 6.776zM11 1.056l-0 3.028c-0.325-0.055-0.659-0.084-1-0.084s-0.675 0.029-1 0.084v-3.028c0.328-0.036 0.662-0.056 1-0.056s0.672 0.019 1 0.056zM8 1.224v3.119c-1.702 0.604-3.053 1.955-3.657 3.657h-3.119c0.765-3.36 3.416-6.010 6.776-6.776zM1.224 12l3.119 0c0.604 1.702 1.955 3.053 3.657 3.657v3.119c-3.36-0.765-6.010-3.416-6.776-6.776zM9 18.944v-3.028c0.325 0.055 0.659 0.084 1 0.084s0.675-0.029 1-0.084v3.028c-0.328 0.037-0.662 0.056-1 0.056s-0.672-0.019-1-0.056zM12 18.776v-3.119c1.702-0.604 3.053-1.955 3.657-3.657h3.119c-0.765 3.36-3.416 6.010-6.776 6.776z"
  }, pathProps))));
}

LiniLifebuoy.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniLifebuoy;