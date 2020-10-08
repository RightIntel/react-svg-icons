var React = require('react');

var PropTypes = require('prop-types');

function LiniPuzzle({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniPuzzle';

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
  }, /*#__PURE__*/React.createElement("path", _extends({
    d: "M18.763 5.075c-0.147-0.091-0.331-0.099-0.486-0.022-0.008 0.004-0.822 0.409-1.765 0.716-1.576 0.514-2.14 0.326-2.309 0.221-0.061-0.038-0.203-0.125-0.203-0.49 0-0.315 0.158-0.587 0.357-0.931 0.286-0.494 0.643-1.109 0.643-2.069 0-0.669-0.463-1.327-1.27-1.805-0.757-0.448-1.726-0.695-2.73-0.695s-1.973 0.247-2.73 0.695c-0.807 0.478-1.27 1.136-1.27 1.805 0 0.96 0.357 1.575 0.643 2.069 0.199 0.344 0.357 0.616 0.357 0.931 0 0.268-0.099 0.37-0.195 0.435-0.199 0.133-0.878 0.383-2.886-0.15-1.18-0.313-2.216-0.743-2.227-0.747-0.134-0.056-0.287-0.051-0.417 0.015s-0.225 0.184-0.261 0.326c-0.012 0.050-0.306 1.232-0.505 2.563-0.383 2.56-0.064 3.321 0.209 3.671 0.195 0.25 0.473 0.388 0.781 0.388 0.679 0 1.127-0.52 1.56-1.022s0.843-0.978 1.44-0.978c0.597 0 1.5 1.197 1.5 3s-0.903 3-1.5 3c-0.597 0-1.006-0.475-1.44-0.978s-0.882-1.022-1.56-1.022c-0.337 0-0.633 0.149-0.833 0.418-0.247 0.333-0.532 1.020-0.143 3.14 0.2 1.090 0.485 2.045 0.497 2.085 0.063 0.211 0.258 0.356 0.479 0.356h14c1.378 0 2.5-1.122 2.5-2.5v-12c0-0.173-0.090-0.334-0.237-0.425zM18 17.5c0 0.827-0.673 1.5-1.5 1.5h-13.621c-0.107-0.396-0.277-1.073-0.399-1.779-0.32-1.856-0.022-2.197 0.002-2.219 0.003-0.001 0.009-0.001 0.019-0.001 0.22 0 0.517 0.343 0.803 0.676 0.509 0.59 1.142 1.324 2.197 1.324 0.669 0 1.327-0.463 1.805-1.27 0.448-0.757 0.695-1.726 0.695-2.73s-0.247-1.973-0.695-2.73c-0.478-0.807-1.136-1.27-1.805-1.27-1.055 0-1.688 0.734-2.197 1.324-0.282 0.327-0.574 0.666-0.794 0.675-0.054-0.065-0.35-0.538-0.031-2.772 0.113-0.792 0.269-1.559 0.378-2.053 0.434 0.161 1.084 0.385 1.795 0.574 1.796 0.478 3.009 0.484 3.708 0.018 0.292-0.195 0.641-0.573 0.641-1.267 0-0.584-0.25-1.015-0.492-1.432-0.261-0.451-0.508-0.876-0.508-1.568 0-0.597 1.197-1.5 3-1.5s3 0.903 3 1.5c0 0.691-0.247 1.117-0.508 1.568-0.242 0.417-0.492 0.848-0.492 1.432 0 0.762 0.368 1.15 0.677 1.341 0.646 0.399 1.679 0.359 3.156-0.125 0.438-0.143 0.844-0.303 1.167-0.44v11.224z"
  }, pathProps))));
}

LiniPuzzle.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPuzzle;