var React = require('react');

var PropTypes = require('prop-types');

function LiniFlag3({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniFlag3';

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
    d: "M1.5 19c-0.276 0-0.5-0.224-0.5-0.5v-15c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v15c0 0.276-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M3.5 10c-0.104 0-0.21-0.033-0.3-0.1-0.221-0.166-0.266-0.479-0.1-0.7 0.067-0.090 1.676-2.2 3.9-2.2 1.694 0 2.813 0.599 3.801 1.127 0.875 0.468 1.631 0.873 2.699 0.873 2.192 0 3.758-2.080 4.65-3.718-0.698 0.397-1.59 0.718-2.65 0.718-2.207 0-3.347-1.14-4.354-2.146-0.995-0.995-1.854-1.854-3.646-1.854-2.224 0-3.587 1.782-3.6 1.8-0.166 0.221-0.479 0.266-0.7 0.1s-0.266-0.479-0.1-0.7c0.067-0.090 1.681-2.2 4.4-2.2 2.207 0 3.347 1.14 4.354 2.146 0.995 0.995 1.854 1.854 3.646 1.854 2.224 0 3.587-1.782 3.6-1.8 0.147-0.196 0.415-0.257 0.632-0.143s0.32 0.368 0.242 0.601c-0.021 0.064-0.533 1.581-1.558 3.119-0.612 0.918-1.282 1.653-1.991 2.185-0.918 0.688-1.902 1.037-2.925 1.037-1.318 0-2.26-0.504-3.171-0.991-0.97-0.519-1.886-1.009-3.329-1.009-1.73 0-3.087 1.782-3.1 1.8-0.098 0.131-0.248 0.2-0.4 0.2z"
  }, pathProps))));
}

LiniFlag3.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFlag3;