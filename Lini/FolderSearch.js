import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFolderSearch({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFolderSearch';

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
    d: "M18.5 18h-17C.673 18 0 17.327 0 16.5V6c0-.352.119-.856.276-1.171l.553-1.106c.206-.413.71-.724 1.171-.724h7c.461 0 .964.311 1.171.724l.553 1.106A.406.406 0 0011 5h7.5c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5zM2 4a.404.404 0 00-.276.171l-.553 1.106A2.056 2.056 0 001 6.001v10.5a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5H11c-.461 0-.965-.311-1.171-.724l-.553-1.106A.406.406 0 009 4H2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.9 14.2l-1.531-2.042A2.49 2.49 0 0012 10.5C12 9.122 10.878 8 9.5 8S7 9.122 7 10.5 8.122 13 9.5 13c.382 0 .745-.087 1.069-.241L12.1 14.8a.498.498 0 00.7.1.5.5 0 00.1-.7zM8 10.5C8 9.673 8.673 9 9.5 9s1.5.673 1.5 1.5-.673 1.5-1.5 1.5S8 11.327 8 10.5z"
  })));
}
LiniFolderSearch.propTypes = {
  size: PropTypes.number.isRequired
};