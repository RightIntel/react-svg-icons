function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBrush({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBrush';

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
    d: "M.5 20a.5.5 0 01-.186-.964c.821-.328 1.208-1.434 1.618-2.605.277-.79.563-1.608 1.015-2.244.554-.78 1.296-1.176 2.204-1.176.301 0 .627.043.969.129.607.152 1.13.534 1.472 1.075.335.529.475 1.179.395 1.829C7.752 17.956 5.661 20 .498 20zm4.652-5.989c-1.224 0-1.676 1.039-2.276 2.751-.27.771-.546 1.558-.972 2.18 1.481-.13 2.707-.473 3.593-1.011.872-.529 1.404-1.242 1.498-2.008.106-.862-.364-1.624-1.117-1.812a3.02 3.02 0 00-.727-.099zM9.544 12.977c-.848 0-1.596-.363-2.052-.995-.504-.699-.605-1.661-.279-2.64.277-.829.898-1.59 1.955-2.394.904-.687 2.058-1.354 3.279-2.059 2.171-1.254 4.632-2.675 6.699-4.743a.5.5 0 01.707.708c-2.067 2.067-3.489 4.528-4.743 6.699-.705 1.221-1.372 2.375-2.059 3.279-.804 1.057-1.564 1.678-2.394 1.955-.378.126-.753.19-1.114.19zm6.708-9.229c-1.121.746-2.246 1.396-3.304 2.007-2.316 1.337-4.315 2.492-4.786 3.903-.227.68-.176 1.298.142 1.739.269.374.71.58 1.241.58.253 0 .521-.047.797-.139 1.411-.47 2.566-2.47 3.903-4.786.611-1.058 1.261-2.183 2.007-3.304z"
  })));
}
LiniBrush.propTypes = {
  size: PropTypes.number.isRequired
};