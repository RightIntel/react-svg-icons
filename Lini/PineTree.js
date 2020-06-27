import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPineTree({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPineTree';

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
    d: "M17.874 15.168l-3.245-3.651c.56-.183.964-.402 1.225-.663a.5.5 0 00.026-.679L12.773 6.55c.447-.191.809-.424 1.081-.696a.5.5 0 00.037-.666l-4-5a.5.5 0 00-.78 0l-4 5a.5.5 0 00.037.666c.272.272.634.505 1.081.696l-3.107 3.625a.5.5 0 00.026.679c.261.261.665.48 1.225.663l-3.245 3.651a.5.5 0 00.098.749c.829.547 3.902.942 6.775 1.049v2.533a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-2.531a40.296 40.296 0 003.648-.288c1.12-.144 2.573-.394 3.13-.765a.499.499 0 00.097-.748zM10 19H9v-2.008c.169.002.335.004.5.004h.014l.485-.003V19zm4.52-3.311a40.512 40.512 0 01-5.005.307h-.014c-3.112-.001-5.923-.367-7.151-.699l3.308-3.722a.5.5 0 00-.266-.821c-.546-.12-.907-.248-1.143-.359l3.216-3.752a.501.501 0 00-.244-.806 4.044 4.044 0 01-1.013-.42l3.294-4.118 3.294 4.118a4.06 4.06 0 01-1.013.42.5.5 0 00-.244.806l3.216 3.752c-.237.111-.598.239-1.143.359a.5.5 0 00-.266.821l3.31 3.723c-.447.123-1.145.263-2.132.391z"
  })));
}
LiniPineTree.propTypes = {
  size: PropTypes.number.isRequired
};