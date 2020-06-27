import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBold({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBold';

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
    d: "M10 9H7.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H10c1.103 0 2 .897 2 2s-.897 2-2 2zM8 8h2c.551 0 1-.449 1-1s-.449-1-1-1H8v2zM11 15H7.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H11c1.103 0 2 .897 2 2s-.897 2-2 2zm-3-1h3c.551 0 1-.449 1-1s-.449-1-1-1H8v2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 18H5.5c-.827 0-1.5-.673-1.5-1.5v-13C4 2.673 4.673 2 5.5 2H10c2.757 0 5 2.243 5 5 0 .824-.202 1.628-.587 2.349A4.969 4.969 0 0116 13c0 2.757-2.243 5-5 5zM5.5 3a.5.5 0 00-.5.5v13a.5.5 0 00.5.5H11c2.206 0 4-1.794 4-4a3.98 3.98 0 00-1.539-3.151.5.5 0 01-.1-.682A3.98 3.98 0 0014 7c0-2.206-1.794-4-4-4H5.5z"
  })));
}
LiniBold.propTypes = {
  size: PropTypes.number.isRequired
};