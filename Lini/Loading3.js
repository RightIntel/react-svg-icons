var React = require('react');

var PropTypes = require('prop-types');

function LiniLoading3({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniLoading3';

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
    d: "M17.071 2.929c-1.889-1.889-4.4-2.929-7.071-2.929s-5.182 1.040-7.071 2.929-2.929 4.4-2.929 7.071c0 2.671 1.040 5.182 2.929 7.071s4.4 2.929 7.071 2.929c2.671 0 5.182-1.040 7.071-2.929s2.929-4.4 2.929-7.071c0-2.671-1.040-5.182-2.929-7.071zM2 8c-0.233 0-0.456 0.040-0.664 0.114 1.081-2.99 4.581-5.114 7.664-5.114 3.86 0 7 3.14 7 7 0 1.103 0.897 2 2 2 0.233 0 0.456-0.040 0.664-0.114-1.081 2.99-4.581 5.114-7.664 5.114-3.86 0-7-3.14-7-7 0-1.103-0.897-2-2-2zM10 1c4.963 0 9 4.037 9 9 0 0.551-0.449 1-1 1s-1-0.449-1-1c0-2.137-0.832-4.146-2.343-5.657s-3.52-2.343-5.657-2.343c-1.955 0-3.977 0.697-5.637 1.928 1.647-1.798 4.012-2.928 6.637-2.928zM10 19c-4.963 0-9-4.037-9-9 0-0.551 0.449-1 1-1s1 0.449 1 1c0 2.137 0.832 4.146 2.343 5.657s3.52 2.343 5.657 2.343c1.955 0 3.977-0.697 5.637-1.928-1.647 1.798-4.012 2.928-6.637 2.928z",
    fill: color
  })));
}

LiniLoading3.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniLoading3;