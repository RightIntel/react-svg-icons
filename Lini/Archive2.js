function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniArchive2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniArchive2';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.5 16h-3a.5.5 0 010-1h3a.5.5 0 010 1zM16.5 11h-13a.5.5 0 010-1h13a.5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.557 11.383l-2.698-6.168c-.159-.364-.475-.699-.859-.925V.499a.498.498 0 00-.5-.5h-11a.498.498 0 00-.5.5V4.29c-.384.226-.699.56-.859.925L.443 11.383C.195 11.951 0 12.88 0 13.5v4c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-4c0-.619-.194-1.549-.443-2.117zM15 1v7H5V1h10zM4 5.747V8.5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V5.748l2.641 6.037c.03.069.06.148.089.233A1.457 1.457 0 0018.5 12h-17c-.078 0-.155.006-.23.018.029-.085.058-.164.089-.233L4 5.748zM19 17.5a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h17a.5.5 0 01.5.5v4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 7h-7a.5.5 0 010-1h7a.5.5 0 010 1zM13.5 5h-7a.5.5 0 010-1h7a.5.5 0 010 1zM13.5 3h-7a.5.5 0 010-1h7a.5.5 0 010 1z"
  })));
}
LiniArchive2.propTypes = {
  size: PropTypes.number.isRequired
};