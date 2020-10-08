var React = require('react');

var PropTypes = require('prop-types');

function LiniItalic({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniItalic';

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
    d: "M15.5 2h-4.001c-0.001 0-0.003 0-0.004 0h-3.995c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h3.39l-2.8 14h-3.59c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h3.999c0.001 0 0.001 0 0.002 0s0.001-0 0.002-0h3.997c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-3.39l2.8-14h3.59c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z",
    fill: color
  })));
}

LiniItalic.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniItalic;