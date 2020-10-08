var React = require('react');

var PropTypes = require('prop-types');

function LiniTongue2({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniTongue2';

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
    d: "M12.5 8c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM12.5 6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 12h-8c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h3.5v1c0 1.103 0.897 2 2 2s2-0.897 2-2v-1h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM12 14c0 0.551-0.449 1-1 1s-1-0.449-1-1v-1h2v1z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.724 6.053c-0.247-0.123-0.547-0.023-0.671 0.224-0.004 0.007-0.381 0.724-1.053 0.724-0.671 0-1.050-0.719-1.054-0.726l0.001 0.003-0 0c-0.082-0.164-0.251-0.277-0.447-0.277-0.276 0-0.5 0.224-0.5 0.5 0 0.080 0.019 0.156 0.053 0.223l-0 0c0.001 0.002 0.003 0.006 0.006 0.011 0.001 0.002 0.002 0.004 0.003 0.006 0.083 0.157 0.71 1.26 1.938 1.26 1.294 0 1.921-1.224 1.947-1.276 0.123-0.247 0.023-0.547-0.224-0.671z",
    fill: color
  })));
}

LiniTongue2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniTongue2;