import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCashDollar({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCashDollar';

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
    d: "M18.5 18H.5a.5.5 0 01-.5-.5v-10A.5.5 0 01.5 7h18a.5.5 0 01.5.5v10a.5.5 0 01-.5.5zM1 17h17V8H1v9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 12H8v-1h3.5a.5.5 0 000-1H10v-.5a.5.5 0 00-1 0v.5H7.5a.5.5 0 00-.5.5v2a.5.5 0 00.5.5H11v1H7.5a.5.5 0 000 1H9v.5a.5.5 0 001 0V15h1.5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5zM17.5 6h-16a.5.5 0 010-1h16a.5.5 0 010 1zM16.5 4h-14a.5.5 0 010-1h14a.5.5 0 010 1z"
  })));
}
LiniCashDollar.propTypes = {
  size: PropTypes.number.isRequired
};