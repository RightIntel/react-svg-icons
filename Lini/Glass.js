var React = require('react');

var PropTypes = require('prop-types');

function LiniGlass({
  size,
  ...props
}) {
  var className = 'Component Lini LiniGlass';

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
    d: "M15.934 0.252c-0.089-0.156-0.255-0.252-0.434-0.252h-12c-0.179 0-0.345 0.096-0.434 0.252-0.67 1.173-1.010 2.315-1.010 3.394 0 0.955 0.267 1.889 0.792 2.776 0.94 1.585 2.517 2.768 3.908 3.812 1.103 0.828 2.244 1.683 2.244 2.267v5c0 0.813-0.458 1.5-1 1.5h-1.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h6c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.5c-0.542 0-1-0.687-1-1.5v-5c0-0.583 1.141-1.439 2.244-2.267 1.391-1.044 2.968-2.226 3.908-3.812 0.526-0.887 0.792-1.821 0.792-2.776 0-1.079-0.34-2.221-1.010-3.394zM15.292 5.912c-0.838 1.415-2.331 2.534-3.648 3.522-0.89 0.667-1.667 1.25-2.144 1.845-0.477-0.595-1.255-1.178-2.144-1.845-1.317-0.988-2.809-2.107-3.648-3.522-0.892-1.505-0.864-3.114 0.088-4.912h11.409c0.951 1.798 0.979 3.407 0.088 4.912z"
  })));
}

LiniGlass.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniGlass;