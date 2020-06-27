import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCalculator2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCalculator2';

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
    d: "M16.5 20h-14c-.827 0-1.5-.673-1.5-1.5v-17C1 .673 1.673 0 2.5 0h14c.827 0 1.5.673 1.5 1.5v17c0 .827-.673 1.5-1.5 1.5zM2.5 1a.5.5 0 00-.5.5v17a.5.5 0 00.5.5h14a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5h-14z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 7h-12a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h12a.5.5 0 01.5.5v4a.5.5 0 01-.5.5zM4 6h11V3H4v3zM15.5 8h-12a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h12a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-.5 3h-2V9h2v2zm-8 1h2v2H7v-2zm-1 2H4v-2h2v2zm1-3V9h2v2H7zm2 4v2H7v-2h2zm1 0h2v2h-2v-2zm2-1h-2v-2h2v2zm-2-3V9h2v2h-2zM6 9v2H4V9h2zm-2 6h2v2H4v-2zm9 2v-5h2v5h-2z"
  })));
}
LiniCalculator2.propTypes = {
  size: PropTypes.number.isRequired
};