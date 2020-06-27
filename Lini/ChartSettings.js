function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniChartSettings({
  size,
  ...props
}) {
  let className = 'Component Lini LiniChartSettings';

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
    d: "M2.5 15h-2a.5.5 0 01-.5-.5v-9A.5.5 0 01.5 5h2a.5.5 0 01.5.5v9a.5.5 0 01-.5.5zM1 14h1V6H1v8zM8.5 11a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v4a.5.5 0 01-1 0V3H9v7.5a.5.5 0 01-.5.5zM6.5 15h-2a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v5a.5.5 0 01-.5.5zM5 14h1v-4H5v4zM13.5 15c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.017 18.776c-.05 0-.1-.007-.148-.022a5.523 5.523 0 01-2.101-1.215.498.498 0 01.028-.758c.383-.305.486-.856.241-1.281a1.002 1.002 0 00-1.23-.431.502.502 0 01-.671-.355 5.554 5.554 0 010-2.426.5.5 0 01.671-.355 1.004 1.004 0 001.23-.431 1.006 1.006 0 00-.241-1.281.5.5 0 01-.028-.758 5.543 5.543 0 012.101-1.215.503.503 0 01.643.403c.072.485.498.85.989.85s.916-.366.989-.85a.499.499 0 01.643-.403 5.536 5.536 0 012.101 1.215.498.498 0 01-.028.758 1.006 1.006 0 00-.241 1.281 1.002 1.002 0 001.23.431.502.502 0 01.671.355 5.554 5.554 0 010 2.426.5.5 0 01-.671.355 1.004 1.004 0 00-1.23.431c-.245.425-.142.976.241 1.281a.5.5 0 01.028.758 5.536 5.536 0 01-2.101 1.215.503.503 0 01-.643-.403c-.072-.485-.498-.85-.989-.85s-.916.366-.989.85a.499.499 0 01-.495.426zm-1.19-1.656c.272.201.566.371.874.506A1.997 1.997 0 0113.5 16.5a1.997 1.997 0 011.799 1.126c.308-.135.602-.305.874-.506a1.998 1.998 0 011.799-3.115 4.472 4.472 0 000-1.01A2.006 2.006 0 0116.099 12a2 2 0 01.074-2.119 4.538 4.538 0 00-.874-.506 1.997 1.997 0 01-1.799 1.126 1.997 1.997 0 01-1.799-1.126 4.538 4.538 0 00-.874.506A1.995 1.995 0 0110.901 12a2.006 2.006 0 01-1.873.995 4.472 4.472 0 000 1.01 2.006 2.006 0 011.873.995 2 2 0 01-.074 2.119z"
  })));
}
LiniChartSettings.propTypes = {
  size: PropTypes.number.isRequired
};