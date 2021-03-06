var React = require('react');

var PropTypes = require('prop-types');

function LiniDrop({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniDrop';

  if (props.className) {
    className += ' ' + props.className;
  }

  const pathProps = {};

  if (color) {
    pathProps.fill = color;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M10 20c-1.614 0-3.118-0.655-4.236-1.845-1.133-1.206-1.757-2.859-1.757-4.655 0-2.943 1.308-5.049 2.693-7.278 1.070-1.723 2.177-3.504 2.817-5.853 0.059-0.218 0.257-0.368 0.482-0.368s0.423 0.151 0.482 0.368c0.641 2.35 1.749 4.132 2.821 5.855 1.387 2.229 2.697 4.335 2.697 7.277 0 1.799-0.62 3.452-1.746 4.654-1.115 1.19-2.626 1.846-4.254 1.846zM10 2.113c-0.674 1.776-1.574 3.225-2.45 4.636-1.364 2.196-2.543 4.093-2.543 6.751 0 3.136 2.147 5.5 4.993 5.5 2.85 0 5-2.364 5-5.5 0-2.657-1.18-4.553-2.546-6.749-0.878-1.411-1.78-2.861-2.454-4.638z"
  }, pathProps))));
}

LiniDrop.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniDrop;