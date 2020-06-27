import React from 'react';
import PropTypes from 'prop-types';
export default function LiniEvil({
  size,
  ...props
}) {
  let className = 'Component Lini LiniEvil';

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
    d: "M7.853 6.854a.498.498 0 00-.13-.801l-2-1a.5.5 0 00-.447.895l.49.245a1.501 1.501 0 00.733 2.808 1.502 1.502 0 001.353-2.146zM6.5 8a.5.5 0 110-1 .5.5 0 010 1zM13.233 6.192l.49-.245a.5.5 0 00-.447-.895l-2 1a.5.5 0 00-.13.801 1.502 1.502 0 001.353 2.146c.827 0 1.5-.673 1.5-1.5 0-.561-.31-1.05-.767-1.308zM12.5 8a.5.5 0 110-1 .5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.613 5.552c.378-.566.707-1.494 1-2.816.252-1.138.378-2.132.383-2.174a.5.5 0 00-.887-.374c-.49.616-1.887 2.205-2.88 2.732C13.588 1.674 11.596 1 9.5 1s-4.088.675-5.729 1.92C2.779 2.393 1.382.804.891.188a.5.5 0 00-.887.374c.005.042.131 1.036.383 2.174.293 1.322.622 2.25 1 2.816A9.441 9.441 0 000 10.5c0 2.538.988 4.923 2.783 6.717s4.18 2.782 6.717 2.782 4.923-.988 6.717-2.782a9.438 9.438 0 002.782-6.717 9.432 9.432 0 00-1.387-4.948zm.106-3.412c-.19.927-.446 1.881-.739 2.501a9.487 9.487 0 00-.949-1.04c.582-.382 1.185-.942 1.687-1.462zm-16.438.001c.502.52 1.105 1.079 1.687 1.461a9.802 9.802 0 00-.949 1.04c-.292-.62-.548-1.574-.739-2.501zM9.5 19C4.813 19 1 15.187 1 10.5S4.813 2 9.5 2 18 5.813 18 10.5 14.187 19 9.5 19z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 16c-.88 0-1.721-.202-2.499-.599a5.56 5.56 0 01-1.901-1.6.5.5 0 01.799-.601C6.758 14.344 8.071 15 9.5 15s2.741-.656 3.601-1.8a.5.5 0 11.799.601 5.549 5.549 0 01-1.901 1.6A5.435 5.435 0 019.5 16z"
  })));
}
LiniEvil.propTypes = {
  size: PropTypes.number.isRequired
};