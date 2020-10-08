var React = require('react');

var PropTypes = require('prop-types');

function LiniLeaf({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniLeaf';

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
    d: "M19.883 0.178c-0.095-0.113-0.235-0.178-0.382-0.178l-0.51-0c-5.040-0.002-9.021-0.003-11.952 0.698-1.575 0.377-2.793 0.946-3.723 1.739-1.004 0.856-1.688 1.977-2.093 3.429-0.269 0.964-0.395 2.705 0.136 4.437 0.196 0.64 0.502 1.244 0.91 1.799-1.216 1.905-2.267 4.414-2.267 7.399 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-4.605 2.728-8.021 4.354-9.646 1.167-1.167 2.486-2.152 3.816-2.848 1.238-0.648 2.421-1.005 3.331-1.005 0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c-1.084 0-2.396 0.387-3.794 1.12-1.418 0.743-2.822 1.789-4.059 3.027-0.522 0.522-1.15 1.218-1.774 2.070-0.242-0.381-0.43-0.785-0.559-1.207-0.5-1.632-0.316-3.204-0.129-3.875 1.43-5.125 6.862-5.138 16.717-5.135-1.175 6.288-3.366 10.358-6.516 12.101-2.922 1.617-5.82 0.735-6.931 0.28-0.234-0.096-0.47-0.214-0.699-0.35-0.237-0.141-0.544-0.063-0.685 0.174s-0.063 0.544 0.174 0.685c0.272 0.162 0.552 0.302 0.832 0.417 0.622 0.254 1.624 0.58 2.865 0.687 0.274 0.024 0.545 0.035 0.814 0.035 1.469 0 2.849-0.353 4.115-1.053 1.609-0.89 3.001-2.339 4.139-4.304 1.334-2.305 2.338-5.362 2.983-9.086 0.025-0.145-0.015-0.294-0.11-0.407z"
  }, pathProps))));
}

LiniLeaf.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniLeaf;