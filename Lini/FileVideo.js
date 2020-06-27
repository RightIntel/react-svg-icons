import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFileVideo({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFileVideo';

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
    d: "M17.854 5.646l-4.5-4.5A.5.5 0 0013 1H3.5C2.673 1 2 1.673 2 2.5v16c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1.5V6a.504.504 0 00-.146-.354zM16.793 6H13.5a.5.5 0 01-.5-.5V2.207L16.793 6zM16.5 19h-13a.5.5 0 01-.5-.5v-16a.5.5 0 01.5-.5H12v3.5c0 .827.673 1.5 1.5 1.5H17v11.5a.5.5 0 01-.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.234 10.676a.907.907 0 00-.405.1L12 11.691V11.5c0-.827-.673-1.5-1.5-1.5h-4c-.827 0-1.5.673-1.5 1.5v4c0 .827.673 1.5 1.5 1.5h4c.827 0 1.5-.673 1.5-1.5v-.191l1.829.915c.133.067.269.1.405.1.227 0 .43-.093.574-.263A.854.854 0 0015 15.5v-4c0-.47-.329-.824-.766-.824zM11 15.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4zm3-.309l-1.829-.915A.406.406 0 0112 14v-1c0-.086.094-.238.171-.276L14 11.81v3.382z"
  })));
}
LiniFileVideo.propTypes = {
  size: PropTypes.number.isRequired
};