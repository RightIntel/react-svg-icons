function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPickaxe({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPickaxe';

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
    d: "M19.971 16.676a.963.963 0 00-.343-.693l-2.423-2.043a18.434 18.434 0 01-.72-.647l-5.403-5.168.272-.272a.5.5 0 000-.708l-.359-.359C15.962 2.174 18.671.969 18.697.958a.5.5 0 00-.197-.959A18.41 18.41 0 007.692 3.484l-.338-.338a.5.5 0 00-.707 0l-.376.376-.563-.539a1.017 1.017 0 00-1.414.016L3.001 4.292a1.017 1.017 0 00-.016 1.414l.539.563-.376.376a.5.5 0 000 .707l.338.338A18.425 18.425 0 00.001 18.498a.5.5 0 00.96.197c.012-.027 1.216-2.736 5.828-7.703l.359.359a.5.5 0 00.708 0l.272-.272 5.168 5.403c.181.189.478.519.647.72l2.043 2.423a.961.961 0 00.732.344.965.965 0 00.68-.284l2.293-2.293a.96.96 0 00.283-.719zM3.707 5.016c-.002-.002-.002-.013 0-.016L5 3.707c.002-.002.013-.002.016 0l.547.523L4.23 5.563l-.523-.547zm3.422 4.906c-.096-.096-.226-.149-.361-.146s-.264.059-.357.157c-2.741 2.911-4.368 5.092-5.292 6.498A17.31 17.31 0 014.54 7.945a.499.499 0 00-.045-.655l-.289-.289 2.793-2.793.289.289a.499.499 0 00.655.045 17.31 17.31 0 018.486-3.421c-1.406.923-3.587 2.551-6.498 5.292a.502.502 0 00-.011.718l.371.371-2.793 2.793-.371-.371zm9.59 9.027l-2.014-2.389a19.304 19.304 0 00-.689-.767l-5.183-5.419 1.542-1.542 5.419 5.183c.205.196.549.505.767.689l2.389 2.014-2.23 2.23z"
  })));
}
LiniPickaxe.propTypes = {
  size: PropTypes.number.isRequired
};