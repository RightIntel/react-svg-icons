var React = require('react');

var PropTypes = require('prop-types');

function LiniHome6({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniHome6';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.5 20h-3c-0.276 0-0.5-0.224-0.5-0.5v-3.5h-2v3.5c0 0.276-0.224 0.5-0.5 0.5h-3c-0.827 0-1.5-0.673-1.5-1.5v-6.123l-1.129 1.248c-0.185 0.204-0.499 0.221-0.704 0.037l-2-1.789c-0.099-0.089-0.159-0.213-0.166-0.346s0.039-0.263 0.129-0.362l8.829-9.758c0.274-0.303 0.644-0.47 1.042-0.47s0.767 0.167 1.042 0.47l8.829 9.758c0.089 0.099 0.136 0.229 0.129 0.362s-0.067 0.258-0.166 0.346l-2 1.789c-0.205 0.183-0.52 0.167-0.704-0.037l-1.129-1.248-0 6.123c0 0.827-0.673 1.5-1.5 1.5zM12 19h2.5c0.276 0 0.5-0.224 0.5-0.5l0-7.421c0-0.207 0.127-0.392 0.32-0.467s0.412-0.022 0.551 0.131l1.666 1.842 1.255-1.123-8.492-9.386c-0.082-0.091-0.189-0.141-0.3-0.141s-0.218 0.050-0.3 0.141l-8.492 9.386 1.255 1.123 1.666-1.842c0.139-0.153 0.358-0.205 0.551-0.131s0.32 0.26 0.32 0.467v7.421c0 0.276 0.224 0.5 0.5 0.5h2.5v-3.5c0-0.276 0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5v3.5z",
    fill: color
  })));
}

LiniHome6.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniHome6;