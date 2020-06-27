import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBorderOuter({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBorderOuter';

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
    d: "M3 10h1v1H3v-1zM5 10h1v1H5v-1zM7 10h1v1H7v-1zM9 10h1v1H9v-1zM11 10h1v1h-1v-1zM13 10h1v1h-1v-1zM15 10h1v1h-1v-1zM9 16h1v1H9v-1zM9 14h1v1H9v-1zM9 12h1v1H9v-1zM9 8h1v1H9V8zM9 6h1v1H9V6zM9 4h1v1H9V4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 19h-14c-.827 0-1.5-.673-1.5-1.5v-14C1 2.673 1.673 2 2.5 2h14c.827 0 1.5.673 1.5 1.5v14c0 .827-.673 1.5-1.5 1.5zM2.5 3a.5.5 0 00-.5.5v14a.5.5 0 00.5.5h14a.5.5 0 00.5-.5v-14a.5.5 0 00-.5-.5h-14z"
  })));
}
LiniBorderOuter.propTypes = {
  size: PropTypes.number.isRequired
};