var React = require('react');

var PropTypes = require('prop-types');

function LiniDiamond3({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniDiamond3';

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
    d: "M18.9 7.2l-3-4c-0.077-0.103-0.191-0.172-0.318-0.193l-6-1c-0.054-0.009-0.11-0.009-0.164 0l-6 1c-0.127 0.021-0.241 0.090-0.318 0.193l-3 4c-0.143 0.191-0.131 0.457 0.028 0.634l9 10c0.095 0.105 0.23 0.166 0.372 0.166s0.277-0.060 0.372-0.166l9-10c0.16-0.178 0.172-0.443 0.028-0.634zM12.786 7l-3.286 9.037-3.286-9.037h6.572zM6.707 6l2.793-2.793 2.793 2.793h-5.586zM10.957 3.25l3.698 0.616-1.233 1.849-2.466-2.465zM5.578 5.715l-1.233-1.849 3.698-0.616-2.465 2.465zM4.67 6.156l-2.985 0.597 1.791-2.388 1.194 1.791zM5.177 7.075l2.974 8.179-6.692-7.436 3.718-0.744zM13.823 7.075l3.718 0.744-6.692 7.436 2.974-8.179zM14.33 6.156l1.194-1.791 1.791 2.388-2.985-0.597z",
    fill: color
  })));
}

LiniDiamond3.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniDiamond3;