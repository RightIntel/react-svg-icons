import React from 'react';
import PropTypes from 'prop-types';
export default function LiniAlignCenterVertical({
  size,
  ...props
}) {
  let className = 'Component Lini LiniAlignCenterVertical';

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
    d: "M16.5 11H10V9h3.5c.827 0 1.5-.673 1.5-1.5v-4c0-.827-.673-1.5-1.5-1.5H10V.5a.5.5 0 00-1 0V2H5.5C4.673 2 4 2.673 4 3.5v4C4 8.327 4.673 9 5.5 9H9v2H2.5c-.827 0-1.5.673-1.5 1.5v4c0 .827.673 1.5 1.5 1.5H9v1.5a.5.5 0 001 0V18h6.5c.827 0 1.5-.673 1.5-1.5v-4c0-.827-.673-1.5-1.5-1.5zm-3-8a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H10V3h3.5zm-8 5a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5H9v5H5.5zm-3 9a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5H9v5H2.5zm14.5-.5a.5.5 0 01-.5.5H10v-5h6.5a.5.5 0 01.5.5v4z"
  })));
}
LiniAlignCenterVertical.propTypes = {
  size: PropTypes.number.isRequired
};