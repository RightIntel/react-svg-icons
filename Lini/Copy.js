var React = require('react');

var PropTypes = require('prop-types');

function LiniCopy({
  size,
  ...props
}) {
  var className = 'Component Lini LiniCopy';

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
    d: "M16.5 4h-2.5v-2.5c0-0.827-0.673-1.5-1.5-1.5h-7.5c-0.133 0-0.26 0.053-0.354 0.146l-3.5 3.5c-0.094 0.094-0.146 0.221-0.146 0.354v10.5c0 0.827 0.673 1.5 1.5 1.5h2.5v2.5c0 0.827 0.673 1.5 1.5 1.5h10c0.827 0 1.5-0.673 1.5-1.5v-13c0-0.827-0.673-1.5-1.5-1.5zM5 1.207v2.293c0 0.276-0.224 0.5-0.5 0.5h-2.293l2.793-2.793zM2.5 15c-0.276 0-0.5-0.224-0.5-0.5v-9.5h2.5c0.827 0 1.5-0.673 1.5-1.5v-2.5h6.5c0.276 0 0.5 0.224 0.5 0.5v2.5h-4c-0.133 0-0.26 0.053-0.354 0.146l-3.5 3.5c-0.094 0.094-0.146 0.221-0.146 0.354v7h-2.5zM9 5.207v2.293c0 0.276-0.224 0.5-0.5 0.5h-2.293l2.793-2.793zM17 18.5c0 0.276-0.224 0.5-0.5 0.5h-10c-0.276 0-0.5-0.224-0.5-0.5v-9.5h2.5c0.827 0 1.5-0.673 1.5-1.5v-2.5h6.5c0.276 0 0.5 0.224 0.5 0.5v13z",
    fill: "#000000"
  })));
}

LiniCopy.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCopy;