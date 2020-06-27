import React from 'react';
import PropTypes from 'prop-types';
export default function LiniLabel({
  size,
  ...props
}) {
  let className = 'Component Lini LiniLabel';

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
    d: "M12.5 17h-11C.673 17 0 16.327 0 15.5v-10C0 4.673.673 4 1.5 4h11c.704 0 1.574.408 2.024.948l3.72 4.464c.509.61.509 1.566 0 2.177l-3.72 4.464c-.45.541-1.321.948-2.024.948zM1.5 5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h11c.401 0 .999-.28 1.256-.588l3.72-4.464c.199-.239.199-.658 0-.896l-3.72-4.464C13.499 5.28 12.901 5 12.5 5h-11z"
  })));
}
LiniLabel.propTypes = {
  size: PropTypes.number.isRequired
};