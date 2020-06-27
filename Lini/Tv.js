import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTv({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTv';

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
    d: "M18.5 5h-7.185l3.517-3.126a.5.5 0 00-.664-.748l-4.174 3.71L6.825 2.12a.5.5 0 00-.651.759l2.474 2.12H1.5c-.827 0-1.5.673-1.5 1.5v12c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-12c0-.827-.673-1.5-1.5-1.5zm.5 13.5a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-12a.5.5 0 01.5-.5h17a.5.5 0 01.5.5v12z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 18h-9c-.827 0-1.5-.673-1.5-1.5v-8C2 7.673 2.673 7 3.5 7h9c.827 0 1.5.673 1.5 1.5v8c0 .827-.673 1.5-1.5 1.5zm-9-10a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-9zM16.5 11c-.827 0-1.5-.673-1.5-1.5S15.673 8 16.5 8s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1zM16.5 15c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  })));
}
LiniTv.propTypes = {
  size: PropTypes.number.isRequired
};