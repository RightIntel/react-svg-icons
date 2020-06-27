import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBandage({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBandage';

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
    d: "M17.604 2.396c-.878-.878-2.089-1.362-3.409-1.362-1.548 0-3.1.665-4.26 1.825L1.86 10.934C.787 12.007.143 13.391.047 14.831c-.097 1.465.382 2.805 1.35 3.773.878.878 2.089 1.362 3.41 1.362 1.548 0 3.1-.665 4.26-1.825l8.075-8.075c1.073-1.073 1.717-2.457 1.813-3.897.097-1.465-.382-2.805-1.35-3.772zM9.5 4.707l5.793 5.793L9.5 16.293 3.707 10.5 9.5 4.707zM4.806 18.966c-1.053 0-2.013-.38-2.702-1.069-1.597-1.597-1.39-4.403.462-6.255L3 11.208l5.793 5.793-.434.434c-.973.973-2.268 1.532-3.553 1.532zm11.628-9.607L16 9.793 10.207 4l.434-.434c.973-.973 2.268-1.532 3.553-1.532 1.053 0 2.013.38 2.702 1.069 1.597 1.597 1.39 4.403-.462 6.255z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 6.5a.5.5 0 11-1 0 .5.5 0 011 0zM8 8.5a.5.5 0 11-1 0 .5.5 0 011 0zM6 10.5a.5.5 0 11-1 0 .5.5 0 011 0zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zM12 8.5a.5.5 0 11-1 0 .5.5 0 011 0zM8 10.5a.5.5 0 11-1 0 .5.5 0 011 0zM10 10.5a.5.5 0 11-1 0 .5.5 0 011 0zM12 10.5a.5.5 0 11-1 0 .5.5 0 011 0zM14 10.5a.5.5 0 11-1 0 .5.5 0 011 0zM8 12.5a.5.5 0 11-1 0 .5.5 0 011 0zM10 12.5a.5.5 0 11-1 0 .5.5 0 011 0zM12 12.5a.5.5 0 11-1 0 .5.5 0 011 0zM10 14.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  })));
}
LiniBandage.propTypes = {
  size: PropTypes.number.isRequired
};