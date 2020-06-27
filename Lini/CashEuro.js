import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCashEuro({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCashEuro';

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
    d: "M18.5 18H.5a.5.5 0 01-.5-.5v-10A.5.5 0 01.5 7h18a.5.5 0 01.5.5v10a.5.5 0 01-.5.5zM1 17h17V8H1v9zM17.5 6h-16a.5.5 0 010-1h16a.5.5 0 010 1zM16.5 4h-14a.5.5 0 010-1h14a.5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.75 14.067a.5.5 0 00-.683.182c-.252.435-.854.75-1.433.75-.682 0-1.297-.43-1.533-1H9.5a.5.5 0 000-1H8v-1h1.5a.5.5 0 000-1H8.101c.235-.57.851-1 1.533-1 .579 0 1.182.316 1.433.75a.499.499 0 10.865-.501c-.426-.736-1.371-1.249-2.299-1.249a2.73 2.73 0 00-1.819.717 2.472 2.472 0 00-.76 1.283h-.555a.5.5 0 000 1h.5v1h-.5a.5.5 0 000 1h.555c.107.48.368.924.76 1.283a2.73 2.73 0 001.819.717c.928 0 1.873-.514 2.299-1.25a.5.5 0 00-.182-.683z"
  })));
}
LiniCashEuro.propTypes = {
  size: PropTypes.number.isRequired
};