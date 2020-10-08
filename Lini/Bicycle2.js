var React = require('react');

var PropTypes = require('prop-types');

function LiniBicycle2({
  size,
  ...props
}) {
  var className = 'Component Lini LiniBicycle2';

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
    d: "M5.5 9.002c-0.828 0-1.502-0.674-1.502-1.502s0.674-1.502 1.502-1.502 1.502 0.674 1.502 1.502-0.674 1.502-1.502 1.502zM5.5 6.998c-0.277 0-0.502 0.225-0.502 0.502s0.225 0.502 0.502 0.502 0.502-0.225 0.502-0.502-0.225-0.502-0.502-0.502z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 17c-0.276 0-0.5-0.224-0.5-0.5v-2.998c0-0.772 0.581-1.543 1.324-1.756l1.5-0.429-3.26-2.173-1.71 1.71c-0.094 0.094-0.221 0.146-0.354 0.146h-2.002c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1.795l1.854-1.854c0.169-0.169 0.433-0.195 0.631-0.063l3.668 2.445c0.55 0.367 0.548 0.797 0.522 0.966s-0.156 0.579-0.791 0.761l-1.577 0.452c-0.313 0.090-0.599 0.468-0.599 0.795v2.998c0 0.276-0.224 0.5-0.5 0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zM15 13c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.999 20c-2.205 0-3.999-1.794-3.999-3.999s1.794-3.999 3.999-3.999 3.999 1.794 3.999 3.999-1.794 3.999-3.999 3.999zM3.999 13.002c-1.654 0-2.999 1.345-2.999 2.999s1.345 2.999 2.999 2.999 2.999-1.345 2.999-2.999-1.345-2.999-2.999-2.999z"
  })));
}

LiniBicycle2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBicycle2;