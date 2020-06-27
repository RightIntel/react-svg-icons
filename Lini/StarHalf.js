function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniStarHalf({
  size,
  ...props
}) {
  let className = 'Component Lini LiniStarHalf';

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
    d: "M15.5 19a.497.497 0 01-.239-.061l-3-1.636a.5.5 0 01.478-.878l2.098 1.145-.165-.987a.5.5 0 01.986-.164l.333 2a.503.503 0 01-.493.583zM14.833 15a.5.5 0 01-.493-.418l-.333-2a.497.497 0 01.14-.436l1-1a.5.5 0 01.707.707l-.818.818.291 1.746a.5.5 0 01-.494.582zM17.5 10a.5.5 0 01-.354-.853l.313-.313-2.042-.34a.5.5 0 01.164-.986l3 .5a.5.5 0 01.271.847l-1 1a.5.5 0 01-.354.147zM13.501 8.167a.473.473 0 01-.083-.007l-1-.167a.5.5 0 01-.365-.27l-1-2a.5.5 0 01.895-.447l.886 1.772.749.125a.5.5 0 01-.082.993z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 19a.499.499 0 01-.493-.583l.958-5.746-3.818-3.818a.501.501 0 01.271-.847l5.749-.958 2.386-4.772a.5.5 0 01.894 0l.5 1a.5.5 0 01-.895.447l-.053-.106-2.053 4.106a.503.503 0 01-.365.27l-5.042.84 3.313 3.313a.502.502 0 01.14.436l-.831 4.987 4.599-2.508a.502.502 0 01.479 0l.5.273a.5.5 0 11-.479.877l-.261-.142-5.261 2.869a.497.497 0 01-.239.061z"
  })));
}
LiniStarHalf.propTypes = {
  size: PropTypes.number.isRequired
};