import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCloudDatabase({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCloudDatabase';

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
    d: "M16 16h-1.5a.5.5 0 010-1H16c1.654 0 3-1.346 3-3a3.004 3.004 0 00-4-2.83.5.5 0 01-.533-.811A2.002 2.002 0 0013 5a2.001 2.001 0 00-1.996 1.875.5.5 0 01-.908.256A5.012 5.012 0 006 5c-2.757 0-5 2.243-5 5a4.973 4.973 0 004.544 4.98.5.5 0 01-.09.996 5.982 5.982 0 01-3.874-1.917A5.983 5.983 0 010 10.001c0-3.308 2.692-6 6-6a6.01 6.01 0 014.261 1.776A3.007 3.007 0 0113 4.001a3.004 3.004 0 012.828 4.004A4.004 4.004 0 0120 12.001c0 2.206-1.794 4-4 4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.953 9.329C11.423 9.117 10.729 9 10 9s-1.424.117-1.953.329C7.136 9.693 7 10.219 7 10.5v4c0 .281.136.807 1.047 1.171.53.212 1.224.329 1.953.329s1.424-.117 1.953-.329c.911-.364 1.047-.89 1.047-1.171v-4c0-.281-.136-.807-1.047-1.171zM12 12.481c-.087.155-.779.519-2 .519s-1.913-.364-2-.519v-.829l.047.019c.53.212 1.224.329 1.953.329s1.424-.117 1.953-.329l.047-.019v.829zM10 10c1.174 0 1.859.336 1.988.5-.129.164-.814.5-1.988.5s-1.859-.336-1.987-.5c.129-.164.814-.5 1.987-.5zm0 5c-1.219 0-1.911-.363-2-.518v-.83l.047.019c.53.212 1.224.329 1.953.329s1.424-.117 1.953-.329l.047-.019v.83c-.089.155-.781.518-2 .518z"
  })));
}
LiniCloudDatabase.propTypes = {
  size: PropTypes.number.isRequired
};