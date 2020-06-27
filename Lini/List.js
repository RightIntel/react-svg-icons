import React from 'react';
import PropTypes from 'prop-types';
export default function LiniList({
  size,
  ...props
}) {
  let className = 'Component Lini LiniList';

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
    d: "M19.5 16h-15a.5.5 0 010-1h15a.5.5 0 010 1zM19.5 11h-15a.5.5 0 010-1h15a.5.5 0 010 1zM19.5 6h-15a.5.5 0 010-1h15a.5.5 0 010 1zM1.5 7C.673 7 0 6.327 0 5.5S.673 4 1.5 4 3 4.673 3 5.5 2.327 7 1.5 7zm0-2a.5.5 0 100 1 .5.5 0 000-1zM1.5 12C.673 12 0 11.327 0 10.5S.673 9 1.5 9 3 9.673 3 10.5 2.327 12 1.5 12zm0-2a.5.5 0 100 1 .5.5 0 000-1zM1.5 17C.673 17 0 16.327 0 15.5S.673 14 1.5 14s1.5.673 1.5 1.5S2.327 17 1.5 17zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  })));
}
LiniList.propTypes = {
  size: PropTypes.number.isRequired
};