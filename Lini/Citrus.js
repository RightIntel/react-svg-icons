import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCitrus({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCitrus';

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
    d: "M19.176 4.517A11.192 11.192 0 0016.705.795a.5.5 0 00-.708 0L.794 15.998a.5.5 0 000 .708 11.204 11.204 0 007.955 3.295 11.204 11.204 0 007.955-3.295 11.204 11.204 0 003.295-7.955c0-1.461-.277-2.885-.824-4.233zM6.833 11.374c.356.261.754.439 1.167.537v4.046a7.218 7.218 0 01-4.011-1.74l2.843-2.843zm3.821-3.821a2.254 2.254 0 01-.313 2.788 2.252 2.252 0 01-2.788.313l3.102-3.102zM9 11.989a3.239 3.239 0 001.667-.614l2.843 2.843a7.219 7.219 0 01-4.511 1.774v-4.003zm5.218 1.522l-2.843-2.843a3.233 3.233 0 00.614-1.667h4.007a7.19 7.19 0 01-1.777 4.511zM11.911 8a3.215 3.215 0 00-.537-1.167l2.843-2.843a7.185 7.185 0 011.744 4.011h-4.05zm4.087 7.998A10.183 10.183 0 018.75 19c-2.571 0-4.997-.94-6.886-2.657l1.417-1.417A8.187 8.187 0 008.75 17c2.204 0 4.275-.858 5.834-2.416A8.192 8.192 0 0016.996 8.5v-.002a8.182 8.182 0 00-2.07-5.218l1.417-1.417A10.176 10.176 0 0119 8.749c0 2.738-1.066 5.312-3.002 7.248z"
  })));
}
LiniCitrus.propTypes = {
  size: PropTypes.number.isRequired
};