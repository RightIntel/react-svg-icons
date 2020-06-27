function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFeather({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFeather';

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
    d: "M.5 20l-.027-.001a.5.5 0 01-.474-.515c.118-3.655 1.096-6.94 2.907-9.762 1.487-2.317 3.53-4.321 6.072-5.955 2.426-1.559 4.83-2.468 6.421-2.956C17.226.251 18.774 0 19.499 0a.5.5 0 01.5.5c0 1.207-1.154 2.361-1.646 2.854-.801.801-2.275 1.313-3.701 1.808-.447.155-.899.312-1.321.475a41.3 41.3 0 013.367-.137h.135a.5.5 0 01.405.787 12.088 12.088 0 01-3.991 3.648c-.757.433-1.595.634-2.638.634-.616 0-1.242-.07-1.847-.137-.593-.066-1.206-.134-1.797-.134-1.088 0-1.918.229-2.69.744-2.764 1.843-3.274 8.429-3.279 8.495a.5.5 0 01-.498.464zM18.872 1.047c-1.728.211-5.634 1.171-9.352 3.561-1.909 1.227-4.018 3.008-5.662 5.513.898-.562 1.89-.824 3.109-.824.647 0 1.287.071 1.907.14.604.067 1.175.131 1.736.131.861 0 1.542-.16 2.142-.502a10.896 10.896 0 003.062-2.556c-1.249.028-3.387.127-4.685.473a.499.499 0 01-.545-.76c.614-.92 2.133-1.448 3.741-2.006 1.319-.458 2.684-.932 3.322-1.57.288-.288.948-.948 1.226-1.6z"
  })));
}
LiniFeather.propTypes = {
  size: PropTypes.number.isRequired
};