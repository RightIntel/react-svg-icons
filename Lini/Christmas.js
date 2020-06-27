function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniChristmas({
  size,
  ...props
}) {
  let className = 'Component Lini LiniChristmas';

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
    d: "M9.514 19.996h-.015c-3.208-.001-7.299-.435-8.275-1.079a.502.502 0 01-.116-.729l2-2.5a.5.5 0 11.781.625L2.31 18.287c1.207.334 4.044.708 7.189.709h.014a40.63 40.63 0 005-.306c.991-.127 1.69-.268 2.138-.391l-3.31-3.723a.5.5 0 01.266-.821c.546-.12.907-.248 1.143-.359l-3.216-3.752a.501.501 0 01.244-.806 4.19 4.19 0 00.961-.389l-.596-.596a.5.5 0 01.707-.707l1 1a.5.5 0 010 .707c-.272.272-.634.505-1.081.696l3.107 3.625a.5.5 0 01-.026.679c-.261.261-.665.48-1.225.663l3.245 3.651a.499.499 0 01-.097.748c-.558.372-2.013.622-3.136.766a41.525 41.525 0 01-5.127.314zM5.5 11.5a.5.5 0 01-.364-.843l1.057-1.122c-.431-.188-.782-.416-1.047-.681a.5.5 0 010-.707l1-1a.5.5 0 01.707.707l-.596.596c.259.151.583.282.961.389a.498.498 0 01.228.824l-1.584 1.681a.5.5 0 01-.364.157zM11.5 7a.488.488 0 01-.223-.053l-1.776-.888-1.776.888a.5.5 0 01-.708-.568l.442-1.769L6.102 2.8a.5.5 0 01.4-.8h1.691L9.055.276a.5.5 0 01.894 0L10.811 2h1.691a.5.5 0 01.4.8l-1.357 1.81.442 1.769a.5.5 0 01-.485.621zm-2-2c.077 0 .153.018.224.053l1.028.514-.236-.945a.499.499 0 01.085-.421l.9-1.2h-1a.5.5 0 01-.447-.276l-.553-1.106-.553 1.106a.5.5 0 01-.447.276h-1l.9 1.2c.09.12.122.275.085.421l-.236.945 1.028-.514A.502.502 0 019.502 5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 18c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1zM7 16.5a.5.5 0 11-1 0 .5.5 0 011 0zM12 12.5a.5.5 0 11-1 0 .5.5 0 011 0zM10 9.5a.5.5 0 11-1 0 .5.5 0 011 0zM4.5 15c-.827 0-1.5-.673-1.5-1.5S3.673 12 4.5 12s1.5.673 1.5 1.5S5.327 15 4.5 15zm0-2a.5.5 0 100 1 .5.5 0 000-1zM8.5 15c-.276 0-.5-.224-.5-.5s-.224-.5-.5-.5a.5.5 0 010-1c.276 0 .5-.224.5-.5a.5.5 0 011 0c0 .276.224.5.5.5a.5.5 0 010 1c-.276 0-.5.224-.5.5s-.224.5-.5.5z"
  })));
}
LiniChristmas.propTypes = {
  size: PropTypes.number.isRequired
};