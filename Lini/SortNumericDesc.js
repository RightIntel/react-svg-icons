import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSortNumericDesc({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSortNumericDesc';

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
    d: "M8.854 14.646a.5.5 0 00-.707 0l-3.146 3.146V.499a.5.5 0 00-1 0v17.293L.855 14.646a.5.5 0 00-.707.707l4 4a.498.498 0 00.708 0l4-4a.5.5 0 000-.707zM17.5 8h-2c-1.483 0-2.363-1.151-2.4-1.2a.5.5 0 11.8-.6c.004.006.626.8 1.6.8h2c.827 0 1.5-.673 1.5-1.5V5h-3.5C14.122 5 13 3.878 13 2.5S14.122 0 15.5 0h2C18.878 0 20 1.122 20 2.5v3C20 6.878 18.878 8 17.5 8zm-2-7c-.827 0-1.5.673-1.5 1.5S14.673 4 15.5 4H19V2.5c0-.827-.673-1.5-1.5-1.5h-2zM17.5 12h-2a2.503 2.503 0 00-2.5 2.5v3c0 1.378 1.122 2.5 2.5 2.5h2c1.378 0 2.5-1.122 2.5-2.5v-3c0-1.378-1.122-2.5-2.5-2.5zM14 14.5c0-.827.673-1.5 1.5-1.5h2c.27 0 .524.072.743.198l-4.145 4.836A1.502 1.502 0 0114 17.5v-3zm5 3c0 .827-.673 1.5-1.5 1.5h-2c-.27 0-.524-.072-.743-.198l4.145-4.836a1.5 1.5 0 01.098.533v3z"
  })));
}
LiniSortNumericDesc.propTypes = {
  size: PropTypes.number.isRequired
};