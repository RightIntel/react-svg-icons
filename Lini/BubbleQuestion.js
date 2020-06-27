import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBubbleQuestion({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBubbleQuestion';

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
    d: "M9.5 12a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5c.827 0 1.5-.673 1.5-1.5S10.327 6 9.5 6 8 6.673 8 7.5a.5.5 0 01-1 0C7 6.122 8.122 5 9.5 5S12 6.122 12 7.5c0 1.207-.86 2.217-2 2.45v1.55a.5.5 0 01-.5.5zM9.5 14c-.132 0-.261-.053-.353-.147S9 13.631 9 13.5c0-.132.053-.261.147-.353S9.369 13 9.5 13a.498.498 0 01.5.5.5.5 0 01-.5.5z"
  })));
}
LiniBubbleQuestion.propTypes = {
  size: PropTypes.number.isRequired
};