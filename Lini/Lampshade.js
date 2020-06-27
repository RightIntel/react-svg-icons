function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniLampshade({
  size,
  ...props
}) {
  let className = 'Component Lini LiniLampshade';

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
    d: "M16.981 8.363l-1.986-6.95c-.076-.667-1.028-.944-1.862-1.11C12.157.108 10.867 0 9.499 0S6.841.107 5.865.303C5.031.47 4.08.746 4.003 1.413l-1.986 6.95a.492.492 0 00-.019.137c0 .562.647.781.89.863.382.129.916.243 1.589.339 1.005.144 2.256.239 3.613.278a1.494 1.494 0 00.12 1.289c-.828.395-1.213 1.146-1.213 1.731 0 .933.329 1.665.619 2.311.204.454.381.847.381 1.189 0 .304-.61.672-1.013.915-.53.32-.987.596-.987 1.085 0 1.101 2.093 1.5 3.5 1.5s3.5-.399 3.5-1.5c0-.489-.457-.765-.987-1.085-.403-.243-1.013-.612-1.013-.915 0-.342.176-.735.381-1.189.29-.646.619-1.378.619-2.311 0-.584-.385-1.336-1.213-1.731a1.49 1.49 0 00.12-1.289 35.742 35.742 0 003.093-.211v3.23a.5.5 0 001 0V9.625a7.687 7.687 0 001.11-.264c.243-.082.89-.301.89-.863a.487.487 0 00-.019-.137zm-6.513 6.538c-.241.536-.468 1.042-.468 1.599 0 .868.865 1.39 1.496 1.771.12.072.278.168.395.249-.316.193-1.153.48-2.391.48s-2.076-.286-2.391-.48c.116-.081.275-.176.395-.249C8.136 17.89 9 17.368 9 16.5c0-.557-.228-1.063-.468-1.599C8.271 14.32 8 13.718 8 13c0-.211.255-1 1.5-1s1.5.789 1.5 1c0 .719-.27 1.32-.532 1.901zM10 10.5a.5.5 0 11-1 0 .5.5 0 011 0zm3.984-1.736C12.739 8.916 11.146 9 9.5 9s-3.239-.084-4.484-.236c-1.201-.147-1.735-.313-1.955-.406l1.92-6.721.002-.005c.095-.065.431-.245 1.396-.407C7.249 1.08 8.357 1 9.501 1s2.252.08 3.122.225c.965.161 1.302.342 1.396.407l.002.005 1.92 6.721c-.221.093-.755.259-1.955.406z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 14.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  })));
}
LiniLampshade.propTypes = {
  size: PropTypes.number.isRequired
};