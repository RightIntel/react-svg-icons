var React = require('react');

var PropTypes = require('prop-types');

function LiniBaseballBat({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniBaseballBat';

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
    d: "M16.753 19.445c-0 0-0 0-0 0-0.332-0-0.636-0.121-0.856-0.342-0.236-0.236-0.377-0.545-0.396-0.868-0.020-0.341 0.102-0.669 0.333-0.901 0.009-0.009 0.022-0.050 0.011-0.124-0.019-0.12-0.091-0.25-0.198-0.357l-2.5-2.5c-1.119-1.119-2.397-1.516-3.749-1.936-1.56-0.485-3.173-0.986-4.751-2.564l-3.597-3.597c-1.365-1.365-1.365-3.585 0-4.95l0.257-0.257c0.659-0.659 1.538-1.021 2.475-1.021s1.816 0.363 2.475 1.022l3.597 3.597c1.557 1.557 2.193 3.021 2.808 4.437 0.542 1.247 1.053 2.425 2.192 3.563l2.5 2.5c0.15 0.15 0.314 0.203 0.41 0.203 0.044 0 0.065-0.010 0.071-0.015 0.216-0.216 0.51-0.336 0.827-0.336 0.346 0 0.689 0.145 0.942 0.398 0.505 0.505 0.44 1.392-0.145 1.977l-1.586 1.586c-0.309 0.309-0.718 0.486-1.12 0.486zM3.781 1.028c-0.67 0-1.298 0.259-1.768 0.729l-0.257 0.257c-0.975 0.975-0.975 2.561 0 3.536l3.597 3.597c1.403 1.403 2.896 1.867 4.34 2.316 1.409 0.438 2.867 0.891 4.16 2.184l2.5 2.5c0.257 0.257 0.427 0.579 0.479 0.908 0.060 0.382-0.046 0.741-0.292 0.987-0.069 0.069-0.057 0.236 0.063 0.355 0.041 0.040 0.103 0.049 0.149 0.049 0.138 0 0.292-0.072 0.413-0.194l1.586-1.586c0.107-0.107 0.176-0.241 0.191-0.368 0.005-0.040 0.009-0.139-0.046-0.195-0.067-0.067-0.153-0.105-0.235-0.105-0.035 0-0.085 0.007-0.12 0.043-0.199 0.199-0.475 0.308-0.778 0.308-0.395 0-0.802-0.181-1.117-0.496l-2.5-2.5c-1.273-1.273-1.847-2.594-2.402-3.872-0.578-1.33-1.175-2.705-2.598-4.128l-3.597-3.597c-0.47-0.47-1.098-0.729-1.768-0.729z"
  }, pathProps))));
}

LiniBaseballBat.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBaseballBat;