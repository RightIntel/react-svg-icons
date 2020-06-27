import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPizza({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPizza';

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
    d: "M19.95 9.332a.502.502 0 00-.257-.284l-2.711-1.286L.714.048a.5.5 0 00-.666.666l7.714 16.268 1.285 2.711a.502.502 0 00.667.238A21.61 21.61 0 0019.93 9.715a.497.497 0 00.019-.382zM14 8c0 .551-.449 1-1 1s-1-.449-1-1 .449-1 1-1a.434.434 0 00.036-.002l.711.337A.988.988 0 0114 8zm-2.209-1.592A1.999 1.999 0 1015 8a.459.459 0 00-.006-.073l1.101.522a17.596 17.596 0 01-7.646 7.646l-1.962-4.138a3.004 3.004 0 003.514-2.956c0-1.654-1.346-3-3-3-.788 0-1.532.303-2.096.853-.207.202-.38.429-.519.674L1.553 1.553l10.239 4.855zM5.007 8.837A1.987 1.987 0 017 7c1.103 0 2 .897 2 2a2.002 2.002 0 01-3.135 1.647l-.858-1.81zm4.728 9.97l-.858-1.809a18.593 18.593 0 008.121-8.121l1.809.858a20.609 20.609 0 01-9.072 9.072z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 5h1a.5.5 0 000-1h-1a.5.5 0 000 1zM11.5 13a.5.5 0 00.5-.5v-1a.5.5 0 00-1 0v1a.5.5 0 00.5.5z"
  })));
}
LiniPizza.propTypes = {
  size: PropTypes.number.isRequired
};