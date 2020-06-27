import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDiamond3({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDiamond3';

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
    d: "M18.9 7.2l-3-4a.498.498 0 00-.318-.193l-6-1a.501.501 0 00-.164 0l-6 1A.498.498 0 003.1 3.2l-3 4a.5.5 0 00.028.634l9 10a.502.502 0 00.744 0l9-10A.498.498 0 0018.9 7.2zM12.786 7L9.5 16.037 6.214 7h6.572zM6.707 6L9.5 3.207 12.293 6H6.707zm4.25-2.75l3.698.616-1.233 1.849-2.466-2.465zM5.578 5.715L4.345 3.866l3.698-.616-2.465 2.465zm-.908.441l-2.985.597 1.791-2.388L4.67 6.156zm.507.919l2.974 8.179-6.692-7.436 3.718-.744zm8.646 0l3.718.744-6.692 7.436 2.974-8.179zm.507-.919l1.194-1.791 1.791 2.388-2.985-.597z"
  })));
}
LiniDiamond3.propTypes = {
  size: PropTypes.number.isRequired
};