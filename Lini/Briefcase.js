import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBriefcase({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBriefcase';

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
    d: "M18.5 5H14V3.5c0-.827-.673-1.5-1.5-1.5h-5C6.673 2 6 2.673 6 3.5V5H1.5C.673 5 0 5.673 0 6.5v11c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-11c0-.827-.673-1.5-1.5-1.5zM7 3.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V5H7V3.5zM1.5 6h17a.5.5 0 01.5.5V14h-2v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v.5H6v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v.5H1V6.5a.5.5 0 01.5-.5zM16 14v1h-1v-1h1zM5 14v1H4v-1h1zm13.5 4h-17a.5.5 0 01-.5-.5V15h2v.5a.5.5 0 00.5.5h2a.5.5 0 00.5-.5V15h8v.5a.5.5 0 00.5.5h2a.5.5 0 00.5-.5V15h2v2.5a.5.5 0 01-.5.5z"
  })));
}
LiniBriefcase.propTypes = {
  size: PropTypes.number.isRequired
};