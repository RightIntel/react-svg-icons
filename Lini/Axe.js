function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniAxe({
  size,
  ...props
}) {
  let className = 'Component Lini LiniAxe';

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
    d: "M19.971 15.676a.963.963 0 00-.343-.693l-2.423-2.043a18.434 18.434 0 01-.72-.647l-5.096-4.874.152-.152a1.501 1.501 0 000-2.121L8.855 2.46c-.283-.283-.659-.438-1.061-.438s-.778.156-1.061.438l-.259.259-.767-.734a1.017 1.017 0 00-1.414.016L3 3.294a1.017 1.017 0 00-.016 1.414l.531.555A6.471 6.471 0 01.5 6.001a.5.5 0 00-.5.5c0 2.003.78 3.887 2.197 5.303s3.3 2.197 5.303 2.197a.5.5 0 00.5-.5c0-1.008.228-1.981.66-2.86l4.633 4.844c.181.189.478.519.647.72l2.043 2.423a.961.961 0 00.732.344.965.965 0 00.68-.284l2.293-2.293a.96.96 0 00.283-.719zM3.707 4.016c-.002-.002-.002-.013 0-.016L5 2.707c.002-.002.013-.002.016 0l.751.719-.671.671a6.574 6.574 0 01-.718.621l-.671-.702zm3.31 8.966a6.51 6.51 0 01-6-6 7.443 7.443 0 004.786-2.179L7.44 3.166c.094-.094.219-.145.354-.145s.26.052.354.145l2.686 2.686a.5.5 0 010 .707L9.197 8.196a7.441 7.441 0 00-2.179 4.786zm9.702 4.967l-2.014-2.389a19.304 19.304 0 00-.689-.767L9.191 9.748a6.55 6.55 0 01.714-.844l.778-.778 5.112 4.889c.205.196.549.505.767.689l2.389 2.014-2.23 2.23z"
  })));
}
LiniAxe.propTypes = {
  size: PropTypes.number.isRequired
};