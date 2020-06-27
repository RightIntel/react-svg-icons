function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCar({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCar';

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
    d: "M20.001 15.51L20 15.476c-.006-.258-.094-1.833-1.276-2.424-.171-.085-.525-.262-3.883-.524-.122-.28-.327-.731-.576-1.203-.779-1.478-1.27-1.817-1.572-1.943-1.057-.442-4.242-.542-6.314-.024-1.297.324-2.459 1.088-3.36 2.209a7.113 7.113 0 00-.924 1.483 4.572 4.572 0 00-.803.817C.435 14.982.001 16.54.001 18.499a.498.498 0 00.5.5h1.035a.5.5 0 00.495-.429c.028-.197.076-.388.141-.57.413 1.164 1.525 2 2.828 2s2.415-.836 2.828-2c.065.183.113.373.141.57a.5.5 0 00.495.429h6.071a.5.5 0 00.495-.429c.017-.119.042-.236.073-.35a2.507 2.507 0 002.395 1.779 2.504 2.504 0 002.011-3.991.5.5 0 00.491-.5zm-13.38-5.181c1.914-.479 4.898-.353 5.686-.024.038.016.39.192 1.069 1.48.122.23.233.458.328.66a222.89 222.89 0 00-2.05-.132A377.704 377.704 0 005.52 12h-.021a6.5 6.5 0 00-1.717.215c.583-.73 1.502-1.552 2.839-1.886zM5 19a2.002 2.002 0 01-1.985-2.244A3 3 0 015 16a3 3 0 011.985.756A2.002 2.002 0 015 19zm9.126-1H8.873a4 4 0 00-1.065-1.847l-.016-.016a3.995 3.995 0 00-2.793-1.136 4.002 4.002 0 00-3.873 3H1.01c.105-2.387 1.013-4.995 4.479-5 .197.008 3.083.131 6.058.309 5.681.34 6.588.575 6.728.638.398.199.577.677.658 1.053h-.934c-.1 0-.2.004-.299.011l-.018.001a3.99 3.99 0 00-1.826.61l-.017.011A4.009 4.009 0 0014.125 18zm3.372 1a1.504 1.504 0 01-1.083-2.543 2.98 2.98 0 011.307-.444A1.5 1.5 0 0119 17.498c0 .828-.674 1.502-1.502 1.502z"
  })));
}
LiniCar.propTypes = {
  size: PropTypes.number.isRequired
};