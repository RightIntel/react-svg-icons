var React = require('react');

var PropTypes = require('prop-types');

function LiniPickaxe({
  size,
  ...props
}) {
  var className = 'Component Lini LiniPickaxe';

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
    d: "M19.971 16.676c-0.011-0.266-0.136-0.518-0.343-0.693l-2.423-2.043c-0.201-0.169-0.531-0.466-0.72-0.647l-5.403-5.168 0.272-0.272c0.094-0.094 0.146-0.221 0.146-0.354s-0.053-0.26-0.146-0.354l-0.359-0.359c4.967-4.612 7.676-5.817 7.702-5.828 0.218-0.094 0.341-0.328 0.293-0.56s-0.252-0.399-0.49-0.399c-2.051 0-4.065 0.333-5.988 0.991-1.722 0.589-3.341 1.427-4.82 2.494l-0.338-0.338c-0.195-0.195-0.512-0.195-0.707 0l-0.376 0.376-0.563-0.539c-0.394-0.377-1.028-0.37-1.414 0.016l-1.293 1.293c-0.386 0.386-0.393 1.020-0.016 1.414l0.539 0.563-0.376 0.376c-0.195 0.195-0.195 0.512 0 0.707l0.338 0.338c-1.067 1.479-1.905 3.099-2.494 4.82-0.658 1.923-0.991 3.937-0.991 5.988 0 0.237 0.167 0.441 0.399 0.489 0.034 0.007 0.068 0.010 0.102 0.010 0.196 0 0.378-0.116 0.459-0.302 0.012-0.027 1.216-2.736 5.828-7.703l0.359 0.359c0.094 0.094 0.221 0.146 0.354 0.146s0.26-0.053 0.354-0.146l0.272-0.272 5.168 5.403c0.181 0.189 0.478 0.519 0.647 0.72l2.043 2.423c0.174 0.207 0.427 0.332 0.693 0.343 0.013 0.001 0.026 0.001 0.039 0.001 0.252 0 0.498-0.102 0.68-0.284l2.293-2.293c0.191-0.191 0.295-0.453 0.283-0.719zM3.707 5.016c-0.002-0.002-0.002-0.013 0-0.016l1.293-1.293c0.002-0.002 0.013-0.002 0.016-0l0.547 0.523-1.333 1.333-0.523-0.547zM7.129 9.922c-0.096-0.096-0.226-0.149-0.361-0.146s-0.264 0.059-0.357 0.157c-2.741 2.911-4.368 5.092-5.292 6.498 0.36-3.081 1.524-5.982 3.421-8.486 0.151-0.199 0.132-0.479-0.045-0.655l-0.289-0.289 2.793-2.793 0.289 0.289c0.177 0.177 0.456 0.196 0.655 0.045 2.504-1.897 5.405-3.061 8.486-3.421-1.406 0.923-3.587 2.551-6.498 5.292-0.098 0.093-0.155 0.221-0.157 0.357s0.051 0.265 0.146 0.361l0.371 0.371-2.793 2.793-0.371-0.371zM16.719 18.949l-2.014-2.389c-0.183-0.218-0.493-0.562-0.689-0.767l-5.183-5.419 1.542-1.542 5.419 5.183c0.205 0.196 0.549 0.505 0.767 0.689l2.389 2.014-2.23 2.23z",
    fill: "#000000"
  })));
}

LiniPickaxe.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniPickaxe;