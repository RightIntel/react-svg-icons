import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSaw({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSaw';

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
    d: "M13 3.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.844.501c-.196-.318-.561-.5-1-.5h-.008c-2.811 0-4.669 0-6.168.46-1.555.477-2.649 1.426-3.775 3.276L.267 17.388c-.438.694-.276 1.604.361 2.028l.75.5a.498.498 0 00.277.084h2.844a.5.5 0 00.5-.5V18h1.5a.5.5 0 00.5-.5V16h1.5a.5.5 0 00.5-.5V14h1.5a.5.5 0 00.5-.5V12h1.5a.5.5 0 00.5-.5V10h1.5a.5.5 0 00.5-.5V5c0-1.103.897-2 2-2h.844c.734 0 1.566-.514 1.895-1.171l.105-.211c.197-.393.197-.8 0-1.118zM12.5 9a.5.5 0 00-.5.5V11h-1.5a.5.5 0 00-.5.5V13H8.5a.5.5 0 00-.5.5V15H6.5a.5.5 0 00-.5.5V17H4.5a.5.5 0 00-.5.5V19H1.808l-.624-.416c-.187-.124-.219-.428-.071-.662L9.484 4.674 14 7.289v1.712h-1.5zm6.449-7.828l-.105.211c-.162.323-.639.618-1 .618H17c-1.654 0-3 1.346-3 3v1.133l-3.981-2.305c1.869-2.827 3.609-2.827 8.817-2.827h.008c.084 0 .131.017.148.027a.325.325 0 01-.042.144z"
  })));
}
LiniSaw.propTypes = {
  size: PropTypes.number.isRequired
};