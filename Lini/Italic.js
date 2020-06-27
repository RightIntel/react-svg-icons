import React from 'react';
import PropTypes from 'prop-types';
export default function LiniItalic({
  size,
  ...props
}) {
  let className = 'Component Lini LiniItalic';

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
    d: "M15.5 2h-8a.5.5 0 000 1h3.39l-2.8 14H4.5a.5.5 0 000 1h8a.5.5 0 000-1H9.11l2.8-14h3.59a.5.5 0 000-1z"
  })));
}
LiniItalic.propTypes = {
  size: PropTypes.number.isRequired
};