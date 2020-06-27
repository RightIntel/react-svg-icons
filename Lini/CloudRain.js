import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCloudRain({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCloudRain';

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
    d: "M16.006 15H6c-3.308 0-6-2.692-6-6s2.692-6 6-6c1.602 0 3.137.643 4.26 1.775A3.014 3.014 0 0113 3a3.004 3.004 0 012.822 4.017A3.999 3.999 0 0120 11.007a3.999 3.999 0 01-3.994 3.994zM6 4C3.243 4 1 6.243 1 9s2.243 5 5 5h10.006C17.657 14 19 12.657 19 11.006a2.997 2.997 0 00-4.02-2.814.5.5 0 01-.534-.814c.357-.376.554-.865.554-1.379 0-1.103-.897-2-2-2-.642 0-1.229.297-1.61.814-.23.312-.365.678-.388 1.057a.5.5 0 01-.908.257A5.008 5.008 0 006 3.999zM2.5 18a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM6.5 18a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM10.5 18a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM14.5 18a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM18.5 18a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM16.5 20a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM12.5 20a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM8.5 20a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM4.5 20a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5z"
  })));
}
LiniCloudRain.propTypes = {
  size: PropTypes.number.isRequired
};