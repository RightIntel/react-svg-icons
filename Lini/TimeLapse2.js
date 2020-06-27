import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTimeLapse2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTimeLapse2';

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
    d: "M18.5 18h-9c-.827 0-1.5-.673-1.5-1.5v-3a.5.5 0 011 0v3a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-1a.504.504 0 01-.354-.146L16.292 9h-3.793a.5.5 0 010-1h4c.133 0 .26.053.354.146l.854.854h.793c.827 0 1.5.673 1.5 1.5v6c0 .827-.673 1.5-1.5 1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 16c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zM10.398 6.992a.499.499 0 01-.489-.4 4.488 4.488 0 00-3.508-3.503.5.5 0 01.198-.98c1.056.214 2.02.732 2.787 1.498s1.286 1.728 1.502 2.784a.5.5 0 01-.491.6zM.601 7a.5.5 0 01-.491-.599c.215-1.058.734-2.022 1.501-2.79s1.732-1.286 2.79-1.501a.499.499 0 11.198.98A4.484 4.484 0 001.09 6.599.5.5 0 01.601 7zM4.501 12.9a.492.492 0 01-.1-.01c-1.058-.215-2.022-.734-2.79-1.501S.325 9.657.11 8.599a.5.5 0 11.98-.198 4.484 4.484 0 003.509 3.509.5.5 0 01-.098.99zM6.499 12.9a.5.5 0 01-.098-.99A4.484 4.484 0 009.91 8.401a.5.5 0 11.98.198c-.215 1.058-.734 2.022-1.501 2.79s-1.732 1.286-2.79 1.501a.492.492 0 01-.1.01zM5.5 8a.502.502 0 01-.354-.146l-2-2a.5.5 0 01.707-.707l2 2A.5.5 0 015.499 8z"
  })));
}
LiniTimeLapse2.propTypes = {
  size: PropTypes.number.isRequired
};