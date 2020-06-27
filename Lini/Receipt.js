import React from 'react';
import PropTypes from 'prop-types';
export default function LiniReceipt({
  size,
  ...props
}) {
  let className = 'Component Lini LiniReceipt';

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
    d: "M17.5 20a.495.495 0 01-.224-.053l-1.776-.888-1.776.888a.502.502 0 01-.447 0l-1.776-.888-1.776.888a.502.502 0 01-.447 0l-1.776-.888-1.776.888a.502.502 0 01-.447 0l-1.776-.888-1.776.888a.5.5 0 01-.723-.447v-18a.5.5 0 01.276-.447l2-1a.502.502 0 01.447 0l1.776.888L7.279.053a.502.502 0 01.447 0l1.776.888 1.776-.888a.502.502 0 01.447 0l1.776.888 1.776-.888a.502.502 0 01.447 0l2 1A.5.5 0 0118 1.5v18a.5.5 0 01-.5.5zm-6-2c.077 0 .153.018.224.053l1.776.888 1.776-.888a.502.502 0 01.447 0l1.276.638V1.809l-1.5-.75-1.776.888a.502.502 0 01-.447 0L11.5 1.059l-1.776.888a.502.502 0 01-.447 0l-1.776-.888-1.776.888a.502.502 0 01-.447 0l-1.776-.888-1.5.75v16.882l1.276-.638a.502.502 0 01.447 0l1.776.888 1.776-.888a.502.502 0 01.447 0l1.776.888 1.776-.888A.502.502 0 0111.5 18z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 13H8v-1h3.5a.5.5 0 000-1H10v-.5a.5.5 0 00-1 0v.5H7.5a.5.5 0 00-.5.5v2a.5.5 0 00.5.5H11v1H7.5a.5.5 0 000 1H9v.5a.5.5 0 001 0V16h1.5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5zM12.5 5h-6a.5.5 0 010-1h6a.5.5 0 010 1zM14.5 7h-10a.5.5 0 010-1h10a.5.5 0 010 1zM14.5 9h-10a.5.5 0 010-1h10a.5.5 0 010 1z"
  })));
}
LiniReceipt.propTypes = {
  size: PropTypes.number.isRequired
};