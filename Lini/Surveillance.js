import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSurveillance({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSurveillance';

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
    d: "M13.006 5.5c0 .276-.225.5-.503.5S12 5.776 12 5.5s.225-.5.503-.5.503.224.503.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.5 14a.5.5 0 00-.5.5V16h-3.5c-.827 0-1.5-.673-1.5-1.5v-2.293l2.647-2.646a1.501 1.501 0 000-2.121l-.441-.441a1.502 1.502 0 00-.059-2.059l-2.586-2.586c-.283-.283-.659-.438-1.061-.438s-.778.156-1.061.438L.646 13.147a.499.499 0 00.354.854h2.793l-.646.646a.5.5 0 000 .707l2 2a.498.498 0 00.708 0l.646-.646.439.439a1.498 1.498 0 002.122 0l3.939-3.939v1.293c0 1.378 1.122 2.5 2.5 2.5h3.5v1.5a.5.5 0 001 0v-4a.5.5 0 00-.5-.5zM12.146 3.061c.094-.094.219-.145.354-.145s.26.052.354.145l2.586 2.586a.5.5 0 010 .707L8.794 13H2.208l9.939-9.939zM5.5 16.293L4.207 15l.293-.293L5.793 16l-.293.293zm2.854.146a.5.5 0 01-.707 0L5.208 14h3.793c.133 0 .26-.053.354-.146l6.146-6.146.439.439a.5.5 0 010 .707L8.354 16.44z"
  })));
}
LiniSurveillance.propTypes = {
  size: PropTypes.number.isRequired
};