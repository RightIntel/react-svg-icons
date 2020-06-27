import React from 'react';
import PropTypes from 'prop-types';
export default function LiniLan2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniLan2';

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
    d: "M19.5 10H15V4.5c0-.827-.673-1.5-1.5-1.5H11V.5a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h3.398c-.185.496-.575.968-.752 1.146A.499.499 0 003.5 10h4a.5.5 0 00.354-.854C7.688 8.98 7.291 8.501 7.103 8H10.5a.5.5 0 00.5-.5V4h2.5a.5.5 0 01.5.5V10H9.5a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h3.398c-.185.496-.575.968-.752 1.146A.499.499 0 0012.5 20h4a.5.5 0 00.354-.854c-.166-.166-.563-.645-.751-1.146H19.5a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5zM10 1v4H1V1h9zM6.484 9H4.516c.176-.289.341-.632.425-1h1.118c.084.368.248.711.425 1zM1 7V6h9v1H1zm18 4v4h-9v-4h9zm-3.516 8h-1.968c.176-.289.341-.632.425-1h1.118c.084.368.248.711.425 1zM10 17v-1h9v1h-9z"
  })));
}
LiniLan2.propTypes = {
  size: PropTypes.number.isRequired
};