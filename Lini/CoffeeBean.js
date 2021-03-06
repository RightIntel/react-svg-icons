var React = require('react');

var PropTypes = require('prop-types');

function LiniCoffeeBean({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniCoffeeBean';

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
    d: "M15.091 2.705c-0.644-0.881-1.445-1.559-2.38-2.014-0.942-0.459-2.023-0.691-3.211-0.691s-2.268 0.232-3.211 0.691c-0.935 0.455-1.736 1.133-2.38 2.014-1.267 1.733-1.909 4.188-1.909 7.295s0.642 5.562 1.909 7.295c0.644 0.881 1.445 1.559 2.38 2.014 0.942 0.459 2.023 0.691 3.211 0.691s2.268-0.232 3.211-0.691c0.935-0.455 1.736-1.133 2.38-2.014 1.267-1.733 1.909-4.188 1.909-7.295s-0.642-5.562-1.909-7.295zM4.716 16.705c-1.123-1.536-1.716-3.855-1.716-6.705s0.593-5.169 1.716-6.705c1.020-1.396 2.459-2.161 4.28-2.279-0.661 0.928-0.996 2.434-0.996 4.484-0 2.096 0.526 3.413 1.036 4.686 0.496 1.24 0.964 2.411 0.964 4.314 0 3.971-1.302 4.394-1.495 4.435-1.59-0.214-2.862-0.962-3.789-2.23zM14.284 16.705c-1.020 1.396-2.459 2.161-4.28 2.279 0.661-0.928 0.996-2.434 0.996-4.484-0-2.096-0.527-3.413-1.036-4.686-0.496-1.24-0.964-2.411-0.964-4.314 0-3.97 1.301-4.394 1.495-4.435 1.59 0.214 2.862 0.962 3.789 2.23 1.123 1.536 1.716 3.855 1.716 6.705s-0.593 5.169-1.716 6.705z"
  }, pathProps))));
}

LiniCoffeeBean.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCoffeeBean;