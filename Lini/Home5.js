import React from 'react';
import PropTypes from 'prop-types';
export default function LiniHome5({
  size,
  ...props
}) {
  let className = 'Component Lini LiniHome5';

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
    d: "M.5 12a.498.498 0 01-.37-.835l8.829-9.758c.274-.303.644-.47 1.042-.47.397 0 .767.167 1.042.47l2.965 3.277-.007-1.18a.5.5 0 01.5-.502h2a.5.5 0 01.5.5v4.492l2.871 3.173a.5.5 0 01-.741.671l-3-3.316a.501.501 0 01-.129-.335V4.003h-.997l.011 1.986a.501.501 0 01-.871.338L10.302 2.08c-.082-.091-.189-.141-.3-.141s-.218.05-.3.141L.873 11.838a.5.5 0 01-.371.165z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 20h-11c-.827 0-1.5-.673-1.5-1.5v-8a.5.5 0 011 0v8a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-8a.5.5 0 011 0v8c0 .827-.673 1.5-1.5 1.5z"
  })));
}
LiniHome5.propTypes = {
  size: PropTypes.number.isRequired
};