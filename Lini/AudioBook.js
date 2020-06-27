function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniAudioBook({
  size,
  ...props
}) {
  let className = 'Component Lini LiniAudioBook';

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
    d: "M18.5 16.5a.504.504 0 01-.354-.146C17.643 15.851 16.204 15 14 15s-3.644.851-4.146 1.354a.5.5 0 01-.707 0C8.644 15.851 7.205 15 5.001 15s-3.644.851-4.146 1.354A.499.499 0 01.001 16V5c0-.133.053-.26.146-.354C.906 3.886 2.633 3 5.001 3c2.052 0 3.623.667 4.5 1.339.877-.672 2.448-1.339 4.5-1.339 2.367 0 4.094.887 4.854 1.646a.5.5 0 01.146.354v11a.5.5 0 01-.5.5zM5 14c2.052 0 3.623.667 4.5 1.339C10.377 14.667 11.948 14 14 14c1.707 0 3.082.461 4 1.004V5.221c-.604-.506-1.981-1.22-4-1.22-2.205 0-3.644.851-4.146 1.354a.5.5 0 01-.707 0c-.503-.503-1.942-1.354-4.146-1.354-2.019 0-3.396.714-4 1.22v9.783c.918-.542 2.293-1.004 4-1.004z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 13.001a.493.493 0 01-.312-.11L4.825 11H4.5a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h.325l2.363-1.891A.5.5 0 018 6.5v6a.502.502 0 01-.5.5zM5 10c.114 0 .224.039.312.11L7 11.46V7.54L5.312 8.89A.5.5 0 015 9v1zM10.736 12a.5.5 0 01-.372-.833c.411-.459.637-1.05.637-1.667s-.226-1.208-.637-1.667a.5.5 0 11.745-.667c.575.642.891 1.471.891 2.334s-.317 1.691-.892 2.334a.5.5 0 01-.373.167z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 13a.5.5 0 01-.399-.8c.589-.783.9-1.717.9-2.7s-.311-1.916-.899-2.7a.5.5 0 01.799-.6c.72.958 1.1 2.099 1.1 3.3s-.38 2.343-1.1 3.301a.498.498 0 01-.4.2zM9.366 10.5a.499.499 0 01-.432-.75.493.493 0 000-.5.5.5 0 01.865-.501 1.495 1.495 0 010 1.502.501.501 0 01-.433.25z"
  })));
}
LiniAudioBook.propTypes = {
  size: PropTypes.number.isRequired
};