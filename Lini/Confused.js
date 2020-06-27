import React from 'react';
import PropTypes from 'prop-types';
export default function LiniConfused({
  size,
  ...props
}) {
  let className = 'Component Lini LiniConfused';

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
    d: "M9.5 20c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501c0-2.538.988-4.923 2.782-6.718S6.962 1 9.5 1c2.538 0 4.923.988 6.718 2.783S19 7.963 19 10.501s-.988 4.923-2.782 6.717A9.438 9.438 0 019.5 20zm0-18C4.813 2 1 5.813 1 10.5S4.813 19 9.5 19s8.5-3.813 8.5-8.5S14.187 2 9.5 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 8C5.673 8 5 7.327 5 6.5S5.673 5 6.5 5 8 5.673 8 6.5 7.327 8 6.5 8zm0-2a.5.5 0 100 1 .5.5 0 000-1zM12.5 8c-.827 0-1.5-.673-1.5-1.5S11.673 5 12.5 5s1.5.673 1.5 1.5S13.327 8 12.5 8zm0-2a.5.5 0 100 1 .5.5 0 000-1zM5.5 15.001A.501.501 0 015 14.5c0-.063.008-.635.303-1.224C5.715 12.453 6.495 12 7.5 12c1.207 0 1.843.636 2.354 1.146.477.477.854.854 1.646.854.622 0 1.044-.228 1.29-.698.203-.389.21-.8.21-.805a.5.5 0 111 .002c0 .063-.008.635-.303 1.224-.412.823-1.192 1.276-2.197 1.276-1.207 0-1.843-.636-2.354-1.146-.477-.477-.854-.854-1.646-.854-.622 0-1.044.228-1.29.698-.203.389-.21.8-.21.805a.5.5 0 01-.5.499z"
  })));
}
LiniConfused.propTypes = {
  size: PropTypes.number.isRequired
};