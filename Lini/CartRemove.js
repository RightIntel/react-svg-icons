import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCartRemove({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCartRemove';

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
    d: "M17.598 4.01a.5.5 0 00-.588.392l-.804 4.019c-.064.321-.419.638-.745.666l-10.21.875-1.093-6.558A1.718 1.718 0 002.5 2h-1a.5.5 0 000 1h1c.307 0 .621.266.671.569l1.671 10.027A1.718 1.718 0 006.5 15h10a.5.5 0 000-1h-10a.724.724 0 01-.671-.569l-.413-2.479 10.131-.868c.768-.066 1.489-.71 1.64-1.466l.804-4.019a.5.5 0 00-.392-.588zM8 20c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zM15 20c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.854 3.646l-3-3a.5.5 0 00-.707 0l-3 3a.5.5 0 00.707.707L10 2.207V7.5a.5.5 0 001 0V2.207l2.146 2.146a.498.498 0 00.708 0 .5.5 0 000-.707z"
  })));
}
LiniCartRemove.propTypes = {
  size: PropTypes.number.isRequired
};