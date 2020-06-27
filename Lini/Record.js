import React from 'react';
import PropTypes from 'prop-types';
export default function LiniRecord({
  size,
  ...props
}) {
  let className = 'Component Lini LiniRecord';

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
    d: "M11.5 17a.5.5 0 000-1H8v-1.5a.5.5 0 01.5-.5h3a.5.5 0 000-1h-3c-.827 0-1.5.673-1.5 1.5v4c0 .827.673 1.5 1.5 1.5h3a.5.5 0 000-1h-3a.5.5 0 01-.5-.5V17h3.5zM18.5 20h-3c-.827 0-1.5-.673-1.5-1.5v-4c0-.827.673-1.5 1.5-1.5h3a.5.5 0 010 1h-3a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h3a.5.5 0 010 1zM4.884 19.18L3.067 17h.432c.827 0 1.5-.673 1.5-1.5v-1c0-.827-.673-1.5-1.5-1.5h-2c-.827 0-1.5.673-1.5 1.5v5a.5.5 0 001 0V17h.766l2.35 2.82a.498.498 0 00.704.064.5.5 0 00.064-.704zM1 14.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H1.998 1v-1.5zM9.5 10C7.019 10 5 7.981 5 5.5S7.019 1 9.5 1 14 3.019 14 5.5 11.981 10 9.5 10zm0-8C7.57 2 6 3.57 6 5.5S7.57 9 9.5 9 13 7.43 13 5.5 11.43 2 9.5 2z"
  })));
}
LiniRecord.propTypes = {
  size: PropTypes.number.isRequired
};