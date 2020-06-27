function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniChair({
  size,
  ...props
}) {
  let className = 'Component Lini LiniChair';

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
    d: "M16 13.5V13c0-.428-.321-1.133-.639-1.609l-.891-1.336c-.242-.363-.411-1.06-.363-1.493l.669-6.018c.075-.672-.123-1.309-.556-1.793s-1.044-.75-1.72-.75h-6c-.676 0-1.287.267-1.72.75s-.631 1.121-.556 1.793l.669 6.018c.048.433-.122 1.131-.363 1.493l-.891 1.336C3.322 11.867 3 12.573 3 13v.5c0 .551.298 1.032.742 1.293C3.41 15.511 3 16.919 3 19.5a.5.5 0 001 0c0-2.869.53-4.101.76-4.5H6v2.5a.5.5 0 001 0V15h5v2.5a.5.5 0 001 0V15h1.24c.23.399.76 1.631.76 4.5a.5.5 0 001 0c0-2.58-.41-3.989-.742-4.707.443-.261.742-.743.742-1.293zm-1.5.5h-10a.5.5 0 010-1h10a.5.5 0 010 1zm-9.139-3.391c.368-.552.598-1.5.525-2.158l-.669-6.018c-.043-.386.066-.746.307-1.015s.587-.417.975-.417h6c.388 0 .734.148.975.417s.35.63.307 1.015l-.669 6.018c-.073.659.157 1.607.525 2.159l.891 1.336.037.056-.066-.002h-10l-.066.002.037-.056.891-1.336z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 10H7a.5.5 0 010-1h5a.5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 5H12c-1.103 0-2-.897-2-2v-.5a.5.5 0 00-1 0V3c0 1.103-.897 2-2 2h-.5a.5.5 0 000 1H7c1.103 0 2 .897 2 2v.5a.5.5 0 001 0V8c0-1.103.897-2 2-2h.5a.5.5 0 000-1zm-3 1.344a3.028 3.028 0 00-.844-.844c.334-.222.621-.509.844-.844.222.334.509.621.844.844a3.015 3.015 0 00-.844.844z"
  })));
}
LiniChair.propTypes = {
  size: PropTypes.number.isRequired
};