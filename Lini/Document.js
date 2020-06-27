import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDocument({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDocument';

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
    d: "M16.5 20h-13c-.827 0-1.5-.673-1.5-1.5v-16C2 1.673 2.673 1 3.5 1h13c.827 0 1.5.673 1.5 1.5v16c0 .827-.673 1.5-1.5 1.5zM3.5 2a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-16a.5.5 0 00-.5-.5h-13z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 5h-7a.5.5 0 010-1h7a.5.5 0 010 1zM14.5 7h-9a.5.5 0 010-1h9a.5.5 0 010 1zM14.5 9h-9a.5.5 0 010-1h9a.5.5 0 010 1zM10.5 11h-5a.5.5 0 010-1h5a.5.5 0 010 1zM14.5 15h-9a.5.5 0 010-1h9a.5.5 0 010 1zM12.5 17h-7a.5.5 0 010-1h7a.5.5 0 010 1z"
  })));
}
LiniDocument.propTypes = {
  size: PropTypes.number.isRequired
};