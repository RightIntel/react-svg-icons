import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBubbleAttachment({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBubbleAttachment';

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
    d: "M.5 19a.5.5 0 01-.257-.929 6.211 6.211 0 002.641-3.179C1.046 13.485 0 11.538 0 9.5c0-1.029.258-2.026.768-2.964.486-.894 1.18-1.695 2.061-2.381C4.616 2.765 6.985 1.999 9.5 1.999s4.884.766 6.671 2.156c.881.685 1.575 1.486 2.061 2.381.51.937.768 1.934.768 2.964s-.258 2.026-.768 2.964c-.486.894-1.18 1.695-2.061 2.381-1.787 1.39-4.156 2.156-6.671 2.156-1.033 0-2.047-.129-3.016-.385a20.74 20.74 0 01-2.189 1.27c-1.488.74-2.764 1.115-3.794 1.115zm9-16C4.813 3 1 5.916 1 9.5c0 1.815 1.005 3.562 2.756 4.792.172.121.25.336.196.539-.117.436-.515 1.633-1.58 2.788 1.302-.456 2.704-1.247 3.739-1.959a.499.499 0 01.421-.069C7.48 15.862 8.479 16 9.5 16c4.687 0 8.5-2.916 8.5-6.5S14.187 3 9.5 3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 13h-4C5.57 13 4 11.43 4 9.5S5.57 6 7.5 6h5C13.878 6 15 7.122 15 8.5S13.878 11 12.5 11h-4C7.673 11 7 10.327 7 9.5S7.673 8 8.5 8h2a.5.5 0 010 1h-2a.5.5 0 000 1h4c.827 0 1.5-.673 1.5-1.5S13.327 7 12.5 7h-5C6.122 7 5 8.122 5 9.5S6.122 12 7.5 12h4a.5.5 0 010 1z"
  })));
}
LiniBubbleAttachment.propTypes = {
  size: PropTypes.number.isRequired
};