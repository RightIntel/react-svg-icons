import React from 'react';
import PropTypes from 'prop-types';
export default function LiniThumbsDown3({
  size,
  ...props
}) {
  let className = 'Component Lini LiniThumbsDown3';

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
    d: "M17 8c0 .871-.56 1.614-1.339 1.887A2.002 2.002 0 0114 13h-3v5c0 1.103-.897 2-2 2s-2-.897-2-2v-5c-.124 0-1.225-.018-1.854-.646-.495-.495-.865-1.091-1.131-1.823C3.673 9.593 3.5 8.405 3.5 7c0-1.211.178-2.56.501-3.798.186-.712.581-1.991 1.145-2.555C5.774.019 6.876.001 7 .001h6a2.002 2.002 0 011.661 3.113A2.003 2.003 0 0116 5.001c0 .412-.125.794-.339 1.113A2.003 2.003 0 0117 8.001zM8 18c0 .551.449 1 1 1s1-.449 1-1v-5H8v5zm7-11h-4.5a.5.5 0 010-1H14c.551 0 1-.449 1-1s-.449-1-1-1h-4a.5.5 0 010-1h3c.551 0 1-.449 1-1s-.449-1-1-1H7.001c-.207.001-.863.069-1.148.353C5.308 1.898 4.499 4.509 4.499 7c0 3.293 1.019 4.312 1.354 4.646.285.285.94.352 1.148.354H14c.551 0 1-.449 1-1s-.449-1-1-1h-3.5a.5.5 0 010-1H15c.551 0 1-.449 1-1s-.449-1-1-1z"
  })));
}
LiniThumbsDown3.propTypes = {
  size: PropTypes.number.isRequired
};