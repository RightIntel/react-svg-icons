import React from 'react';
import PropTypes from 'prop-types';
export default function LiniGridCrossed({
  size,
  ...props
}) {
  let className = 'Component Lini LiniGridCrossed';

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
    d: "M19.854.146a.5.5 0 00-.707 0l-2 2a1.49 1.49 0 00-.646-.147h-13c-.827 0-1.5.673-1.5 1.5v13c0 .231.053.45.147.646l-2 2a.5.5 0 00.708.707l2-2c.196.094.415.147.646.147h13c.827 0 1.5-.673 1.5-1.5v-13c0-.231-.053-.45-.147-.646l2-2a.5.5 0 000-.707zM11.293 8L8 11.293V8h3.293zM8 7V3h4v4H8zm-1 5H3V8h4v4zm1.707 0L12 8.707V12H8.707zM12 13v4H8v-4h4zm1-5h4v4h-4V8zm0-5h3.293L13 6.293V3zM3.5 3H7v4H3V3.5a.5.5 0 01.5-.5zM3 13h3.293L3 16.293V13zm4 .707V17H3.707L7 13.707zM16.5 17H13v-4h4v3.5a.5.5 0 01-.5.5zM17 7h-3.293L17 3.707V7z"
  })));
}
LiniGridCrossed.propTypes = {
  size: PropTypes.number.isRequired
};