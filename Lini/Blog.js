import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBlog({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBlog';

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
    d: "M10.354 12.146l-2.5-2.5a.5.5 0 00-.497-.125l-5 1.5a.5.5 0 00-.341.358l-2 8a.498.498 0 00.607.606l8-2a.5.5 0 00.358-.341l1.5-5a.5.5 0 00-.125-.497zm-2.251 4.938L2.13 18.577l2.724-2.724A1.502 1.502 0 007 14.5c0-.827-.673-1.5-1.5-1.5a1.502 1.502 0 00-1.353 2.146L1.423 17.87l1.493-5.973 4.442-1.332 2.078 2.078-1.332 4.442zM5 14.5a.5.5 0 111 0 .5.5 0 01-1 0zM13.5 12a.5.5 0 01-.5-.5C13 9.019 10.981 7 8.5 7a.5.5 0 010-1c3.033 0 5.5 2.467 5.5 5.5a.5.5 0 01-.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 12a.5.5 0 01-.5-.5C16 7.364 12.636 4 8.5 4a.5.5 0 010-1c2.27 0 4.405.884 6.01 2.49S17 9.23 17 11.5a.5.5 0 01-.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.5 12a.5.5 0 01-.5-.5C19 5.71 14.29 1 8.5 1a.5.5 0 010-1 11.46 11.46 0 018.131 3.368 11.46 11.46 0 013.368 8.131.5.5 0 01-.5.5z"
  })));
}
LiniBlog.propTypes = {
  size: PropTypes.number.isRequired
};