var React = require('react');

var PropTypes = require('prop-types');

function LiniBowTie({
  size,
  ...props
}) {
  var className = 'Component Lini LiniBowTie';

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
    d: "M18.426 6.846c-0.394-0.703-1.29-1.021-2.039-0.724l-4.53 1.793c-0.622-0.568-1.45-0.914-2.357-0.914s-1.734 0.347-2.357 0.914l-4.53-1.793c-0.749-0.297-1.645 0.022-2.039 0.724-0.059 0.105-0.574 1.097-0.574 3.654s0.516 3.549 0.574 3.654c0.295 0.525 0.869 0.835 1.453 0.835 0.198 0 0.397-0.036 0.587-0.111l4.53-1.793c0.622 0.568 1.45 0.914 2.357 0.914s1.734-0.347 2.357-0.914l4.53 1.793c0.19 0.075 0.389 0.111 0.587 0.111 0.584-0 1.158-0.31 1.453-0.835 0.059-0.105 0.574-1.097 0.574-3.654s-0.516-3.549-0.574-3.654zM2.246 13.948c-0.277 0.11-0.649-0.021-0.797-0.28-0.023-0.046-0.449-0.93-0.449-3.169s0.426-3.123 0.449-3.169c0.148-0.259 0.52-0.389 0.797-0.28l4.237 1.677c-0.226 0.383-0.381 0.813-0.447 1.272h-1.536c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.536c0.066 0.458 0.221 0.888 0.447 1.272l-4.237 1.677zM9.5 13c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM17.551 13.669c-0.148 0.259-0.52 0.389-0.797 0.28l-4.237-1.677c0.226-0.383 0.381-0.813 0.447-1.272h1.536c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.536c-0.066-0.458-0.221-0.888-0.447-1.272l4.237-1.677c0.277-0.11 0.649 0.021 0.797 0.28 0.023 0.046 0.449 0.93 0.449 3.169s-0.426 3.123-0.449 3.169z",
    fill: "#000000"
  })));
}

LiniBowTie.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBowTie;