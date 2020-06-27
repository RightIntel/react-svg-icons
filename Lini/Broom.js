function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBroom({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBroom';

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
    d: "M19.521.564l-.086-.086C19.152.195 18.776.04 18.374.04s-.778.156-1.061.438l-5.314 5.314-.146-.146a.5.5 0 00-.707 0L9.999 6.793a2.775 2.775 0 00-1.936-.768 2.74 2.74 0 00-1.693.571c-.031.025-3.149 2.469-6.029 3.429a.5.5 0 00-.342.474c0 2.538.988 4.923 2.782 6.717s4.18 2.782 6.717 2.782a.5.5 0 00.474-.342c.96-2.88 3.404-5.997 3.429-6.029.83-1.051.74-2.673-.197-3.629l1.147-1.147a.5.5 0 000-.707l-.146-.146 5.314-5.314a1.501 1.501 0 000-2.121zM8.063 7.025c.48 0 .934.179 1.247.492l.336.336 2.836 2.836c.596.596.658 1.659.136 2.321-.015.019-.078.099-.177.23L6.762 7.556c.13-.098.208-.16.227-.174.291-.23.672-.356 1.073-.356zm1.085 11.968a8.484 8.484 0 01-2.15-.369c.967-1.87 2.837-3.751 2.856-3.77a.5.5 0 00-.707-.707c-.084.084-2.065 2.077-3.091 4.124a8.501 8.501 0 01-2.199-1.42l2.997-2.997a.5.5 0 00-.707-.707L3.15 16.144a8.518 8.518 0 01-1.42-2.199c2.047-1.025 4.04-3.007 4.124-3.091a.5.5 0 00-.707-.707c-.019.019-1.897 1.887-3.77 2.856a8.484 8.484 0 01-.369-2.15c1.905-.7 3.803-1.91 4.936-2.701l5.904 5.91c-.791 1.133-2 3.03-2.699 4.933zm3.352-9.7L10.707 7.5l.793-.793L13.293 8.5l-.793.793zm6.314-7.314L13.5 7.293l-.793-.793 5.314-5.314c.094-.094.219-.145.354-.145s.26.052.354.145l.086.086a.5.5 0 010 .707z"
  })));
}
LiniBroom.propTypes = {
  size: PropTypes.number.isRequired
};