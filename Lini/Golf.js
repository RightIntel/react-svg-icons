import React from 'react';
import PropTypes from 'prop-types';
export default function LiniGolf({
  size,
  ...props
}) {
  let className = 'Component Lini LiniGolf';

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
    d: "M7.5 16C5.019 16 3 13.981 3 11.5S5.019 7 7.5 7 12 9.019 12 11.5 9.981 16 7.5 16zm0-8C5.57 8 4 9.57 4 11.5S5.57 15 7.5 15s3.5-1.57 3.5-3.5S9.43 8 7.5 8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 20a.5.5 0 01-.5-.5c0-1.672-1.706-2.544-1.724-2.553a.5.5 0 01.447-.895c.064.032 1.126.576 1.776 1.661.651-1.085 1.712-1.629 1.776-1.661a.5.5 0 01.447.895c-.016.008-1.724.895-1.724 2.553a.5.5 0 01-.5.5zM7 9.5a.5.5 0 11-1 0 .5.5 0 011 0zM9 9.5a.5.5 0 11-1 0 .5.5 0 011 0zM6 11.5a.5.5 0 11-1 0 .5.5 0 011 0zM8 11.5a.5.5 0 11-1 0 .5.5 0 011 0zM10 11.5a.5.5 0 11-1 0 .5.5 0 011 0zM7 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM9 13.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.815 3.112a.5.5 0 00-.703.074l-3.291 4.06c-.249-.536-.757-1.101-1.536-1.709-.895-.699-2.149-1.451-3.628-2.172C7.853 1.996 4.843 1.002 3.5 1.002c-1.107 0-2.063.649-2.691 1.827C.287 3.807 0 5.111 0 6.502c0 1.673.801 2.872 2.318 3.466a.502.502 0 00.365-.931c-1.132-.443-1.682-1.272-1.682-2.534 0-2.236.859-4.5 2.5-4.5 1.17 0 4.121.993 6.718 2.262 3.53 1.724 4.782 3.091 4.782 3.738 0 .447-.191.831-2.536 1.001a.5.5 0 00.073.997c1.22-.089 1.962-.233 2.482-.481.279-.134.5-.304.66-.51l.004-.004 4.206-5.189a.5.5 0 00-.074-.703z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 4H3a.5.5 0 010-1h3a.5.5 0 010 1zM10.5 6h-8a.5.5 0 010-1h8a.5.5 0 010 1zM12.5 8H11a.5.5 0 010-1h1.5a.5.5 0 010 1zM4 8H2.5a.5.5 0 010-1H4a.5.5 0 010 1z"
  })));
}
LiniGolf.propTypes = {
  size: PropTypes.number.isRequired
};