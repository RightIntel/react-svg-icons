import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCameraCrossed({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCameraCrossed';

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
    d: "M19.131 17.053c-.242 0-.485-.097-.724-.288l-3.438-2.751c-.552-.442-.969-1.308-.969-2.015v-3c0-.707.416-1.573.969-2.015l3.438-2.751c.239-.191.482-.288.724-.288.433 0 .869.326.869 1.053v11c0 .278-.064.512-.19.694a.815.815 0 01-.679.359zM19 5.04l-3.407 2.725c-.31.248-.593.837-.593 1.234v3c0 .398.283.986.593 1.234L19 15.958V5.039z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.788 2.092a.5.5 0 00-.697.12l-1.556 2.205a1.495 1.495 0 00-1.035-.416h-10c-.827 0-1.5.673-1.5 1.5v10c0 .827.673 1.5 1.5 1.5h2.153l-1.561 2.212a.5.5 0 00.817.577l1.968-2.788H11.5c.827 0 1.5-.673 1.5-1.5v-10-.008l1.909-2.704a.5.5 0 00-.12-.697zM1.5 16a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h10c.189 0 .354.106.439.261L4.359 16H1.5zm10.5-.5a.5.5 0 01-.5.5H5.583L12 6.909V15.5z"
  })));
}
LiniCameraCrossed.propTypes = {
  size: PropTypes.number.isRequired
};