import React from 'react';
import PropTypes from 'prop-types';
export default function LiniConvex({
  size,
  ...props
}) {
  let className = 'Component Lini LiniConvex';

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
    d: "M9.5 18c-3.514 0-7.923-.971-8.108-1.012a.499.499 0 01-.372-.351C.978 16.491.001 13.04.001 10.5S.979 4.508 1.02 4.363a.5.5 0 01.372-.351C1.578 3.971 5.986 3 9.5 3s7.923.971 8.108 1.012c.179.04.322.174.372.351.042.146 1.019 3.597 1.019 6.137s-.978 5.992-1.019 6.137a.5.5 0 01-.372.351C17.422 17.029 13.014 18 9.5 18zm-7.598-1.926C2.951 16.291 6.603 17 9.5 17c2.899 0 6.549-.709 7.598-.926.233-.879.902-3.581.902-5.574s-.67-4.696-.902-5.574C16.049 4.709 12.397 4 9.5 4c-2.899 0-6.549.709-7.598.926C1.669 5.805 1 8.507 1 10.5s.67 4.696.902 5.574z"
  })));
}
LiniConvex.propTypes = {
  size: PropTypes.number.isRequired
};