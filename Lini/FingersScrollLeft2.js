var React = require('react');

var PropTypes = require('prop-types');

function LiniFingersScrollLeft2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniFingersScrollLeft2';

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
    d: "M14 17.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16 10.5c0-0.827-0.673-1.5-1.5-1.5-0.195 0-0.382 0.038-0.553 0.106-0.173-0.637-0.756-1.106-1.447-1.106-0.175 0-0.343 0.031-0.5 0.086v-4.586c0-0.827-0.673-1.5-1.5-1.5-0.691 0-1.274 0.469-1.447 1.105-0.171-0.068-0.358-0.105-0.553-0.105-0.827 0-1.5 0.673-1.5 1.5v5.966l-1.406-1.113c-0.304-0.241-0.694-0.361-1.098-0.339s-0.779 0.186-1.053 0.46c-0.581 0.581-0.583 1.532-0.003 2.12l3.479 3.523c-0.54 0.227-0.919 0.762-0.919 1.383v2c0 0.827 0.673 1.5 1.5 1.5h7c0.827 0 1.5-0.673 1.5-1.5v-2c0-0.541-0.288-1.016-0.719-1.28 0.328-0.636 0.719-1.798 0.719-3.72v-1zM4.15 10.182c0.207-0.207 0.592-0.227 0.823-0.044l2.216 1.754c0.15 0.119 0.355 0.142 0.528 0.058s0.282-0.258 0.282-0.45v-7c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-6c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v6c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 2.102-0.516 3.139-0.748 3.5h-6.043l-4.057-4.108c-0.192-0.194-0.192-0.519-0.002-0.71zM15 18.5c0 0.276-0.224 0.5-0.5 0.5h-7c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h7c0.276 0 0.5 0.224 0.5 0.5v2z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M5.5 4h-3.293l1.146-1.146c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-2 2c-0.195 0.195-0.195 0.512 0 0.707l2 2c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-1.146-1.146h3.293c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z"
  }, pathProps))));
}

LiniFingersScrollLeft2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFingersScrollLeft2;