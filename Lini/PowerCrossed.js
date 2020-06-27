import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPowerCrossed({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPowerCrossed';

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
    d: "M18.895 3.193a.501.501 0 00-.702-.088l-7.427 5.776 3.19-7.178a.499.499 0 00-.811-.556l-10 10a.499.499 0 00.354.854h3.257L.192 17.106a.501.501 0 00.614.79l7.427-5.776-3.19 7.178a.499.499 0 00.811.557l10-10a.499.499 0 00-.354-.854h-3.257l6.564-5.105a.501.501 0 00.088-.702zM4.707 11l7.242-7.242-2.462 5.539a.498.498 0 00.073.523L8.043 11H4.707zm9.586-1l-7.242 7.242 2.462-5.539a.498.498 0 00-.038-.476c-.011-.017-.023-.032-.035-.047L10.957 10h3.336z"
  })));
}
LiniPowerCrossed.propTypes = {
  size: PropTypes.number.isRequired
};