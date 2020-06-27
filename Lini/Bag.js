function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBag({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBag';

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
    d: "M8.5 17a.5.5 0 01-.138-.981l7-2a.5.5 0 11.275.961l-7 2a.505.505 0 01-.138.019z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.998 16.458l-1-12a.5.5 0 00-.274-.406l-2-1a.5.5 0 00-.447.895l.697.348-1.258.252a25.378 25.378 0 00-.097-.629C13.174 1.245 12.5 0 11.501 0c-.399 0-.774.168-1.082.486-.703.724-1.139 2.265-1.333 4.71l-.021.281-2.458.492-1.853-1.235 3.856-.857a.5.5 0 10-.217-.977l-1.025.228C7.644 1.782 8.053.999 8.501.999c.054 0 .164.072.297.274a.5.5 0 10.835-.549C9.239.124 8.8-.001 8.5-.001c-.459 0-1.109.222-1.604 1.277-.244.521-.443 1.222-.591 2.087l-2.914.647a.499.499 0 00-.383.396l-.007.053-1 13a.5.5 0 00.275.486l4 2a.502.502 0 00.356.035l11-3a.5.5 0 00.367-.524zM11.135 1.183c.159-.164.284-.183.365-.183s.301.163.551.779c.221.545.416 1.318.579 2.296.037.224.071.448.102.669l-2.651.53c.227-2.848.758-3.786 1.054-4.091zM3.933 5.39L6 6.768v11.923l-2.976-1.488.909-11.814zM7 18.845V6.91l2.009-.402c-.042 1.127-.018 1.96-.017 2.007A.5.5 0 009.491 9h.015a.5.5 0 00.485-.515c0-.012-.028-.956.027-2.179l2.837-.567c.108 1.009.146 1.773.146 1.785A.5.5 0 1014 7.477a33.66 33.66 0 00-.16-1.934l2.209-.442.919 11.027-9.967 2.718z"
  })));
}
LiniBag.propTypes = {
  size: PropTypes.number.isRequired
};