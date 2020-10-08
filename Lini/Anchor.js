var React = require('react');

var PropTypes = require('prop-types');

function LiniAnchor({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniAnchor';

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
    d: "M9.5 6c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5c1.378 0 2.5 1.122 2.5 2.5s-1.122 2.5-2.5 2.5zM9.5 2c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5-0.673-1.5-1.5-1.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.974 14.342l-1-3c-0.078-0.233-0.313-0.375-0.554-0.335s-0.42 0.248-0.42 0.494v3c0 2.635-1.645 4.475-4 4.475-0.7 0-1.469-0.283-2.058-0.756-0.607-0.488-0.942-1.099-0.942-1.719v-9.5h1.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-4c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.5v9.5c0 0.621-0.334 1.231-0.942 1.719-0.589 0.473-1.359 0.756-2.058 0.756-2.355 0-4-1.84-4-4.475v-3c0-0.245-0.178-0.454-0.42-0.494s-0.477 0.103-0.554 0.335l-1 3c-0.087 0.262 0.054 0.545 0.316 0.632s0.545-0.054 0.632-0.316l0.026-0.078c0.017 1.459 0.49 2.795 1.336 3.771 0.909 1.048 2.21 1.624 3.663 1.624 0.934 0 1.912-0.356 2.684-0.977 0.332-0.267 0.605-0.565 0.816-0.885 0.21 0.32 0.483 0.618 0.816 0.885 0.772 0.621 1.751 0.977 2.684 0.977 1.453 0 2.754-0.577 3.663-1.624 0.847-0.976 1.32-2.312 1.336-3.771l0.026 0.078c0.087 0.262 0.37 0.404 0.632 0.316s0.404-0.37 0.316-0.632z",
    fill: color
  })));
}

LiniAnchor.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniAnchor;