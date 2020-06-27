import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPhonePlus({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPhonePlus';

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
    d: "M16 20c-1.771 0-3.655-.502-5.6-1.492-1.793-.913-3.564-2.22-5.122-3.78s-2.863-3.333-3.775-5.127C.515 7.655.013 5.771.013 4c0-1.148 1.07-2.257 1.529-2.68C2.203.711 3.243 0 3.999 0c.376 0 .816.246 1.387.774.425.394.904.928 1.383 1.544.289.372 1.73 2.271 1.73 3.182 0 .747-.845 1.267-1.739 1.816-.346.212-.703.432-.961.639-.276.221-.325.338-.333.364.949 2.366 3.85 5.267 6.215 6.215.021-.007.138-.053.363-.333.207-.258.427-.616.639-.961.55-.894 1.069-1.739 1.816-1.739.911 0 2.81 1.441 3.182 1.73.616.479 1.15.958 1.544 1.383.528.57.774 1.011.774 1.387 0 .756-.711 1.799-1.319 2.463-.424.462-1.533 1.537-2.681 1.537zM3.994 1c-.268.005-.989.333-1.773 1.055C1.477 2.741 1.014 3.486 1.014 4c0 6.729 8.264 15 14.986 15 .513 0 1.258-.465 1.944-1.213.723-.788 1.051-1.512 1.056-1.781-.032-.19-.558-.929-1.997-2.037-1.237-.952-2.24-1.463-2.498-1.469-.018.005-.13.048-.357.336-.197.251-.408.594-.613.926-.56.911-1.089 1.772-1.858 1.772a.979.979 0 01-.364-.071c-2.624-1.05-5.729-4.154-6.779-6.779-.126-.315-.146-.809.474-1.371.33-.299.786-.579 1.228-.851.332-.204.676-.415.926-.613.288-.227.331-.339.336-.357-.007-.258-.517-1.261-1.469-2.498C4.921 1.555 4.182 1.03 3.992.997zM18.5 4H16V1.5a.5.5 0 00-1 0V4h-2.5a.5.5 0 000 1H15v2.5a.5.5 0 001 0V5h2.5a.5.5 0 000-1z"
  })));
}
LiniPhonePlus.propTypes = {
  size: PropTypes.number.isRequired
};