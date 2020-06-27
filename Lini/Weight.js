import React from 'react';
import PropTypes from 'prop-types';
export default function LiniWeight({
  size,
  ...props
}) {
  let className = 'Component Lini LiniWeight';

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
    d: "M10 3.086V1.5a.5.5 0 00-1 0v1.586c-.582.206-1 .762-1 1.414C8 5.327 8.673 6 9.5 6S11 5.327 11 4.5c0-.652-.418-1.208-1-1.414zM9.5 5a.5.5 0 110-1 .5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 1h-4.175C11.552.375 10.569 0 9.5 0S7.448.375 6.675 1H2.5A2.503 2.503 0 000 3.5v14C0 18.878 1.122 20 2.5 20h14c1.378 0 2.5-1.122 2.5-2.5v-14C19 2.122 17.878 1 16.5 1zm-7 0a3.505 3.505 0 013.464 3H12.5a.5.5 0 000 1h.464A3.508 3.508 0 0110 7.964V7.5a.5.5 0 00-1 0v.464A3.508 3.508 0 016.036 5H6.5a.5.5 0 000-1h-.464A3.505 3.505 0 019.5 1zM18 17.5c0 .827-.673 1.5-1.5 1.5h-14c-.827 0-1.5-.673-1.5-1.5v-14C1 2.673 1.673 2 2.5 2h3.26A4.475 4.475 0 005 4.5C5 6.981 7.019 9 9.5 9S14 6.981 14 4.5c0-.924-.28-1.784-.76-2.5h3.26c.827 0 1.5.673 1.5 1.5v14z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 13h-4a.5.5 0 010-1h4a.5.5 0 010 1zM15.5 15h-4a.5.5 0 010-1h4a.5.5 0 010 1zM15.5 17h-4a.5.5 0 010-1h4a.5.5 0 010 1zM7.5 13h-4a.5.5 0 010-1h4a.5.5 0 010 1zM15.5 11h-3a.5.5 0 010-1h3a.5.5 0 010 1zM6.5 11h-3a.5.5 0 010-1h3a.5.5 0 010 1zM7.5 15h-4a.5.5 0 010-1h4a.5.5 0 010 1zM7.5 17h-4a.5.5 0 010-1h4a.5.5 0 010 1z"
  })));
}
LiniWeight.propTypes = {
  size: PropTypes.number.isRequired
};