var React = require('react');

var PropTypes = require('prop-types');

function LiniGrin({
  size,
  ...props
}) {
  var className = 'Component Lini LiniGrin';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 8c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM6.5 6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 8c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM12.5 6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 10h-12c-0.276 0-0.5 0.224-0.5 0.5 0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5c0-0.276-0.224-0.5-0.5-0.5zM9 15.977c-0.714-0.065-1.39-0.266-2-0.579l-0-4.398h2v4.977zM10 11h2v4.398c-0.61 0.313-1.285 0.514-2 0.579v-4.977zM4.023 11h1.977l0 3.739c-1.1-0.91-1.842-2.238-1.978-3.739zM13 14.739v-3.739h1.977c-0.136 1.501-0.877 2.83-1.977 3.739z"
  })));
}

LiniGrin.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniGrin;