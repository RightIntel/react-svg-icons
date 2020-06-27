function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFolderStar({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFolderStar';

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
    d: "M18.5 18h-17C.673 18 0 17.327 0 16.5V6c0-.352.119-.856.276-1.171l.553-1.106c.206-.413.71-.724 1.171-.724h7c.461 0 .964.311 1.171.724l.553 1.106A.406.406 0 0011 5h7.5c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5zM2 4a.404.404 0 00-.276.171l-.553 1.106A2.056 2.056 0 001 6.001v10.5a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5H11c-.461 0-.965-.311-1.171-.724l-.553-1.106A.406.406 0 009 4H2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 15a.495.495 0 01-.224-.053L9.5 14.059l-1.776.888a.5.5 0 01-.711-.556l.446-2.006-1.337-1.56A.5.5 0 016.501 10H8.19l.862-1.746a.5.5 0 01.896 0L10.81 10h1.689a.5.5 0 01.379.825l-1.337 1.56.446 2.006a.5.5 0 01-.488.609zm-2-2c.077 0 .153.018.224.053l1.06.53-.272-1.225a.502.502 0 01.108-.434l.793-.925H10.5a.5.5 0 01-.448-.279L9.5 9.603l-.552 1.117a.5.5 0 01-.448.279h-.913l.793.925c.102.119.143.28.108.434l-.272 1.225 1.06-.53A.502.502 0 019.5 13z"
  })));
}
LiniFolderStar.propTypes = {
  size: PropTypes.number.isRequired
};