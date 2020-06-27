function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniServer({
  size,
  ...props
}) {
  let className = 'Component Lini LiniServer';

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
    d: "M17.5 9h-1a.5.5 0 010-1h1a.5.5 0 010 1zM17.5 13h-1a.5.5 0 010-1h1a.5.5 0 010 1zM17.5 17h-1a.5.5 0 010-1h1a.5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 7.5c0-.637-.251-1.566-.572-2.116l-2.492-4.272C16.566.478 15.734 0 15 0H5c-.734 0-1.566.478-1.936 1.112L.572 5.384C.251 5.934 0 6.863 0 7.5v2c0 .384.145.734.383 1a1.494 1.494 0 00-.383 1v2c0 .384.145.734.383 1a1.494 1.494 0 00-.383 1v3c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-3c0-.384-.145-.734-.383-1 .238-.266.383-.616.383-1v-2c0-.384-.145-.734-.383-1 .238-.266.383-.616.383-1v-2zm-1 4v2a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h17a.5.5 0 01.5.5zM1.5 10a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h17a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-17zm2.428-8.384C4.116 1.294 4.627 1 5 1h10c.373 0 .884.293 1.072.616l2.492 4.272c.021.036.042.076.063.118A1.334 1.334 0 0018.5 6h-17c-.043 0-.085.002-.127.006.021-.042.042-.081.063-.118l2.492-4.272zM19 18.5a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h17a.5.5 0 01.5.5v3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12.5a.5.5 0 11-1 0 .5.5 0 011 0zM5 12.5a.5.5 0 11-1 0 .5.5 0 011 0zM7 12.5a.5.5 0 11-1 0 .5.5 0 011 0zM9 12.5a.5.5 0 11-1 0 .5.5 0 011 0zM15 8.5a.5.5 0 11-1 0 .5.5 0 011 0zM15 12.5a.5.5 0 11-1 0 .5.5 0 011 0zM15 16.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  })));
}
LiniServer.propTypes = {
  size: PropTypes.number.isRequired
};