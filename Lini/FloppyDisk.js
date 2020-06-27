import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFloppyDisk({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFloppyDisk';

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
    d: "M13.5 6h-2a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v3a.5.5 0 01-.5.5zM12 5h1V3h-1v2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.854 2.646l-2.5-2.5A.5.5 0 0017 0H.5a.5.5 0 00-.5.5v19a.5.5 0 00.5.5h19a.5.5 0 00.5-.5V3a.504.504 0 00-.146-.354zM6 1h9v6H6V1zm10 18H4v-8h12v8zm3 0h-2v-8.5a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5V19H1V1h4v6.5a.5.5 0 00.5.5h10a.5.5 0 00.5-.5V1h.793L19 3.207V19z"
  })));
}
LiniFloppyDisk.propTypes = {
  size: PropTypes.number.isRequired
};