import React from 'react';
import PropTypes from 'prop-types';
export default function LiniApple({
  size,
  ...props
}) {
  let className = 'Component Lini LiniApple';

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
    d: "M16.215 5.318C15.2 4.444 13.781 4 12 4c-.585 0-1.22.179-1.729.323l-.269.075A3.504 3.504 0 0113.5 1a.5.5 0 000-1 4.506 4.506 0 00-4.499 4.399l-.272-.076C8.219 4.179 7.585 4 7 4c-1.782 0-3.2.443-4.215 1.318C1.601 6.338 1 7.913 1 10c0 2.143.624 4.588 1.67 6.539C3.866 18.771 5.404 20 7 20c.517 0 .933-.134 1.336-.264.375-.121.73-.236 1.164-.236s.789.114 1.164.236c.402.13.819.264 1.336.264 1.596 0 3.134-1.229 4.33-3.461C17.376 14.587 18 12.143 18 10c0-2.087-.6-3.662-1.785-4.682zm-.767 10.749C14.449 17.931 13.192 19 12 19c-.36 0-.67-.1-1.028-.216-.412-.133-.88-.284-1.472-.284s-1.059.151-1.472.284C7.669 18.9 7.359 19 7 19c-1.193 0-2.45-1.069-3.448-2.933C2.58 14.254 2 11.986 2 10c0-1.783.484-3.103 1.437-3.924C4.266 5.362 5.464 5 7 5c.447 0 .984.152 1.458.286.408.115.759.214 1.042.214s.635-.099 1.042-.214C11.016 5.152 11.553 5 12 5c1.535 0 2.734.362 3.563 1.076C16.517 6.897 17 8.218 17 10c0 1.986-.58 4.254-1.552 6.067z"
  })));
}
LiniApple.propTypes = {
  size: PropTypes.number.isRequired
};