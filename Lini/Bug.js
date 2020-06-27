import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBug({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBug';

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
    d: "M17.5 12h-1.515a8.318 8.318 0 00-.781-3.102A2.504 2.504 0 0016.999 6.5a.5.5 0 00-1 0c0 .761-.57 1.392-1.306 1.487a7.452 7.452 0 00-.904-1.124A4.505 4.505 0 009.499 1a4.505 4.505 0 00-4.29 5.863 7.211 7.211 0 00-.904 1.124A1.502 1.502 0 012.999 6.5a.5.5 0 00-1 0c0 1.134.759 2.093 1.795 2.398A8.337 8.337 0 003.013 12H1.499a.5.5 0 000 1h1.515a8.318 8.318 0 00.781 3.102A2.504 2.504 0 002 18.5a.5.5 0 001 0c0-.761.57-1.392 1.306-1.487.174.266.365.521.571.762C6.107 19.21 7.748 20 9.499 20s3.393-.79 4.622-2.225c.207-.241.397-.496.571-.762a1.502 1.502 0 011.306 1.487.5.5 0 001 0 2.504 2.504 0 00-1.795-2.398A8.337 8.337 0 0015.984 13h1.514a.5.5 0 000-1zm-8-10a3.504 3.504 0 013.443 4.134C11.921 5.396 10.738 5 9.5 5s-2.421.395-3.443 1.134A3.504 3.504 0 019.5 2zM4 12.5c0-3.385 2.201-6.173 5-6.473v12.946c-2.799-.3-5-3.088-5-6.473zm6 6.473V6.027c2.799.3 5 3.088 5 6.473s-2.201 6.173-5 6.473z"
  })));
}
LiniBug.propTypes = {
  size: PropTypes.number.isRequired
};