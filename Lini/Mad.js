var React = require('react');

var PropTypes = require('prop-types');

function LiniMad({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniMad';

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
    d: "M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M5.499 15c-0.105 0-0.21-0.033-0.3-0.1-0.221-0.166-0.265-0.479-0.099-0.7 0.502-0.668 1.159-1.221 1.901-1.6 0.778-0.398 1.619-0.599 2.499-0.599s1.721 0.202 2.499 0.599c0.742 0.379 1.399 0.932 1.901 1.6 0.166 0.221 0.121 0.534-0.099 0.7s-0.534 0.121-0.7-0.099c-0.859-1.144-2.172-1.8-3.601-1.8s-2.741 0.656-3.601 1.8c-0.098 0.131-0.248 0.2-0.4 0.2z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M13.234 6.192l0.49-0.245c0.247-0.123 0.347-0.424 0.224-0.671s-0.424-0.347-0.671-0.224l-2 1c-0.247 0.123-0.347 0.424-0.224 0.671 0.025 0.049 0.057 0.093 0.094 0.13-0.094 0.196-0.147 0.415-0.147 0.646 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.561-0.309-1.050-0.766-1.308zM12.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M7.853 6.854c0.037-0.037 0.069-0.080 0.094-0.13 0.123-0.247 0.023-0.547-0.224-0.671l-2-1c-0.247-0.123-0.547-0.023-0.671 0.224s-0.023 0.547 0.224 0.671l0.49 0.245c-0.457 0.257-0.766 0.747-0.766 1.308 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.231-0.053-0.451-0.147-0.646zM6.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5z"
  }, pathProps))));
}

LiniMad.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniMad;