var React = require('react');

var PropTypes = require('prop-types');

function LiniGrinEvil({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniGrinEvil';

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
    d: "M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M15.5 10h-12c-0.276 0-0.5 0.224-0.5 0.5 0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5c0-0.276-0.224-0.5-0.5-0.5zM9 15.977c-0.715-0.065-1.39-0.266-2-0.579l-0-4.398h2v4.977zM10 11h2v4.398c-0.61 0.313-1.285 0.514-2 0.579v-4.977zM4.023 11h1.977l0 3.739c-1.1-0.91-1.842-2.238-1.978-3.739zM13 14.739v-3.739h1.977c-0.136 1.501-0.877 2.83-1.977 3.739z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M7.853 6.854c0.037-0.037 0.069-0.080 0.094-0.13 0.123-0.247 0.023-0.547-0.224-0.671l-2-1c-0.247-0.123-0.547-0.023-0.671 0.224s-0.023 0.547 0.224 0.671l0.49 0.245c-0.457 0.257-0.767 0.747-0.767 1.308 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.231-0.053-0.451-0.147-0.646zM6.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M13.233 6.192l0.49-0.245c0.247-0.123 0.347-0.424 0.224-0.671s-0.424-0.347-0.671-0.224l-2 1c-0.247 0.123-0.347 0.424-0.224 0.671 0.025 0.049 0.057 0.093 0.094 0.13-0.094 0.196-0.147 0.415-0.147 0.646 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.561-0.31-1.050-0.767-1.308zM12.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniGrinEvil.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniGrinEvil;