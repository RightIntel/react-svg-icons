import React from 'react';
import PropTypes from 'prop-types';
export default function LiniMedalFirst({
  size,
  ...props
}) {
  let className = 'Component Lini LiniMedalFirst';

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
    d: "M14.795 4.779l-1.464-1.063-.559-1.721h-1.809L9.499.932 8.035 1.995H6.226l-.559 1.721-1.464 1.063.559 1.721-.559 1.721 1.464 1.063.332 1.021V19.5a.502.502 0 00.777.416l2.723-1.815 2.723 1.815a.498.498 0 00.513.025.499.499 0 00.264-.441v-9.195l.332-1.021 1.464-1.063-.559-1.721.559-1.721zM9.777 17.084a.5.5 0 00-.555 0l-2.223 1.482v-7.561h1.036l1.464 1.063 1.464-1.063h1.036v7.561l-2.223-1.482zm3.843-9.245l-1.139.827L12.048 10H12v.004h-1.361l-1.139.827-1.139-.827H6.954l-.435-1.339-1.139-.827.435-1.339L5.38 5.16l1.139-.827.435-1.339h1.407L9.5 2.167l1.139.827h1.407l.435 1.339 1.139.827-.435 1.339.435 1.339z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 9a.5.5 0 01-.5-.5V5h-.5a.5.5 0 010-1h1a.5.5 0 01.5.5v4a.5.5 0 01-.5.5z"
  })));
}
LiniMedalFirst.propTypes = {
  size: PropTypes.number.isRequired
};