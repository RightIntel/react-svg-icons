function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniNotification({
  size,
  ...props
}) {
  let className = 'Component Lini LiniNotification';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.5 19.671a.499.499 0 01-.294-.096l-2.148-1.561H4.403a.5.5 0 01-.476-.346l-.82-2.525-2.148-1.561a.5.5 0 01-.182-.559l.82-2.525-.82-2.525a.499.499 0 01.182-.559l2.148-1.56.82-2.525a.5.5 0 01.476-.346h2.655l2.148-1.56a.501.501 0 01.588 0l2.148 1.56h2.655a.5.5 0 01.476.346l.82 2.525 2.148 1.56a.5.5 0 01.182.559l-.82 2.525.82 2.525a.499.499 0 01-.182.559l-2.148 1.561-.82 2.525a.5.5 0 01-.476.346h-2.655l-2.148 1.561a.498.498 0 01-.294.095zm-4.733-2.656h2.454c.106 0 .208.033.294.096L9.5 18.553l1.985-1.442a.5.5 0 01.294-.096h2.454l.758-2.334a.501.501 0 01.182-.25l1.985-1.442-.758-2.334a.495.495 0 010-.309l.758-2.334-1.985-1.442a.507.507 0 01-.182-.25l-.758-2.334h-2.454a.495.495 0 01-.294-.096L9.5 2.448 7.515 3.89a.5.5 0 01-.294.096H4.767L4.009 6.32a.501.501 0 01-.182.25L1.842 8.012l.758 2.334c.033.1.033.209 0 .309l-.758 2.334 1.985 1.442c.085.062.149.15.182.25l.758 2.334z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 12a.5.5 0 01-.5-.5v-5a.5.5 0 011 0v5a.5.5 0 01-.5.5zM9.5 15a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5z"
  })));
}
LiniNotification.propTypes = {
  size: PropTypes.number.isRequired
};