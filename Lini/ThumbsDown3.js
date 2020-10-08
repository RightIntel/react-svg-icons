var React = require('react');

var PropTypes = require('prop-types');

function LiniThumbsDown3({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniThumbsDown3';

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
    d: "M17 8c0 0.871-0.56 1.614-1.339 1.887 0.214 0.318 0.339 0.701 0.339 1.113 0 1.103-0.897 2-2 2h-3v5c0 1.103-0.897 2-2 2s-2-0.897-2-2v-5c-0.124 0-1.225-0.018-1.854-0.646-0.495-0.495-0.865-1.091-1.131-1.823-0.342-0.938-0.515-2.126-0.515-3.531 0-1.211 0.178-2.56 0.501-3.798 0.186-0.712 0.581-1.991 1.145-2.555 0.628-0.628 1.73-0.646 1.854-0.646h6c1.103 0 2 0.897 2 2 0 0.412-0.125 0.794-0.339 1.113 0.779 0.274 1.339 1.016 1.339 1.887 0 0.412-0.125 0.794-0.339 1.113 0.779 0.274 1.339 1.016 1.339 1.887zM8 18c0 0.551 0.449 1 1 1s1-0.449 1-1v-5h-2v5zM15 7h-4.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3.5c0.551 0 1-0.449 1-1s-0.449-1-1-1h-4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.551 0 1-0.449 1-1s-0.449-1-1-1h-5.999c-0.207 0.001-0.863 0.069-1.148 0.353-0.545 0.545-1.354 3.156-1.354 5.647 0 3.293 1.019 4.312 1.354 4.646 0.285 0.285 0.94 0.352 1.148 0.354h6.999c0.551 0 1-0.449 1-1s-0.449-1-1-1h-3.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h4.5c0.551 0 1-0.449 1-1s-0.449-1-1-1z"
  }, pathProps))));
}

LiniThumbsDown3.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniThumbsDown3;