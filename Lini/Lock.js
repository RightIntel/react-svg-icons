import React from 'react';
import PropTypes from 'prop-types';
export default function LiniLock({
  size,
  ...props
}) {
  let className = 'Component Lini LiniLock';

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
    d: "M14.5 8H14V6.5C14 4.019 11.981 2 9.5 2S5 4.019 5 6.5V8h-.5C3.673 8 3 8.673 3 9.5v8c0 .827.673 1.5 1.5 1.5h10c.827 0 1.5-.673 1.5-1.5v-8c0-.827-.673-1.5-1.5-1.5zM6 6.5C6 4.57 7.57 3 9.5 3S13 4.57 13 6.5V8H6V6.5zm9 11a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v8z"
  })));
}
LiniLock.propTypes = {
  size: PropTypes.number.isRequired
};