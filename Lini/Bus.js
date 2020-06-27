import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBus({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBus';

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
    d: "M6.5 13h-4a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v3a.5.5 0 01-.5.5zM3 12h3v-2H3v2zM12.5 13h-4a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v3a.5.5 0 01-.5.5zM9 12h3v-2H9v2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.854 13.439l-.717-5.02A1.682 1.682 0 0017.501 7h-15a2.503 2.503 0 00-2.5 2.5v8c0 .827.673 1.5 1.5 1.5h.769a2 2 0 003.462 0h7.538a2 2 0 003.462 0h1.769c.827 0 1.5-.673 1.5-1.5v-2c0-.571-.066-1.495-.146-2.061zM18.638 12H15v-2h3.352l.286 2zM2.5 8h15a.69.69 0 01.646.561l.063.439H14.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h4.281l.083.581c.018.123.034.266.05.419H1.001V9.5c0-.827.673-1.5 1.5-1.5zM4 19c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm11 0c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm3.5-1H17c0-1.103-.897-2-2-2s-2 .897-2 2H6c0-1.103-.897-2-2-2s-2 .897-2 2h-.5a.5.5 0 01-.5-.5V15h17.987c.008.184.013.356.013.5v.5h-.5a.5.5 0 000 1h.5v.5a.5.5 0 01-.5.5z"
  })));
}
LiniBus.propTypes = {
  size: PropTypes.number.isRequired
};