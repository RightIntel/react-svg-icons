function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDeskTape({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDeskTape';

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
    d: "M18.659 8.027v-.001L7.376 4.244a3.69 3.69 0 00-.21-.07l-.007-.002a3.999 3.999 0 00-5.047 2.885A23.099 23.099 0 00.5 7.001a.5.5 0 00-.5.5c0 1.091.264 3.12.769 4.887.685 2.397 1.604 3.613 2.731 3.613h11.149c1.391 0 2.467-1.651 3.126-3.037C18.496 11.446 19 9.611 19 8.5a.498.498 0 00-.341-.473zM6 5c.301 0 .591.045.865.127l.175.059a3.005 3.005 0 011.868 3.553 23.66 23.66 0 00-.939-.387 2.002 2.002 0 00-3.324-1.823 1.988 1.988 0 00-.516.765c-.325-.055-.66-.103-1.006-.144A2.998 2.998 0 016.001 5zm-.86 2.492C5.316 7.197 5.639 7 6 7c.551 0 1 .449 1 1v.005a19.584 19.584 0 00-1.86-.513zm11.732 5.042C16.149 14.055 15.298 15 14.65 15H3.5c-.351 0-.678-.4-.89-.736-.321-.508-.617-1.232-.879-2.152a21.028 21.028 0 01-.714-4.107c.49.011.96.037 1.41.076l.039.007a.685.685 0 00.064.003 19.372 19.372 0 011.93.275 18.277 18.277 0 012.765.77 22.018 22.018 0 011.773.739l.009.003c.56.26 1.081.524 1.576.774 1.427.723 2.659 1.347 3.918 1.347 1.16 0 2.202-.41 3.048-1.194a13.76 13.76 0 01-.677 1.728zm.348-2.829c-.727.86-1.642 1.295-2.72 1.295-1.02 0-2.1-.547-3.466-1.239a62.05 62.05 0 00-1.205-.599c.114-.375.172-.764.172-1.162 0-.729-.196-1.413-.538-2.002l8.36 2.802a4.897 4.897 0 01-.601.905z"
  })));
}
LiniDeskTape.propTypes = {
  size: PropTypes.number.isRequired
};