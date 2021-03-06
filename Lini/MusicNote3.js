var React = require('react');

var PropTypes = require('prop-types');

function LiniMusicNote3({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniMusicNote3';

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
    d: "M19.82 1.116c-0.114-0.095-0.264-0.135-0.41-0.108l-11 2c-0.238 0.043-0.411 0.25-0.411 0.492v11.399c-0.136-0.092-0.286-0.179-0.448-0.26-0.824-0.412-1.907-0.639-3.052-0.639s-2.228 0.227-3.052 0.639c-0.934 0.467-1.448 1.128-1.448 1.861s0.514 1.395 1.448 1.861c0.824 0.412 1.907 0.639 3.052 0.639s2.228-0.227 3.052-0.639c0.934-0.467 1.448-1.128 1.448-1.861v-10.084l10-1.847v8.33c-0.136-0.092-0.286-0.179-0.448-0.26-0.824-0.412-1.907-0.639-3.052-0.639s-2.228 0.227-3.052 0.639c-0.934 0.467-1.448 1.128-1.448 1.861s0.514 1.395 1.448 1.861c0.824 0.412 1.907 0.639 3.052 0.639s2.228-0.227 3.052-0.639c0.934-0.467 1.448-1.128 1.448-1.861v-13c0-0.148-0.066-0.289-0.18-0.384zM4.5 18c-2.003 0-3.5-0.792-3.5-1.5s1.497-1.5 3.5-1.5 3.5 0.792 3.5 1.5-1.497 1.5-3.5 1.5zM9 5.399v-1.482l10-1.818v1.453l-10 1.847zM15.5 16c-2.003 0-3.5-0.792-3.5-1.5s1.497-1.5 3.5-1.5c2.003 0 3.5 0.792 3.5 1.5s-1.497 1.5-3.5 1.5z"
  }, pathProps))));
}

LiniMusicNote3.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniMusicNote3;