import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCake({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCake';

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
    d: "M18.01 8.901c-.633-1.267-1.447-2.294-2.232-2.817a.5.5 0 00-.489-.037L14 6.648V5a.5.5 0 00-.276-.447l-1-.5a.502.502 0 00-.447 0l-1 .5a.5.5 0 00-.276.447v3.048L.3 13.042a.491.491 0 00-.187.143.494.494 0 00-.111.318V19.5a.502.502 0 00.5.5l.028-.001 18-1a.5.5 0 00.472-.499v-6c0-1.028-.361-2.34-.99-3.599zM12 5.309l.5-.25.5.25V9.91c-.15.048-.332.09-.5.09s-.351-.042-.5-.09V5.309zm-1 3.843v1.098a.5.5 0 00.276.447c.062.031.623.303 1.224.303s1.162-.272 1.224-.303A.5.5 0 0014 10.25V7.752l1.442-.673c.575.47 1.186 1.295 1.673 2.27.459.918.764 1.884.856 2.68l-14.911.828L11 9.152zm7 3.877v2.998l-17 .944v-2.998l17-.944zM1 18.971v-.998l17-.944v.998l-17 .944z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 4c-.771 0-1.5-.729-1.5-1.5 0-.451.234-.829.53-1.308.16-.26.342-.554.523-.916a.5.5 0 01.894 0c.181.362.363.656.523.916.296.479.53.857.53 1.308 0 .771-.729 1.5-1.5 1.5zm0-2.477l-.12.195c-.212.344-.38.615-.38.782 0 .224.276.5.5.5s.5-.276.5-.5c0-.167-.168-.438-.38-.782a22.21 22.21 0 01-.12-.195z"
  })));
}
LiniCake.propTypes = {
  size: PropTypes.number.isRequired
};