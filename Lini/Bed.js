function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBed({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBed';

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
    d: "M17.5 18h-1a.5.5 0 010-1h1a.5.5 0 010 1zM2.5 18h-1a.5.5 0 010-1h1a.5.5 0 010 1zM18.658 11.393L16.29 4.29c-.199-.596-.768-1.086-1.388-1.24a3.005 3.005 0 00-.074-.27c-.227-.68-.616-.781-.828-.781h-4a.71.71 0 00-.5.213.71.71 0 00-.5-.213H5c-.212 0-.601.102-.828.781a2.633 2.633 0 00-.074.27c-.621.154-1.19.643-1.388 1.24L.342 11.393A7.846 7.846 0 000 13.5v2c0 .827.673 1.5 1.5 1.5h16c.827 0 1.5-.673 1.5-1.5v-2c0-.606-.15-1.532-.342-2.107zM10.157 3h3.686c.07.157.157.514.157 1s-.087.843-.157 1h-3.686c-.07-.157-.157-.514-.157-1s.087-.843.157-1zm-5 0h3.686c.07.157.157.514.157 1s-.087.843-.157 1H5.157C5.087 4.843 5 4.486 5 4s.087-.843.157-1zM3.658 4.607a.907.907 0 01.345-.429c.014.388.072.752.169 1.041.227.68.616.781.828.781h4a.71.71 0 00.5-.213A.71.71 0 0010 6h4c.212 0 .601-.102.828-.781a3.84 3.84 0 00.169-1.041c.16.113.291.267.345.429L16.14 7H2.861l.798-2.393zM2.527 8h13.946l1.236 3.709c.032.095.062.204.091.321a1.482 1.482 0 00-.3-.03h-16c-.103 0-.203.01-.3.03.029-.117.059-.226.091-.321L2.528 8zM18 15.5a.5.5 0 01-.5.5h-16a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h16a.5.5 0 01.5.5v2z"
  })));
}
LiniBed.propTypes = {
  size: PropTypes.number.isRequired
};