function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSatellite2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSatellite2';

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
    d: "M6.5 20a.5.5 0 01-.447-.724l2-4a.5.5 0 01.895.447l-2 4A.501.501 0 016.5 20zM1.5 18a.5.5 0 01-.416-.777l2-3a.5.5 0 11.832.554l-2 3a.499.499 0 01-.417.223zM18 2.5c0-.827-.673-1.5-1.5-1.5-.803 0-1.46.634-1.498 1.427L6.356 5.021a.5.5 0 10.288.958l8.646-2.594.01.014-5.216 7.824a.5.5 0 10.832.554l4.515-6.773-1.419 6.387a.5.5 0 10.977.217l1.693-7.62a1.502 1.502 0 001.319-1.489zm-1.5.5a.5.5 0 110-1 .5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.628 5.5c.179.163.358.329.537.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.164 6.5a.499.499 0 01-.346-.139 26.876 26.876 0 00-.527-.491.5.5 0 11.671-.741c.183.166.367.337.547.509a.5.5 0 01-.346.861z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.921 11.266a.5.5 0 10-.883.469c.977 1.841 1.22 3.349.633 3.936-.517.517-1.759.394-3.323-.328-1.763-.813-3.744-2.272-5.578-4.107S4.477 7.42 3.663 5.658c-.722-1.564-.844-2.806-.328-3.323.407-.407 1.166-.349 1.731-.228.898.192 1.993.682 3.168 1.42a.5.5 0 10.531-.847c-1.273-.799-2.48-1.335-3.491-1.55-1.463-.312-2.247.099-2.647.499-.695.695-1.171 1.578-1.416 2.626-.232.994-.245 2.085-.037 3.243.425 2.376 1.723 4.748 3.654 6.679.437.437.903.847 1.386 1.219a.498.498 0 00.701-.091.499.499 0 00-.091-.701 13.39 13.39 0 01-1.289-1.134c-1.788-1.788-2.987-3.972-3.377-6.148-.182-1.014-.169-1.97.025-2.813.123.486.313 1.01.571 1.568.862 1.867 2.391 3.95 4.308 5.867s4 3.446 5.867 4.308a9.054 9.054 0 001.589.576c-1.258.295-2.765.174-4.352-.384a.5.5 0 10-.332.944c.589.207 1.178.36 1.757.458l.422 1.771a.5.5 0 10.972-.232l-.338-1.42A7.58 7.58 0 0014 17.926c1.358-.161 2.526-.696 3.377-1.547.951-.951.789-2.767-.457-5.112z"
  })));
}
LiniSatellite2.propTypes = {
  size: PropTypes.number.isRequired
};