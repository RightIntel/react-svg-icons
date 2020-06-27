import React from 'react';
import PropTypes from 'prop-types';
export default function LiniEgg2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniEgg2';

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
    d: "M9.5 20c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501c0-2.538.988-4.923 2.782-6.718S6.962 1 9.5 1c3.947 0 6.447.731 7.869 2.3.647.714 1.084 1.611 1.335 2.744.202.911.293 1.977.293 3.455 0 1.053.258 2.13.508 3.172.219.916.427 1.781.46 2.607.04.985-.186 1.775-.691 2.416C18.016 19.289 15.002 20 9.501 20zm0-18C4.813 2 1 5.813 1 10.5S4.813 19 9.5 19c5.026 0 7.966-.63 8.988-1.925.8-1.014.45-2.477.044-4.17-.263-1.098-.535-2.234-.535-3.405 0-2.411-.233-4.274-1.369-5.528C15.409 2.627 13.144 2 9.5 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 15C5.019 15 3 12.981 3 10.5S5.019 6 7.5 6 12 8.019 12 10.5 9.981 15 7.5 15zm0-8C5.57 7 4 8.57 4 10.5S5.57 14 7.5 14s3.5-1.57 3.5-3.5S9.43 7 7.5 7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 13a.5.5 0 010-1c.827 0 1.5-.673 1.5-1.5a.5.5 0 011 0c0 1.378-1.122 2.5-2.5 2.5z"
  })));
}
LiniEgg2.propTypes = {
  size: PropTypes.number.isRequired
};