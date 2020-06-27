function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFilePreview({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFilePreview';

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
    d: "M17.854 5.646l-4.5-4.5A.5.5 0 0013 1H3.5C2.673 1 2 1.673 2 2.5v6a.5.5 0 001 0v-6a.5.5 0 01.5-.5H12v3.5c0 .827.673 1.5 1.5 1.5H17v11.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-1a.5.5 0 00-1 0v1c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1.5V6a.504.504 0 00-.146-.354zM13 5.5V2.207L16.793 6H13.5a.5.5 0 01-.5-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.872 12.666c-.034-.038-.838-.929-2.139-1.828-.985-.68-1.992-1.179-2.985-1.484a.531.531 0 00-.103-.031c-.728-.214-1.448-.324-2.146-.324s-1.419.11-2.147.324a.519.519 0 00-.102.03c-.993.305-2 .804-2.985 1.484-1.301.898-2.105 1.79-2.139 1.828a.5.5 0 000 .667c.034.038.838.929 2.139 1.828 1.741 1.203 3.551 1.839 5.234 1.839s3.493-.636 5.234-1.839c1.301-.898 2.105-1.79 2.139-1.828a.5.5 0 000-.667zm-5.574-2.403c.453.468.702 1.08.702 1.737 0 1.378-1.122 2.5-2.5 2.5S5 13.378 5 12c0-.658.25-1.271.705-1.739A6.59 6.59 0 017.5 10c.624 0 1.228.101 1.798.263zM7.5 16c-1.86 0-3.553-.896-4.645-1.648A13.121 13.121 0 011.201 13c.514-.497 1.597-1.448 2.994-2.146A3.496 3.496 0 007.501 15.5c1.93 0 3.5-1.57 3.5-3.5 0-.392-.067-.779-.194-1.145.507.252.959.531 1.339.792a13.121 13.121 0 011.654 1.352c-.874.845-3.389 3-6.3 3z"
  })));
}
LiniFilePreview.propTypes = {
  size: PropTypes.number.isRequired
};