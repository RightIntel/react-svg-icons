import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCloudLock({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCloudLock';

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
    d: "M16 16h-.5a.5.5 0 010-1h.5c1.654 0 3-1.346 3-3a3.004 3.004 0 00-4-2.83.5.5 0 01-.533-.811A2.002 2.002 0 0013 5a2.001 2.001 0 00-1.996 1.875.5.5 0 01-.908.256A5.012 5.012 0 006 5c-2.757 0-5 2.243-5 5a4.973 4.973 0 004.545 4.98.5.5 0 01-.09.996 5.985 5.985 0 01-3.875-1.917 5.984 5.984 0 01-1.581-4.058c0-3.308 2.692-6 6-6a6.01 6.01 0 014.261 1.776 3.007 3.007 0 012.739-1.776 3.004 3.004 0 012.828 4.004 4.004 4.004 0 014.172 3.996c0 2.206-1.794 4-4 4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 12.086V11.5c0-1.378-1.122-2.5-2.5-2.5S8 10.122 8 11.5v.586c-.582.206-1 .762-1 1.414v3c0 .827.673 1.5 1.5 1.5h4c.827 0 1.5-.673 1.5-1.5v-3c0-.652-.418-1.208-1-1.414zM10.5 10c.827 0 1.5.673 1.5 1.5v.5H9v-.5c0-.827.673-1.5 1.5-1.5zm2.5 6.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v3z"
  })));
}
LiniCloudLock.propTypes = {
  size: PropTypes.number.isRequired
};