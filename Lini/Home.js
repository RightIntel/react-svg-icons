import React from 'react';
import PropTypes from 'prop-types';
export default function LiniHome({
  size,
  ...props
}) {
  let className = 'Component Lini LiniHome';

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
    d: "M19.871 12.165l-8.829-9.758A1.392 1.392 0 0010 1.937c-.397 0-.767.167-1.042.47L.129 12.165a.5.5 0 00.741.67l2.129-2.353V18.5c0 .827.673 1.5 1.5 1.5h11c.827 0 1.5-.673 1.5-1.5v-8.018l2.129 2.353a.499.499 0 10.741-.671zM12 19H8v-4.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V19zm4-.5a.5.5 0 01-.5.5H13v-4.5c0-.827-.673-1.5-1.5-1.5h-3c-.827 0-1.5.673-1.5 1.5V19H4.5a.5.5 0 01-.5-.5V9.377l5.7-6.3c.082-.091.189-.141.3-.141s.218.05.3.141l5.7 6.3V18.5z"
  })));
}
LiniHome.propTypes = {
  size: PropTypes.number.isRequired
};