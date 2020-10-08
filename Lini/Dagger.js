var React = require('react');

var PropTypes = require('prop-types');

function LiniDagger({
  size,
  ...props
}) {
  var className = 'Component Lini LiniDagger';

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
    d: "M17.5 3c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.26 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.26-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.215 5.992c1.554-0.111 2.785-1.41 2.785-2.992 0-1.654-1.346-3-3-3-1.582 0-2.882 1.231-2.992 2.785l-3.465 3.465-0.687-0.687c0.195 0.193 0.51 0.192 0.704-0.003 0.283-0.283 0.439-0.66 0.439-1.061s-0.156-0.777-0.439-1.061c-0.585-0.585-1.536-0.585-2.121 0-0.283 0.283-0.439 0.66-0.439 1.061s0.156 0.777 0.439 1.061l1.358 1.358-6.837 5.562c-0.498 0.405-1.048 1.2-1.251 1.809l-1.684 5.051c-0.060 0.18-0.013 0.378 0.121 0.512 0.095 0.095 0.223 0.147 0.354 0.146 0.053 0 0.106-0.008 0.158-0.026l5.051-1.684c0.609-0.203 1.404-0.753 1.809-1.251l5.562-6.837 1.358 1.358c0.283 0.283 0.66 0.439 1.061 0.439s0.777-0.156 1.061-0.439c0.283-0.283 0.439-0.66 0.439-1.061s-0.156-0.777-0.439-1.061c-0.283-0.283-0.66-0.439-1.061-0.439s-0.777 0.156-1.061 0.439c-0.194 0.194-0.195 0.509-0.003 0.704l-0.686-0.686 3.465-3.465zM15.147 10.146c0.094-0.094 0.22-0.146 0.353-0.146s0.259 0.052 0.354 0.146c0.094 0.094 0.146 0.22 0.146 0.354s-0.052 0.259-0.147 0.354c-0.094 0.094-0.22 0.146-0.353 0.146s-0.259-0.052-0.354-0.146l-0.704-0.704c0.195 0.192 0.51 0.191 0.704-0.003zM12.147 7.854c0 0-0-0-0-0s-0-0-0-0l-0.896-0.896 1.261-1.261 1.797 1.789-1.265 1.265-0.896-0.896zM17 1c1.103 0 2 0.897 2 2s-0.897 2-2 2-2-0.897-2-2 0.897-2 2-2zM15.974 5.819l-0.958 0.958-1.797-1.789 0.962-0.962c0.303 0.83 0.963 1.49 1.793 1.793zM9 4.5c0-0.134 0.052-0.259 0.146-0.354 0.097-0.097 0.226-0.146 0.354-0.146s0.256 0.049 0.354 0.146c0.094 0.094 0.146 0.22 0.146 0.354s-0.052 0.259-0.146 0.354c-0.194 0.194-0.195 0.509-0.003 0.704l-0.704-0.704c-0.094-0.094-0.146-0.22-0.146-0.354zM6.743 16.409c-0.287 0.353-0.918 0.789-1.35 0.933l-4.103 1.368 1.368-4.103c0.144-0.432 0.58-1.063 0.933-1.35l6.917-5.627 0.577 0.577-6.939 6.939c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l6.939-6.939 0.577 0.577-5.627 6.917z"
  })));
}

LiniDagger.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniDagger;