import React from 'react';
import PropTypes from 'prop-types';
export default function LiniAlarmRemove({
  size,
  ...props
}) {
  let className = 'Component Lini LiniAlarmRemove';

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
    d: "M18.442 4.591a.5.5 0 01-.49-.598 2.503 2.503 0 00-3.313-2.841.5.5 0 01-.345-.939 3.504 3.504 0 014.638 3.976.5.5 0 01-.49.402zM.56 4.605a.499.499 0 01-.489-.4A3.504 3.504 0 014.705.213a.5.5 0 01-.345.939 2.503 2.503 0 00-3.31 2.852.5.5 0 01-.491.6zM16.32 17.113A9.436 9.436 0 0019 10.5c0-2.538-.988-4.923-2.782-6.717S12.038 1 9.5 1c-2.538 0-4.923.988-6.717 2.783S.001 7.963.001 10.5c0 2.489.951 4.831 2.68 6.613L.647 19.147a.5.5 0 00.708.707l2.059-2.06C5.119 19.222 7.25 20 9.501 20s4.382-.778 6.087-2.206l2.059 2.059a.5.5 0 10.707-.707l-2.034-2.034zM9.5 19C4.813 19 1 15.187 1 10.5S4.813 2 9.5 2c4.687 0 8.5 3.813 8.5 8.5S14.187 19 9.5 19z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 11h-8a.5.5 0 010-1h8a.5.5 0 010 1z"
  })));
}
LiniAlarmRemove.propTypes = {
  size: PropTypes.number.isRequired
};