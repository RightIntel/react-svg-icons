var React = require('react');

var PropTypes = require('prop-types');

function LiniStar({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniStar';

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
    d: "M15.5 19c-0.082 0-0.164-0.020-0.239-0.061l-5.261-2.869-5.261 2.869c-0.168 0.092-0.373 0.079-0.529-0.032s-0.235-0.301-0.203-0.49l0.958-5.746-3.818-3.818c-0.132-0.132-0.18-0.328-0.123-0.506s0.209-0.31 0.394-0.341l5.749-0.958 2.386-4.772c0.085-0.169 0.258-0.276 0.447-0.276s0.363 0.107 0.447 0.276l2.386 4.772 5.749 0.958c0.185 0.031 0.337 0.162 0.394 0.341s0.010 0.374-0.123 0.506l-3.818 3.818 0.958 5.746c0.031 0.189-0.048 0.379-0.203 0.49-0.086 0.061-0.188 0.093-0.29 0.093zM10 15c0.082 0 0.165 0.020 0.239 0.061l4.599 2.508-0.831-4.987c-0.027-0.159 0.025-0.322 0.14-0.436l3.313-3.313-5.042-0.84c-0.158-0.026-0.293-0.127-0.365-0.27l-2.053-4.106-2.053 4.106c-0.072 0.143-0.207 0.243-0.365 0.27l-5.042 0.84 3.313 3.313c0.114 0.114 0.166 0.276 0.14 0.436l-0.831 4.987 4.599-2.508c0.075-0.041 0.157-0.061 0.239-0.061z"
  }, pathProps))));
}

LiniStar.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniStar;