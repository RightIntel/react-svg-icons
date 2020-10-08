var React = require('react');

var PropTypes = require('prop-types');

function LiniSnow({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniSnow';

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
    d: "M17.5 10h-2.348l0.772-1.235c0.146-0.234 0.075-0.543-0.159-0.689s-0.543-0.075-0.689 0.159l-0.826 1.322-1.598-2.557h1.848c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.879l1.311-2.248c0.139-0.239 0.059-0.545-0.18-0.684s-0.545-0.059-0.684 0.18l-1.333 2.285-0.811-1.298c-0.146-0.234-0.455-0.305-0.689-0.159s-0.305 0.455-0.159 0.689l0.772 1.235h-2.696l0.772-1.235c0.146-0.234 0.075-0.543-0.159-0.689s-0.543-0.075-0.689 0.159l-0.811 1.298-1.333-2.285c-0.139-0.238-0.445-0.319-0.684-0.18s-0.319 0.445-0.18 0.684l1.311 2.248h-1.879c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.848l-1.598 2.557-0.826-1.322c-0.146-0.234-0.455-0.305-0.689-0.159s-0.305 0.455-0.159 0.689l0.772 1.235h-2.348c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2.348l-0.772 1.235c-0.146 0.234-0.075 0.543 0.159 0.689 0.082 0.051 0.174 0.076 0.265 0.076 0.167 0 0.33-0.083 0.424-0.235l0.826-1.322 1.598 2.557h-1.848c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.879l-1.311 2.248c-0.139 0.239-0.059 0.545 0.18 0.684 0.079 0.046 0.166 0.068 0.251 0.068 0.172 0 0.339-0.089 0.432-0.248l1.333-2.285 0.811 1.298c0.095 0.152 0.258 0.235 0.424 0.235 0.091 0 0.182-0.025 0.265-0.076 0.234-0.146 0.305-0.455 0.159-0.689l-0.772-1.235h2.696l-0.772 1.235c-0.146 0.234-0.075 0.543 0.159 0.689 0.082 0.051 0.174 0.076 0.265 0.076 0.167 0 0.33-0.083 0.424-0.235l0.811-1.298 1.333 2.285c0.093 0.159 0.26 0.248 0.432 0.248 0.086 0 0.172-0.022 0.251-0.068 0.239-0.139 0.319-0.445 0.18-0.684l-1.311-2.248h1.879c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.848l1.598-2.557 0.826 1.322c0.095 0.152 0.258 0.235 0.424 0.235 0.091 0 0.182-0.025 0.265-0.076 0.234-0.146 0.305-0.455 0.159-0.689l-0.772-1.235h2.348c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM11.473 14h-3.946l-2.188-3.5 2.188-3.5h3.946l2.188 3.5-2.188 3.5z",
    fill: color
  })));
}

LiniSnow.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniSnow;