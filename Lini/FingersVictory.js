var React = require('react');

var PropTypes = require('prop-types');

function LiniFingersVictory({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniFingersVictory';

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
    d: "M16.646 0.887c-0.297-0.444-0.749-0.745-1.273-0.847-1.076-0.209-2.143 0.492-2.377 1.563l-1.116 5.103-1.949-5.365c-0.375-1.032-1.525-1.581-2.563-1.224s-1.608 1.498-1.272 2.542l1.418 4.407c-0.164-0.044-0.336-0.067-0.514-0.067-0.871 0-1.614 0.56-1.887 1.339-0.318-0.214-0.701-0.339-1.113-0.339-1.103 0-2 0.897-2 2v2c0 1.165 0.326 3.153 1.244 4.918 0.473 0.91 1.040 1.634 1.685 2.151 0.769 0.617 1.634 0.93 2.571 0.93h4c2.788 0 4.5-3.203 4.5-5.5 0-1.781-0.088-2.706-0.159-3.449-0.049-0.511-0.091-0.953-0.091-1.551 0-0.698 0.714-4.637 1.195-7.116 0.105-0.522-0.001-1.054-0.298-1.497zM7 8c0.551 0 1 0.449 1 1v1.363l-1.487-0.303c-0.17-0.044-0.342-0.065-0.513-0.064v-0.996c0-0.551 0.449-1 1-1zM3 10c0-0.551 0.449-1 1-1s1 0.449 1 1v0.271c-0.457 0.268-0.783 0.696-0.921 1.208-0.135 0.505-0.070 1.031 0.183 1.487-0.085 0.023-0.173 0.035-0.262 0.035-0.551 0-1-0.449-1-1v-2zM14.025 17.467c-0.481 0.699-1.309 1.533-2.525 1.533h-4c-2.35 0-3.782-2.76-4.29-5.163 0.243 0.105 0.509 0.163 0.79 0.163 0.358 0 0.705-0.096 1.008-0.273 0.15 0.087 0.312 0.154 0.483 0.2l3.877 1.055c0.044 0.012 0.088 0.018 0.132 0.018 0.22 0 0.422-0.146 0.482-0.369 0.072-0.266-0.085-0.541-0.351-0.614l-3.879-1.056c-0.153-0.041-0.291-0.116-0.406-0.218-0.004-0.003-0.007-0.007-0.011-0.010-0.074-0.068-0.139-0.148-0.19-0.238-0.134-0.231-0.169-0.501-0.1-0.759s0.235-0.474 0.466-0.607c0.231-0.133 0.501-0.169 0.759-0.1 0.010 0.003 0.020 0.005 0.030 0.007l2.098 0.427c0.001 0 0.002 0 0.003 0.001l3 0.611c0.794 0.162 1.702 0.38 2.424 0.771 0.791 0.428 1.176 0.969 1.176 1.654 0 0.956-0.373 2.092-0.975 2.967zM15.964 2.189c-0 0.001-0.001 0.002-0.001 0.004-0.124 0.641-1.213 6.289-1.213 7.307 0 0.645 0.044 1.109 0.095 1.645 0.033 0.349 0.070 0.739 0.1 1.245-0.19-0.152-0.404-0.293-0.645-0.423-0.837-0.454-1.835-0.695-2.701-0.871l-2.6-0.529v-1.816c0-0.313-0.403-1.58-0.483-1.831l-1.468-4.565c-0.171-0.53 0.119-1.109 0.646-1.29s1.108 0.097 1.298 0.619l2.538 6.988c0.076 0.209 0.281 0.343 0.503 0.328s0.408-0.175 0.455-0.392l1.485-6.79c0.119-0.545 0.662-0.902 1.209-0.795 0.26 0.051 0.485 0.2 0.633 0.421s0.201 0.486 0.149 0.746z",
    fill: color
  })));
}

LiniFingersVictory.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFingersVictory;