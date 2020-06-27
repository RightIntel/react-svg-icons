import React from 'react';
import PropTypes from 'prop-types';
export default function LiniAlarm2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniAlarm2';

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
    d: "M15.129 7.25a.5.5 0 00-.683-.183l-4.92 2.841-3.835-2.685a.5.5 0 00-.573.819l4.096 2.868.003.002.026.016.007.004.027.014.006.003.031.014.019.007.014.005.02.006.013.003.02.005.014.003.019.003.018.002.016.002a.409.409 0 00.092-.002h.001a.53.53 0 00.055-.01l.004-.001a.333.333 0 00.058-.019.396.396 0 00.047-.021l.009-.005.017-.009 5.196-3a.5.5 0 00.183-.683z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.354 17.146a.53.53 0 00-.035-.032 9.436 9.436 0 002.682-6.614c0-2.538-.988-4.923-2.782-6.718S12.039 1 9.501 1s-4.923.988-6.717 2.782S.002 7.962.002 10.5c0 2.489.952 4.832 2.682 6.614a.53.53 0 00-.035.032l-2 2a.5.5 0 00.708.707l2-2a.538.538 0 00.054-.064C5.117 19.22 7.25 20 9.504 20s4.387-.78 6.093-2.211a.47.47 0 00.054.064l2 2a.497.497 0 00.707-.001.5.5 0 000-.707l-2-2zM1 10.5C1 5.813 4.813 2 9.5 2S18 5.813 18 10.5c0 4.687-3.813 8.5-8.5 8.5S1 15.187 1 10.5zM.56 4.605a.499.499 0 01-.489-.4A3.504 3.504 0 014.705.213a.5.5 0 01-.345.939 2.503 2.503 0 00-3.31 2.852.5.5 0 01-.491.6zM18.44 4.605a.501.501 0 01-.491-.6 2.503 2.503 0 00-3.31-2.852.5.5 0 01-.345-.939 3.504 3.504 0 014.635 3.992.5.5 0 01-.489.4z"
  })));
}
LiniAlarm2.propTypes = {
  size: PropTypes.number.isRequired
};