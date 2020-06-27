import React from 'react';
import PropTypes from 'prop-types';
export default function LiniThumbsUp3({
  size,
  ...props
}) {
  let className = 'Component Lini LiniThumbsUp3';

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
    d: "M17 12c0-.871-.56-1.614-1.339-1.887A2.002 2.002 0 0014 7h-3V2c0-1.103-.897-2-2-2S7 .897 7 2v5c-.124 0-1.225.018-1.854.646-.495.495-.865 1.091-1.131 1.823-.342.938-.515 2.126-.515 3.531 0 1.211.178 2.56.501 3.798.186.712.581 1.991 1.145 2.555.628.628 1.73.646 1.854.646h6a2.002 2.002 0 001.661-3.113A2.003 2.003 0 0016 14.999a1.99 1.99 0 00-.339-1.113A2.003 2.003 0 0017 11.999zM8 2c0-.551.449-1 1-1s1 .449 1 1v5H8V2zm7 11h-4.5a.5.5 0 000 1H14c.551 0 1 .449 1 1s-.449 1-1 1h-4a.5.5 0 000 1h3c.551 0 1 .449 1 1s-.449 1-1 1H7.001c-.207-.001-.863-.069-1.148-.353-.545-.545-1.354-3.156-1.354-5.647 0-3.293 1.019-4.312 1.354-4.646.285-.285.94-.352 1.148-.354H14c.551 0 1 .449 1 1s-.449 1-1 1h-3.5a.5.5 0 000 1H15c.551 0 1 .449 1 1s-.449 1-1 1z"
  })));
}
LiniThumbsUp3.propTypes = {
  size: PropTypes.number.isRequired
};