var React = require('react');

var PropTypes = require('prop-types');

function LiniBorderAll({
  size,
  ...props
}) {
  var className = 'Component Lini LiniBorderAll';

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
    d: "M16.5 2h-14c-0.827 0-1.5 0.673-1.5 1.5v14c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-14c0-0.827-0.673-1.5-1.5-1.5zM16.5 3c0.276 0 0.5 0.224 0.5 0.5v6.5h-7v-7h6.5zM2 3.5c0-0.276 0.224-0.5 0.5-0.5h6.5v7h-7v-6.5zM2.5 18c-0.276 0-0.5-0.224-0.5-0.5v-6.5h7v7h-6.5zM17 17.5c0 0.276-0.224 0.5-0.5 0.5h-6.5v-7h7v6.5z"
  })));
}

LiniBorderAll.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBorderAll;