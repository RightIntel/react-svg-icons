import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDream({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDream';

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
    d: "M9.5 20c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501c0-2.538.988-4.923 2.782-6.718S6.962 1 9.5 1c2.538 0 4.923.988 6.718 2.783S19 7.963 19 10.501s-.988 4.923-2.782 6.717A9.438 9.438 0 019.5 20zm0-18C4.813 2 1 5.813 1 10.5S4.813 19 9.5 19c4.687 0 8.5-3.813 8.5-8.5S14.187 2 9.5 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 17A6.508 6.508 0 013 10.5a.5.5 0 011 0C4 13.533 6.467 16 9.5 16s5.5-2.467 5.5-5.5a.5.5 0 011 0c0 3.584-2.916 6.5-6.5 6.5zM7.724 6.053a.5.5 0 00-.671.224c-.004.007-.381.724-1.053.724-.671 0-1.05-.719-1.054-.726l.001.003a.5.5 0 10-.894.446.156.156 0 00.006.011l.003.006c.083.157.71 1.26 1.938 1.26 1.294 0 1.921-1.224 1.947-1.276a.5.5 0 00-.224-.671zM14.724 6.053a.5.5 0 00-.671.224c-.004.007-.381.724-1.053.724-.671 0-1.05-.719-1.054-.726l.001.003a.5.5 0 10-.894.446.156.156 0 00.006.011l.003.006c.083.157.71 1.26 1.938 1.26 1.294 0 1.921-1.224 1.947-1.276a.5.5 0 00-.224-.671z"
  })));
}
LiniDream.propTypes = {
  size: PropTypes.number.isRequired
};