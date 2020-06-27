function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniShovel({
  size,
  ...props
}) {
  let className = 'Component Lini LiniShovel';

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
    d: "M19.561 3.439l-3-3C16.278.156 15.901 0 15.5 0s-.777.156-1.061.439A1.49 1.49 0 0014 1.5v2.293l-4 4-.146-.146a.5.5 0 00-.707 0l-.74.74-1.939-1.939c-.283-.283-.659-.438-1.061-.438s-.778.156-1.061.438L1.647 9.147C.631 10.163.001 11.246.001 13.501c0 2.058.984 5.032 1.026 5.158.05.149.167.266.316.316.126.042 3.101 1.026 5.158 1.026 2.254 0 3.337-.63 4.354-1.646l2.699-2.699c.283-.283.438-.659.438-1.061s-.156-.778-.438-1.061l-1.939-1.939.74-.74a.5.5 0 000-.708l-.146-.146 4-4h2.293c.401 0 .777-.156 1.061-.439s.439-.66.439-1.061-.156-.777-.439-1.061zM9.5 8.707l1.793 1.793-3.211 3.211c-.188.188-.439.291-.707.291s-.519-.103-.707-.291l-.379-.379a1 1 0 010-1.414L9.5 8.707zm3.346 5.533a.5.5 0 010 .707l-2.699 2.699C9.269 18.524 8.428 19 6.501 19c-1.577 0-3.863-.668-4.602-.898-.23-.739-.898-3.023-.898-4.602 0-1.927.476-2.769 1.354-3.646l2.699-2.699a.5.5 0 01.707 0L7.7 9.094l-2.117 2.117c-.78.78-.78 2.049 0 2.828l.379.379c.377.377.879.584 1.414.584s1.038-.207 1.414-.584l2.117-2.117 1.939 1.939zM10.707 8.5L14.5 4.707l.793.793L11.5 9.293l-.793-.793zm8.147-3.646A.498.498 0 0118.5 5h-2.293L15 3.793V1.5a.496.496 0 01.5-.5c.133 0 .259.052.354.146l3 3a.498.498 0 01-.001.708z"
  })));
}
LiniShovel.propTypes = {
  size: PropTypes.number.isRequired
};