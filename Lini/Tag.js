import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTag({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTag';

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
    d: "M7.5 19.085c-.401 0-.778-.156-1.061-.438l-5.086-5.086c-.283-.283-.438-.659-.438-1.061s.156-.778.438-1.061l8.586-8.586c.487-.487 1.372-.854 2.061-.854h4.5c.827 0 1.5.673 1.5 1.5v4.5c0 .688-.367 1.574-.853 2.061l-8.586 8.586a1.488 1.488 0 01-1.061.438zM12 3c-.415 0-1.06.267-1.353.561l-8.586 8.586c-.094.094-.145.219-.145.354s.052.26.145.353l5.086 5.086c.094.094.219.145.354.145s.26-.052.354-.145l8.586-8.586c.293-.293.561-.939.561-1.354V3.5a.5.5 0 00-.5-.5h-4.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 7c-.827 0-1.5-.673-1.5-1.5S13.673 4 14.5 4s1.5.673 1.5 1.5S15.327 7 14.5 7zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  })));
}
LiniTag.propTypes = {
  size: PropTypes.number.isRequired
};