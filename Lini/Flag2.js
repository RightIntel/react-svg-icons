import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFlag2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFlag2';

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
    d: "M1.5 20a.5.5 0 01-.5-.5v-15a.5.5 0 011 0v15a.5.5 0 01-.5.5zM15.5 14c-2.207 0-3.347-1.14-4.354-2.146C10.151 10.859 9.292 10 7.5 10s-2.652.859-3.646 1.854a.5.5 0 01-.707-.707c1.006-1.006 2.146-2.146 4.354-2.146s3.347 1.14 4.354 2.146c.995.995 1.854 1.854 3.646 1.854 1.704 0 2.565-.776 3.5-1.707V5.666c-.839.723-1.883 1.335-3.5 1.335-2.207 0-3.347-1.14-4.354-2.146-.995-.995-1.854-1.854-3.646-1.854s-2.652.859-3.646 1.854a.5.5 0 01-.707-.707c1.006-1.006 2.146-2.146 4.354-2.146s3.347 1.14 4.354 2.146c.995.995 1.854 1.854 3.646 1.854s2.652-.859 3.646-1.854a.499.499 0 01.854.354v7c0 .133-.053.26-.146.354-1.006 1.006-2.146 2.146-4.354 2.146zM1.5 3C.673 3 0 2.327 0 1.5S.673 0 1.5 0 3 .673 3 1.5 2.327 3 1.5 3zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  })));
}
LiniFlag2.propTypes = {
  size: PropTypes.number.isRequired
};