import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPen({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPen';

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
    d: "M19.572.428c-.28-.28-.655-.421-1.117-.421-.753 0-1.765.394-3.021 1.174C15.032.756 14.267.104 13.303.026c-.769-.062-1.495.241-2.157.903C9.741 2.334 9.049 4.05 8.591 5.185c-.156.386-.349.866-.445.965-.033.033-.132.132-.304-.013a.5.5 0 00-.696.717c.082.082.293.241.562.316.108.03.216.045.322.045.127 0 .251-.022.369-.065l-.411.425C4.471 11.248.528 16.288.006 19.417a.497.497 0 00.576.575c1.308-.218 3.032-1.046 5.125-2.46 1.852-1.251 3.906-2.908 5.94-4.791 1.984-1.837 3.794-3.742 5.235-5.511 1.076-1.321 2.458-3.208 2.934-4.692.301-.939.219-1.649-.244-2.112zm-7.718 1.207c.45-.45.896-.651 1.365-.614.561.044 1.053.418 1.365.72a25.78 25.78 0 00-.763.552c-1.424 1.069-3.04 2.488-4.65 4.081.107-.218.216-.488.349-.816.427-1.06 1.073-2.662 2.334-3.923zM3.036 15.243l1.722 1.722c-1.365.892-2.584 1.526-3.57 1.847.322-.987.958-2.206 1.848-3.569zm7.933-3.234c-1.876 1.736-3.71 3.228-5.367 4.386L3.607 14.4c1.321-1.892 3.071-4.008 5.105-6.132 2.362-2.467 4.695-4.505 6.562-5.787l2.244 2.244c-1.431 2.086-3.786 4.726-6.549 7.284zm7.895-9.774c-.148.462-.418 1.013-.791 1.631l-1.941-1.941c.978-.591 1.78-.918 2.324-.918.281 0 .378.097.41.128.232.232.099.789-.001 1.1z"
  })));
}
LiniPen.propTypes = {
  size: PropTypes.number.isRequired
};