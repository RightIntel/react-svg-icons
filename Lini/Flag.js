import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFlag({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFlag';

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
    d: "M1.5 20a.5.5 0 01-.5-.5v-17a.5.5 0 011 0v17a.5.5 0 01-.5.5zM15.5 12c-2.207 0-3.347-1.14-4.354-2.146C10.151 8.859 9.292 8 7.5 8s-2.652.859-3.646 1.854a.5.5 0 01-.707-.707c1.006-1.006 2.146-2.146 4.354-2.146s3.347 1.14 4.354 2.146c.995.995 1.854 1.854 3.646 1.854 1.704 0 2.565-.776 3.5-1.707V3.666c-.839.723-1.883 1.335-3.5 1.335-2.207 0-3.347-1.14-4.354-2.146-.995-.995-1.854-1.854-3.646-1.854s-2.652.859-3.646 1.854a.5.5 0 01-.707-.707C4.154 1.142 5.294.002 7.502.002s3.347 1.14 4.354 2.146c.995.995 1.854 1.854 3.646 1.854s2.652-.859 3.646-1.854a.499.499 0 01.854.354v7c0 .133-.053.26-.146.354-1.006 1.006-2.146 2.146-4.354 2.146z"
  })));
}
LiniFlag.propTypes = {
  size: PropTypes.number.isRequired
};