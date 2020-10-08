var React = require('react');

var PropTypes = require('prop-types');

function LiniFilm({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniFilm';

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
    d: "M18.5 1h-17c-0.276 0-0.5 0.224-0.5 0.5v18c0 0.276 0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5v-18c0-0.276-0.224-0.5-0.5-0.5zM4 7h-2v-2h2v2zM4 8v2h-2v-2h2zM4 11v2h-2v-2h2zM2 14h2v2h-2v-2zM5 2h10v17h-10v-17zM16 11h2v2h-2v-2zM16 10v-2h2v2h-2zM16 7v-2h2v2h-2zM16 14h2v2h-2v-2zM18 4h-2v-2h2v2zM4 2v2h-2v-2h2zM2 17h2v2h-2v-2zM16 19v-2h2v2h-2z",
    fill: color
  })));
}

LiniFilm.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFilm;