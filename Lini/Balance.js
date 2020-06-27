import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBalance({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBalance';

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
    d: "M18.985 13.379l-3-12A.501.501 0 0015.5 1H3.511a.531.531 0 00-.185.031.5.5 0 00-.314.357L.014 13.378a.495.495 0 00.001.242H.014c.016.063.169.634.671 1.208.467.534 1.335 1.171 2.814 1.171s2.346-.637 2.814-1.171c.502-.574.656-1.145.671-1.208h-.001a.495.495 0 00.001-.242L4.139 1.999h10.719l-2.845 11.379a.495.495 0 00.001.242h-.001c.016.063.169.634.671 1.208.467.534 1.335 1.171 2.814 1.171s2.346-.637 2.814-1.171c.502-.574.656-1.145.671-1.208h-.001a.495.495 0 00.001-.242zM3.5 15c-1.214 0-1.865-.542-2.198-1h4.397c-.333.458-.984 1-2.198 1zm2.36-2H1.141l2.36-9.438L5.861 13zm9.64-9.438L17.86 13h-4.719l2.36-9.438zM15.5 15c-1.214 0-1.865-.542-2.198-1h4.397c-.333.458-.984 1-2.198 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 18h-5.46l.959-12.462a.502.502 0 00-.024-.196l-1-3a.5.5 0 00-.948 0l-1 3a.502.502 0 00-.024.196L8.962 18h-5.46a.5.5 0 000 1h12a.5.5 0 000-1zm-6-13.919l.494 1.481L9.5 11.98l-.494-6.418.494-1.481z"
  })));
}
LiniBalance.propTypes = {
  size: PropTypes.number.isRequired
};