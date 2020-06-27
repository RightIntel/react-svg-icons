function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBubblePicture({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBubblePicture';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M.5 19a.5.5 0 01-.257-.929 6.211 6.211 0 002.641-3.179C1.046 13.485 0 11.538 0 9.5c0-1.029.258-2.026.768-2.964.486-.894 1.18-1.695 2.061-2.381C4.616 2.765 6.985 1.999 9.5 1.999s4.884.766 6.671 2.156c.881.685 1.575 1.486 2.061 2.381.51.937.768 1.934.768 2.964s-.258 2.026-.768 2.964c-.486.894-1.18 1.695-2.061 2.381-1.787 1.39-4.156 2.156-6.671 2.156-1.033 0-2.047-.129-3.016-.385a20.74 20.74 0 01-2.189 1.27c-1.488.74-2.764 1.115-3.794 1.115zm9-16C4.813 3 1 5.916 1 9.5c0 1.815 1.005 3.562 2.756 4.792.172.121.25.336.196.539-.117.436-.515 1.633-1.58 2.788 1.302-.456 2.704-1.247 3.739-1.959a.499.499 0 01.421-.069C7.48 15.862 8.479 16 9.5 16c4.687 0 8.5-2.916 8.5-6.5S14.187 3 9.5 3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 11c-.827 0-1.5-.673-1.5-1.5S10.673 8 11.5 8s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 6h-10a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5zM5 11.675l1.266-1.582c.071-.089.16-.139.25-.141s.181.045.255.132l1.642 1.915H5v-.325zM14 12H9.73l-2.2-2.566c-.268-.313-.645-.488-1.031-.481s-.757.195-1.014.516L5 10.075V7h9v5z"
  })));
}
LiniBubblePicture.propTypes = {
  size: PropTypes.number.isRequired
};