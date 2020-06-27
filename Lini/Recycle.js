function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniRecycle({
  size,
  ...props
}) {
  let className = 'Component Lini LiniRecycle';

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
    d: "M10.5 19a.5.5 0 01-.448-.277l-1-2A.5.5 0 019.499 16h4c1.412 0 2.46-.46 2.951-1.294s.384-1.974-.302-3.208l-.975-1.755a.5.5 0 01.874-.486l.975 1.755c.427.769.67 1.525.72 2.245.051.727-.094 1.385-.43 1.956s-.841 1.017-1.501 1.326c-.654.306-1.432.461-2.312.461h-3.191l.638 1.276a.5.5 0 01-.447.724zM14.5 8a.5.5 0 01-.437-.257l-2.086-3.755c-.683-1.229-1.563-1.906-2.477-1.906s-1.794.677-2.477 1.906l-.975 1.755a.5.5 0 01-.874-.486l.975-1.755C7.016 1.941 8.206 1.081 9.5 1.081s2.484.86 3.351 2.421l1.626 2.926.576-1.152a.5.5 0 01.895.447l-1 2a.5.5 0 01-.436.276h-.011zM7.5 17h-2c-.88 0-1.658-.155-2.312-.461-.66-.309-1.165-.755-1.501-1.326s-.481-1.229-.43-1.956c.05-.72.292-1.475.72-2.245L3.65 8H2.5a.5.5 0 010-1h2a.502.502 0 01.437.742l-2.086 3.755c-.686 1.234-.793 2.373-.302 3.208s1.539 1.294 2.951 1.294h2a.5.5 0 010 1z"
  })));
}
LiniRecycle.propTypes = {
  size: PropTypes.number.isRequired
};