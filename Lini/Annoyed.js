var React = require('react');

var PropTypes = require('prop-types');

function LiniAnnoyed({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniAnnoyed';

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
    d: "M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 11h-9c-1.103 0-2 0.897-2 2s0.897 2 2 2h9c1.103 0 2-0.897 2-2s-0.897-2-2-2zM10 12h2v2h-2v-2zM9 14h-2l-0-2h2v2zM4 13c0-0.551 0.449-1 1-1h1l0 2h-1c-0.551 0-1-0.449-1-1zM14 14h-1v-2h1c0.551 0 1 0.449 1 1s-0.449 1-1 1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.853 6.854c0.037-0.037 0.069-0.080 0.094-0.13 0.123-0.247 0.023-0.547-0.224-0.671l-2-1c-0.247-0.123-0.547-0.023-0.671 0.224s-0.023 0.547 0.224 0.671l0.49 0.245c-0.457 0.257-0.767 0.747-0.767 1.308 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.231-0.053-0.451-0.147-0.646zM6.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.233 6.192l0.49-0.245c0.247-0.123 0.347-0.424 0.224-0.671s-0.424-0.347-0.671-0.224l-2 1c-0.247 0.123-0.347 0.424-0.224 0.671 0.025 0.049 0.057 0.093 0.094 0.13-0.094 0.196-0.147 0.415-0.147 0.646 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.561-0.31-1.050-0.767-1.308zM12.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5z",
    fill: color
  })));
}

LiniAnnoyed.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniAnnoyed;