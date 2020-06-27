import React from 'react';
import PropTypes from 'prop-types';
export default function LiniEjectCircle({
  size,
  ...props
}) {
  let className = 'Component Lini LiniEjectCircle';

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
    d: "M9.5 20c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501c0-2.538.988-4.923 2.782-6.718S6.962 1 9.5 1c2.538 0 4.923.988 6.718 2.783S19 7.963 19 10.501s-.988 4.923-2.782 6.717A9.438 9.438 0 019.5 20zm0-18C4.813 2 1 5.813 1 10.5S4.813 19 9.5 19c4.687 0 8.5-3.813 8.5-8.5S14.187 2 9.5 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 15h-8a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v2a.5.5 0 01-.5.5zM6 14h7v-1H6v1zM13.501 11H5.5a.502.502 0 01-.416-.777l4-6a.501.501 0 01.832 0l3.987 5.981a.5.5 0 01-.403.797zm-7.067-1h6.131L9.499 5.401 6.433 10z"
  })));
}
LiniEjectCircle.propTypes = {
  size: PropTypes.number.isRequired
};