import React from 'react';
import PropTypes from 'prop-types';
export default function LiniScale2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniScale2';

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
    d: "M10 11.086V9.5a.5.5 0 00-1 0v1.586c-.582.206-1 .762-1 1.414 0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5c0-.652-.418-1.208-1-1.414zM9.5 13a.5.5 0 110-1 .5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 8C7.019 8 5 10.019 5 12.5S7.019 17 9.5 17s4.5-2.019 4.5-4.5S11.981 8 9.5 8zm.5 7.964V15.5a.5.5 0 00-1 0v.464A3.508 3.508 0 016.036 13H6.5a.5.5 0 000-1h-.464C6.279 10.306 7.74 9 9.5 9s3.221 1.306 3.464 3H12.5a.5.5 0 000 1h.464A3.508 3.508 0 0110 15.964z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 0h-16a.5.5 0 00-.5.5v1C1 2.878 2.122 4 3.5 4H8v1.149a7.448 7.448 0 00-3.803 2.047A7.45 7.45 0 002 12.499v6c0 .827.673 1.5 1.5 1.5h12c.827 0 1.5-.673 1.5-1.5v-6c0-2.003-.78-3.887-2.197-5.303a7.447 7.447 0 00-3.804-2.047L10.998 4h4.501c1.378 0 2.5-1.122 2.5-2.5v-1a.5.5 0 00-.5-.5zM16 12.5v6a.5.5 0 01-.5.5h-12a.5.5 0 01-.5-.5v-6C3 8.916 5.916 6 9.5 6S16 8.916 16 12.5zm-6-7.483a7.544 7.544 0 00-1 0V4h.999L10 5.017zM17 1.5c0 .827-.673 1.5-1.5 1.5h-12C2.673 3 2 2.327 2 1.5V1h15v.5z"
  })));
}
LiniScale2.propTypes = {
  size: PropTypes.number.isRequired
};