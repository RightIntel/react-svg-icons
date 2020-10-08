var React = require('react');

var PropTypes = require('prop-types');

function LiniReminder({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniReminder';

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
    d: "M9.415 2c-0.206 0-0.399-0.128-0.471-0.333-0.141-0.399-0.52-0.667-0.943-0.667s-0.802 0.268-0.943 0.667c-0.092 0.26-0.378 0.397-0.638 0.305s-0.397-0.378-0.305-0.638c0.282-0.797 1.040-1.333 1.886-1.333s1.604 0.536 1.886 1.333c0.092 0.26-0.044 0.546-0.305 0.638-0.055 0.019-0.111 0.029-0.167 0.029z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 9c-0.412 0-0.794 0.125-1.113 0.339-0.274-0.779-1.016-1.339-1.887-1.339-0.412 0-0.794 0.125-1.113 0.339-0.274-0.779-1.016-1.339-1.887-1.339-0.364 0-0.706 0.098-1 0.269v-1.769c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.5c0-0.551 0.449-1 1-1s1 0.449 1 1v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.5c0-0.551 0.449-1 1-1s1 0.449 1 1v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.5c0-0.551 0.449-1 1-1s1 0.449 1 1c0 2.783-0.436 4.879-1.297 6.232-0.747 1.173-1.824 1.768-3.203 1.768h-4.99c-0.039-0.003-0.46-0.050-1.095-0.525-0.633-0.474-1.605-1.472-2.638-3.54-2.027-4.054-2.65-5.331-2.656-5.343-0.001-0.002-0.001-0.003-0.002-0.004-0.251-0.503-0.073-1.162 0.389-1.439 0.208-0.125 0.451-0.158 0.685-0.095 0.249 0.068 0.458 0.236 0.587 0.472 0.002 0.003 0.004 0.007 0.006 0.010l1.561 2.705c0.319 0.583 0.678 0.828 1.067 0.729 0.39-0.099 0.587-0.489 0.587-1.157v-5.313c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v4.873l-1.346-2.333c-0.261-0.475-0.687-0.813-1.199-0.953-0.499-0.136-1.018-0.064-1.462 0.202-0.907 0.544-1.253 1.774-0.77 2.742 0.030 0.061 0.668 1.368 2.66 5.35 0.938 1.875 1.967 3.216 3.059 3.984 0.857 0.603 1.449 0.634 1.559 0.634h5c0.845 0 1.613-0.183 2.284-0.544 0.696-0.375 1.289-0.942 1.763-1.687 0.964-1.515 1.453-3.792 1.453-6.768 0-1.103-0.897-2-2-2z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 1c-0.2 0-0.81 0-2.89 1.054-0.677 0.343-1.283 0.682-1.61 0.869-0.327-0.187-0.933-0.526-1.61-0.869-2.080-1.054-2.69-1.054-2.89-1.054-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5c0.2 0 0.81 0 2.89-1.054 0.677-0.343 1.283-0.682 1.61-0.869 0.327 0.187 0.933 0.526 1.61 0.869 2.080 1.054 2.69 1.054 2.89 1.054 1.378 0 2.5-1.122 2.5-2.5s-1.122-2.5-2.5-2.5zM5.934 4.056c-1.682 0.852-2.262 0.944-2.434 0.944-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5c0.171 0 0.752 0.092 2.434 0.944 0.385 0.195 0.75 0.391 1.051 0.556-0.301 0.165-0.666 0.361-1.051 0.556zM12.5 5c-0.171 0-0.752-0.092-2.434-0.944-0.385-0.195-0.75-0.391-1.051-0.556 0.301-0.165 0.666-0.361 1.051-0.556 1.682-0.852 2.262-0.944 2.434-0.944 0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5z",
    fill: color
  })));
}

LiniReminder.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniReminder;