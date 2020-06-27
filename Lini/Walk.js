import React from 'react';
import PropTypes from 'prop-types';
export default function LiniWalk({
  size,
  ...props
}) {
  let className = 'Component Lini LiniWalk';

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
    d: "M9 4c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zM12.5 20a.5.5 0 01-.464-.314l-1.942-4.856-2.871-1.914a.501.501 0 01-.218-.487l.865-6.055-2.941 1.47-.944 3.777a.5.5 0 11-.97-.242l1-4a.498.498 0 01.261-.326l4-2a.5.5 0 01.719.518l-.955 6.688 2.738 1.825a.502.502 0 01.187.23l2 5A.5.5 0 0112.5 20z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 20a.5.5 0 01-.416-.777l1.983-2.974.986-1.972a.5.5 0 01.895.447l-1 2a.474.474 0 01-.031.054l-2 3a.501.501 0 01-.417.223zM15.5 10a.515.515 0 01-.122-.015l-4-1a.492.492 0 01-.232-.132l-1-1a.5.5 0 01.707-.707l.902.902 3.866.966a.5.5 0 01-.121.985z"
  })));
}
LiniWalk.propTypes = {
  size: PropTypes.number.isRequired
};