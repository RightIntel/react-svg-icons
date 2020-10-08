var React = require('react');

var PropTypes = require('prop-types');

function LiniHanger({
  size,
  ...props
}) {
  var className = 'Component Lini LiniHanger';

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
    d: "M16 18h-13c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h13c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.012 14.725l-6.622-5.090c-0.387-0.297-0.868-0.495-1.39-0.574v-0.561c0-0.477 0.289-0.717 0.8-1.1 0.535-0.401 1.2-0.9 1.2-1.9 0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-0.827 0.673-1.5 1.5-1.5s1.5 0.673 1.5 1.5c0 0.477-0.289 0.717-0.8 1.1-0.535 0.401-1.2 0.9-1.2 1.9v0.553c-0.525 0.071-1.012 0.26-1.404 0.551l-6.592 4.898c-0.573 0.426-1.004 1.284-1.004 1.998v1c0 0.174 0.090 0.335 0.238 0.426s0.332 0.099 0.487 0.021l7.214-3.632c0.401-0.202 0.97-0.318 1.562-0.318s1.161 0.116 1.562 0.318l7.214 3.632c0.071 0.036 0.148 0.053 0.225 0.053 0.091 0 0.182-0.025 0.262-0.074 0.148-0.091 0.238-0.252 0.238-0.426v-0.769c0-0.711-0.425-1.573-0.988-2.006zM11.511 13.422c-0.544-0.274-1.258-0.424-2.011-0.424s-1.468 0.151-2.011 0.424l-6.489 3.267v-0.188c0-0.392 0.286-0.961 0.601-1.195l6.592-4.898c0.335-0.249 0.788-0.386 1.277-0.386 0.497 0 0.975 0.148 1.311 0.407l6.622 5.090c0.301 0.232 0.577 0.777 0.596 1.17l-6.488-3.266z",
    fill: "#000000"
  })));
}

LiniHanger.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniHanger;