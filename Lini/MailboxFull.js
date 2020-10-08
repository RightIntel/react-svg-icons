var React = require('react');

var PropTypes = require('prop-types');

function LiniMailboxFull({
  size,
  ...props
}) {
  var className = 'Component Lini LiniMailboxFull';

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
    d: "M10.5 0h-4c-0.276 0-0.5 0.224-0.5 0.5v5.586c-0.582 0.206-1 0.762-1 1.414 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.652-0.418-1.208-1-1.414v-3.086h3.5c0.276 0 0.5-0.224 0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5zM6.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5zM10 2h-3v-1h3v1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.088 6.945c-0.354-0.916-0.818-1.628-1.38-2.118-0.628-0.548-1.38-0.826-2.234-0.826h-6.974c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h6.974c2.79 0 3.469 4.236 3.522 8h-15.997v-8h1.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.5v-0.5c0-0.276-0.224-0.5-0.5-0.5h-2c-0.276 0-0.5 0.224-0.5 0.5v11c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-0.5h5v5.5c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-5.5h7.5c0.276 0 0.5-0.224 0.5-0.5 0-2.785-0.307-4.99-0.912-6.555zM2 14h-1v-10h1v10zM11 19h-2v-5h2v5z"
  })));
}

LiniMailboxFull.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniMailboxFull;