var React = require('react');

var PropTypes = require('prop-types');

function LiniBox({
  size,
  ...props
}) {
  var className = 'Component Lini LiniBox';

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
    d: "M19.428 5.384l-2.492-4.272c-0.37-0.634-1.202-1.112-1.936-1.112h-10c-0.734 0-1.566 0.478-1.936 1.112l-2.492 4.272c-0.321 0.55-0.572 1.479-0.572 2.116v3c0 0.652 0.418 1.208 1 1.414v6.586c0 0.827 0.673 1.5 1.5 1.5h15c0.827 0 1.5-0.673 1.5-1.5v-6.586c0.582-0.206 1-0.762 1-1.414v-3c0-0.637-0.251-1.566-0.572-2.116zM3.928 1.616c0.188-0.322 0.699-0.616 1.072-0.616h10c0.373 0 0.884 0.293 1.072 0.616l2.492 4.272c0.021 0.036 0.042 0.076 0.063 0.118-0.042-0.004-0.084-0.006-0.127-0.006h-17c-0.043 0-0.085 0.002-0.127 0.006 0.021-0.042 0.042-0.081 0.063-0.118l2.492-4.272zM17.5 19h-15c-0.276 0-0.5-0.224-0.5-0.5v-6.5h16v6.5c0 0.276-0.224 0.5-0.5 0.5zM19 10.5c0 0.276-0.224 0.5-0.5 0.5h-17c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h17c0.276 0 0.5 0.224 0.5 0.5v3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 16h-5c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5h5c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM7.5 14c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-5z"
  })));
}

LiniBox.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBox;