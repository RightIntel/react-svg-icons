function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniAxe2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniAxe2';

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
    d: "M19.971 16.676a.963.963 0 00-.343-.693l-2.423-2.043a18.434 18.434 0 01-.72-.647l-4.841-4.631A6.459 6.459 0 0114.501 8a.5.5 0 00.5-.5c0-2.003-.78-3.887-2.197-5.303S9.504 0 7.501 0a.5.5 0 00-.5.5 6.462 6.462 0 01-.741 3.012l-.552-.528A1.017 1.017 0 004.294 3L3.001 4.293a1.017 1.017 0 00-.016 1.414l.528.552A6.462 6.462 0 01.501 7a.5.5 0 00-.5.5c0 2.003.78 3.887 2.197 5.303S5.498 15 7.501 15a.5.5 0 00.5-.5c0-1.024.239-1.994.662-2.857l4.631 4.841c.181.189.478.519.647.72l2.043 2.423a.961.961 0 00.732.344.965.965 0 00.68-.284l2.293-2.293a.96.96 0 00.283-.719zM3.707 5.016c-.002-.002-.002-.013 0-.016L5 3.707c.002-.002.013-.002.016 0l.699.669a6.56 6.56 0 01-1.339 1.339l-.669-.699zm3.31 8.966a6.51 6.51 0 01-6-6c1.808-.122 3.492-.885 4.786-2.179S7.86 2.826 7.982 1.017a6.51 6.51 0 016 6c-1.808.122-3.492.885-4.786 2.179s-2.057 2.977-2.179 4.786zm9.702 4.967l-2.014-2.389a19.304 19.304 0 00-.689-.767l-4.823-5.042a6.548 6.548 0 011.558-1.558l5.042 4.823c.205.196.549.505.767.689l2.389 2.014-2.23 2.23z"
  })));
}
LiniAxe2.propTypes = {
  size: PropTypes.number.isRequired
};