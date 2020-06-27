import React from 'react';
import PropTypes from 'prop-types';
export default function LiniUnlink2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniUnlink2';

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
    d: "M13.5 11.5a.5.5 0 01-.354-.853l3.068-3.068c.507-.507.786-1.18.786-1.896s-.279-1.39-.786-1.896a2.685 2.685 0 00-3.793 0L9.353 6.855a.5.5 0 01-.707-.707l3.068-3.068a3.685 3.685 0 015.207 0c.695.695 1.078 1.62 1.078 2.604s-.383 1.908-1.078 2.604l-3.068 3.068a.5.5 0 01-.354.147zM4.682 19a3.662 3.662 0 01-2.604-1.078 3.685 3.685 0 010-5.207l3.068-3.068a.5.5 0 01.707.707l-3.068 3.068a2.685 2.685 0 001.896 4.579c.716 0 1.39-.279 1.896-.786l3.068-3.068a.5.5 0 01.707.707l-3.068 3.068A3.659 3.659 0 014.68 19zM5.5 7a.502.502 0 01-.354-.146l-2-2a.5.5 0 01.707-.707l2 2A.5.5 0 015.499 7zM7.5 6a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM4.5 9h-3a.5.5 0 010-1h3a.5.5 0 010 1zM15.5 17a.502.502 0 01-.354-.146l-2-2a.5.5 0 01.707-.707l2 2a.5.5 0 01-.354.853zM17.5 13h-3a.5.5 0 010-1h3a.5.5 0 010 1zM11.5 19a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5z"
  })));
}
LiniUnlink2.propTypes = {
  size: PropTypes.number.isRequired
};