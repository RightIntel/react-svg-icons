function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBandages({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBandages';

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
    d: "M10 6.5a.5.5 0 11-1 0 .5.5 0 011 0zM8 8.5a.5.5 0 11-1 0 .5.5 0 011 0zM6 10.5a.5.5 0 11-1 0 .5.5 0 011 0zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zM12 8.5a.5.5 0 11-1 0 .5.5 0 011 0zM8 10.5a.5.5 0 11-1 0 .5.5 0 011 0zM10 10.5a.5.5 0 11-1 0 .5.5 0 011 0zM12 10.5a.5.5 0 11-1 0 .5.5 0 011 0zM14 10.5a.5.5 0 11-1 0 .5.5 0 011 0zM8 12.5a.5.5 0 11-1 0 .5.5 0 011 0zM10 12.5a.5.5 0 11-1 0 .5.5 0 011 0zM12 12.5a.5.5 0 11-1 0 .5.5 0 011 0zM10 14.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.141 10.934l-.434-.434.434-.434c1.073-1.073 1.717-2.457 1.813-3.897.097-1.465-.382-2.805-1.35-3.772-.878-.878-2.089-1.362-3.409-1.362-1.548 0-3.1.665-4.26 1.825l-.434.434-.434-.434c-1.16-1.16-2.712-1.825-4.26-1.825-1.32 0-2.531.484-3.41 1.362C.429 3.365-.05 4.705.047 6.169c.096 1.44.739 2.824 1.813 3.897l.434.434-.434.434C.787 12.007.143 13.391.047 14.831c-.097 1.465.382 2.805 1.35 3.773.878.878 2.089 1.362 3.41 1.362 1.548 0 3.1-.665 4.26-1.825l.434-.434.434.434c1.159 1.159 2.712 1.824 4.26 1.825 1.32 0 2.531-.484 3.409-1.362.968-.968 1.447-2.308 1.35-3.773-.096-1.44-.739-2.824-1.812-3.897zm-6.5-7.368c.973-.973 2.268-1.532 3.553-1.532 1.053 0 2.013.38 2.702 1.069 1.597 1.597 1.39 4.403-.462 6.255L16 9.792l-5.793-5.793.434-.434zm4.652 6.934L9.5 16.293 3.707 10.5 9.5 4.707l5.793 5.793zM2.566 9.359C.714 7.507.507 4.701 2.104 3.104c.69-.69 1.649-1.069 2.702-1.069 1.284 0 2.579.558 3.553 1.532l.434.434L3 9.794l-.434-.434zm5.793 8.075c-.973.973-2.268 1.532-3.553 1.532-1.053 0-2.013-.38-2.702-1.069-1.597-1.597-1.39-4.403.462-6.255L3 11.208l5.793 5.793-.434.434zm8.537.462c-.69.69-1.649 1.069-2.702 1.069-1.285 0-2.579-.558-3.553-1.532l-.434-.434L16 11.206l.434.434c1.852 1.852 2.059 4.658.462 6.255z"
  })));
}
LiniBandages.propTypes = {
  size: PropTypes.number.isRequired
};