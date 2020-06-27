import React from 'react';
import PropTypes from 'prop-types';
export default function LiniLollipop({
  size,
  ...props
}) {
  let className = 'Component Lini LiniLollipop';

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
    d: "M9.5 20a.5.5 0 01-.5-.5v-6.519A6.509 6.509 0 013 6.5C3 2.916 5.916 0 9.5 0S16 2.916 16 6.5a6.509 6.509 0 01-6 6.481V19.5a.5.5 0 01-.5.5zm0-15C7.57 5 6 6.57 6 8.5S7.57 12 9.5 12c3.033 0 5.5-2.467 5.5-5.5S12.533 1 9.5 1 4 3.467 4 6.5c0 1.325.471 2.542 1.255 3.493A4.505 4.505 0 019.5 4c1.654 0 3 1.346 3 3s-1.346 3-3 3C8.673 10 8 9.327 8 8.5S8.673 7 9.5 7a.5.5 0 010 1 .5.5 0 000 1c1.103 0 2-.897 2-2s-.897-2-2-2z"
  })));
}
LiniLollipop.propTypes = {
  size: PropTypes.number.isRequired
};