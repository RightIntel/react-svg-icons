function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBullhorn({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBullhorn';

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
    d: "M19.389 3.099C18.811 1.364 18.043 1 17.5 1l-.035.001c-.553.012-1.536.299-3.008.731-3.084.903-7.744 2.269-12.458 2.269-1.14 0-2 1.505-2 3.5s.86 3.5 2 3.5c.369 0 .738.008 1.105.024l1.666 6.628c.19.756.949 1.348 1.729 1.348h1.313c.433 0 .801-.18 1.008-.495s.229-.723.06-1.121l-2.577-6.048c3.136.462 6.022 1.308 8.154 1.932 1.472.431 2.455.719 3.008.731l.035.001c.542 0 1.31-.364 1.889-2.099.394-1.183.611-2.746.611-4.401s-.217-3.218-.611-4.401zM16 7.5c0-.513.022-1.015.064-1.496.513.052.936.716.936 1.496s-.422 1.445-.936 1.496A17.253 17.253 0 0116 7.5zm-15 0C1 5.974 1.592 5 2 5c1.135 0 2.264-.076 3.368-.204C5.131 5.554 5 6.493 5 7.5s.13 1.946.368 2.704A29.297 29.297 0 002 10c-.408 0-1-.974-1-2.5zm6.961 10.276c.041.096.038.16.026.178S7.918 18 7.813 18H6.5c-.319 0-.681-.282-.759-.592l-1.588-6.319c.335.027.669.059 1 .097l2.808 6.59zm-1.472-7.423C6.185 9.666 6 8.605 6 7.5c0-1.122.18-2.163.488-2.852 3.185-.473 6.096-1.325 8.25-1.957.415-.122.811-.238 1.171-.339a6.519 6.519 0 00-.298.747C15.217 4.282 15 5.845 15 7.5s.217 3.218.611 4.401c.095.284.195.532.298.747-.36-.101-.756-.217-1.171-.339-2.155-.631-5.065-1.484-8.25-1.957zm11.951 1.232c-.373 1.12-.778 1.415-.94 1.415s-.567-.296-.94-1.415a9.947 9.947 0 01-.375-1.596c.486-.056.943-.331 1.276-.775C17.809 8.75 18 8.141 18 7.5s-.192-1.251-.539-1.714c-.333-.444-.79-.719-1.276-.775.093-.586.219-1.126.375-1.596.373-1.12.778-1.416.94-1.416s.567.296.94 1.415c.361 1.084.56 2.534.56 4.085s-.199 3.001-.56 4.085z"
  })));
}
LiniBullhorn.propTypes = {
  size: PropTypes.number.isRequired
};