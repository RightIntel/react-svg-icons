var React = require('react');

var PropTypes = require('prop-types');

function LiniBubbleHeart({
  size,
  ...props
}) {
  var className = 'Component Lini LiniBubbleHeart';

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
    d: "M0.5 19c-0.225 0-0.422-0.15-0.482-0.367s0.032-0.447 0.225-0.562c1.691-1.014 2.392-2.489 2.641-3.179-1.838-1.407-2.884-3.354-2.884-5.392 0-1.029 0.258-2.026 0.768-2.964 0.486-0.894 1.18-1.695 2.061-2.381 1.787-1.39 4.156-2.156 6.671-2.156s4.884 0.766 6.671 2.156c0.881 0.685 1.575 1.486 2.061 2.381 0.51 0.937 0.768 1.934 0.768 2.964s-0.258 2.026-0.768 2.964c-0.486 0.894-1.18 1.695-2.061 2.381-1.787 1.39-4.156 2.156-6.671 2.156-1.033 0-2.047-0.129-3.016-0.385-0.429 0.286-1.231 0.793-2.189 1.27-1.488 0.74-2.764 1.115-3.794 1.115zM9.5 3c-4.687 0-8.5 2.916-8.5 6.5 0 1.815 1.005 3.562 2.756 4.792 0.172 0.121 0.25 0.336 0.196 0.539-0.117 0.436-0.515 1.633-1.58 2.788 1.302-0.456 2.704-1.247 3.739-1.959 0.123-0.085 0.277-0.11 0.421-0.069 0.948 0.271 1.947 0.409 2.968 0.409 4.687 0 8.5-2.916 8.5-6.5s-3.813-6.5-8.5-6.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 13c-0.077 0-0.154-0.018-0.224-0.053-0.042-0.021-1.049-0.529-2.070-1.297-1.455-1.095-2.192-2.155-2.192-3.149 0-0.735 0.294-1.391 0.827-1.846 0.494-0.422 1.172-0.654 1.909-0.654 0.598 0 1.215 0.275 1.75 0.769 0.535-0.494 1.152-0.769 1.75-0.769 0.737 0 1.415 0.232 1.909 0.654 0.534 0.456 0.827 1.111 0.827 1.846 0 0.995-0.738 2.055-2.192 3.149-1.021 0.768-2.027 1.276-2.069 1.297-0.071 0.035-0.147 0.053-0.224 0.053zM7.75 7c-0.864 0-1.736 0.464-1.736 1.5 0 0.643 0.633 1.475 1.783 2.342 0.675 0.51 1.361 0.904 1.703 1.092 0.343-0.187 1.028-0.582 1.703-1.092 1.15-0.867 1.783-1.699 1.783-2.342 0-1.036-0.872-1.5-1.736-1.5-0.44 0-0.949 0.304-1.361 0.814-0.095 0.117-0.238 0.186-0.389 0.186s-0.294-0.068-0.389-0.186c-0.412-0.51-0.921-0.814-1.361-0.814z",
    fill: "#000000"
  })));
}

LiniBubbleHeart.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBubbleHeart;