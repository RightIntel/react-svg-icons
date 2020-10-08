var React = require('react');

var PropTypes = require('prop-types');

function LiniSync2({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniSync2';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.5 11.5c-0.064 0-0.129-0.012-0.191-0.038-0.187-0.077-0.309-0.26-0.309-0.462v-1c0-3.86-3.14-7-7-7-2.603 0-4.976 1.431-6.193 3.734-0.129 0.244-0.432 0.337-0.676 0.208s-0.337-0.432-0.208-0.676c1.391-2.632 4.103-4.266 7.077-4.266 2.137 0 4.146 0.832 5.657 2.343 1.463 1.463 2.289 3.392 2.341 5.452l1.149-1.149c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-2 2c-0.096 0.096-0.224 0.146-0.354 0.146z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 18c-2.137 0-4.146-0.832-5.657-2.343-1.463-1.463-2.289-3.392-2.341-5.452l-1.149 1.149c-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707l2-2c0.143-0.143 0.358-0.186 0.545-0.108s0.309 0.26 0.309 0.462v1c0 3.86 3.14 7 7 7 2.603 0 4.976-1.431 6.193-3.734 0.129-0.244 0.432-0.337 0.676-0.208s0.337 0.432 0.208 0.676c-1.391 2.632-4.103 4.266-7.077 4.266z",
    fill: color
  })));
}

LiniSync2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSync2;