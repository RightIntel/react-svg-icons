import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSortAmountAsc({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSortAmountAsc';

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
    d: "M8.854 14.646a.5.5 0 00-.707 0l-3.146 3.146V.499a.5.5 0 00-1 0v17.293L.855 14.646a.5.5 0 00-.707.707l4 4a.498.498 0 00.708 0l4-4a.5.5 0 000-.707zM13.5 5h-2a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5zM12 4h1V3h-1v1zM15.5 9h-4a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v2a.5.5 0 01-.5.5zM12 8h3V7h-3v1zM17.5 13h-6a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h6a.5.5 0 01.5.5v2a.5.5 0 01-.5.5zM12 12h5v-1h-5v1zM19.5 17h-8a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v2a.5.5 0 01-.5.5zM12 16h7v-1h-7v1z"
  })));
}
LiniSortAmountAsc.propTypes = {
  size: PropTypes.number.isRequired
};