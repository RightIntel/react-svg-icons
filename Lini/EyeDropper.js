function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniEyeDropper({
  size,
  ...props
}) {
  let className = 'Component Lini LiniEyeDropper';

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
    d: "M19 3.975c0-.795-.309-1.542-.871-2.104S16.82 1 16.025 1c-.795 0-1.542.309-2.104.871l-3.422 3.422-.646-.646a.5.5 0 00-.707.707L10.292 6.5l-7.115 7.115a2.274 2.274 0 00-.658 1.443A2.003 2.003 0 00.999 17c0 1.103.897 2 2 2 .937 0 1.726-.648 1.942-1.52a2.271 2.271 0 001.443-.658l7.115-7.115 1.146 1.146a.498.498 0 00.708 0 .5.5 0 000-.707l-.646-.646 3.422-3.422A2.955 2.955 0 0019 3.974zM5.678 16.115c-.287.287-.698.42-1.099.355a.497.497 0 00-.579.506V17c0 .551-.449 1-1 1s-1-.449-1-1 .449-1 1-1h.024a.5.5 0 00.505-.579 1.274 1.274 0 01.355-1.099l7.115-7.115L12.792 9l-7.115 7.115zM17.422 5.371L14 8.793 11.207 6l3.422-3.422c.373-.373.869-.578 1.396-.578s1.023.205 1.396.578.578.869.578 1.396-.205 1.023-.578 1.396z"
  })));
}
LiniEyeDropper.propTypes = {
  size: PropTypes.number.isRequired
};