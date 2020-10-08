var React = require('react');

var PropTypes = require('prop-types');

function LiniMailboxEmpty({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniMailboxEmpty';

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
    d: "M19.088 6.945c-0.354-0.916-0.818-1.628-1.38-2.118-0.628-0.548-1.38-0.826-2.234-0.826h-12.474v-0.5c0-0.276-0.224-0.5-0.5-0.5h-2c-0.276 0-0.5 0.224-0.5 0.5v11c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-0.5h5v5.5c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-5.5h7.5c0.276 0 0.5-0.224 0.5-0.5 0-2.785-0.307-4.99-0.912-6.555zM2 14h-1v-10h1v10zM11 19h-2v-5h2v5zM3 13v-8h12.474c2.79 0 3.469 4.236 3.522 8h-15.997z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M13.5 7h-5.586c-0.206-0.582-0.762-1-1.414-1-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5c0.652 0 1.208-0.418 1.414-1h3.086v3.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5zM6.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5zM13 11h-1v-3h1v3z"
  }, pathProps))));
}

LiniMailboxEmpty.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniMailboxEmpty;