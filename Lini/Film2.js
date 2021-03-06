var React = require('react');

var PropTypes = require('prop-types');

function LiniFilm2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniFilm2';

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
    d: "M19.5 19h-0.5v-15h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2.5v-1.5c0-0.276-0.224-0.5-0.5-0.5h-5c-0.276 0-0.5 0.224-0.5 0.5v1.5h-2.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1h-8.5c-0.276 0-0.5 0.224-0.5 0.5v6c0 0.276 0.224 0.5 0.5 0.5 3.033 0 5.5 2.467 5.5 5.5 0 0.133 0.053 0.26 0.146 0.354s0.221 0.146 0.354 0.146h2.5v1h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h11c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM18 19h-5v-15h5v15zM9.5 17c-0 0-0-0-0-0s-0 0-0 0h-0.5v-1h1v1l-0.5 0zM11 16h1v1h-1v-1zM9 7v-1h1v1h-1zM7 7v-1h1v1h-1zM5 7v-1h1v1h-1zM3 7v-1h1v1h-1zM11 6h1v1h-1v-1zM12 2h4v1h-4v-1zM10 4h2v1h-2v-1zM2 6v1h-1v-1h1zM1 11.019v-3.019h11v7h-5.5c-0.92-2.201-3.017-3.791-5.5-3.981zM6.825 16h1.175v1h-1.019c-0.026-0.341-0.079-0.675-0.156-1zM10 18h0.5c0 0 0 0 0 0s0-0 0-0h1.5v1h-2v-1z"
  }, pathProps))));
}

LiniFilm2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFilm2;