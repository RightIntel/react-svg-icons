import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBookmark({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBookmark';

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
    d: "M14.5 18h-10a.5.5 0 010-1h10a.5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 3a.5.5 0 00-.5.5v15a.5.5 0 01-.5.5h-11c-.827 0-1.5-.673-1.5-1.5S3.673 16 4.5 16h9c.827 0 1.5-.673 1.5-1.5v-12c0-.827-.673-1.5-1.5-1.5h-10C2.673 1 2 1.673 2 2.5v15C2 18.878 3.122 20 4.5 20h11c.827 0 1.5-.673 1.5-1.5v-15a.5.5 0 00-.5-.5zM6 2h2v6.293l-.646-.646a.5.5 0 00-.707 0l-.646.646V2zm-3 .5a.5.5 0 01.5-.5H5v7.5a.5.5 0 00.854.354L7 8.708l1.146 1.146A.5.5 0 009 9.5V2h4.5a.5.5 0 01.5.5v12a.5.5 0 01-.5.5h-9c-.562 0-1.082.187-1.5.501V2.5z"
  })));
}
LiniBookmark.propTypes = {
  size: PropTypes.number.isRequired
};