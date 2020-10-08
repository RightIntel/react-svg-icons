var React = require('react');

var PropTypes = require('prop-types');

function LiniBullhorn({
  size,
  ...props
}) {
  var className = 'Component Lini LiniBullhorn';

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
    d: "M19.389 3.099c-0.578-1.735-1.346-2.099-1.889-2.099-0.011 0-0.023 0-0.035 0.001-0.553 0.012-1.536 0.299-3.008 0.731-3.084 0.903-7.744 2.269-12.458 2.269-1.14 0-2 1.505-2 3.5s0.86 3.5 2 3.5c0.369 0 0.738 0.008 1.105 0.024l1.666 6.628c0.19 0.756 0.949 1.348 1.729 1.348h1.313c0.433 0 0.801-0.18 1.008-0.495s0.229-0.723 0.060-1.121l-2.577-6.048c3.136 0.462 6.022 1.308 8.154 1.932 1.472 0.431 2.455 0.719 3.008 0.731 0.012 0 0.023 0.001 0.035 0.001 0.542 0 1.31-0.364 1.889-2.099 0.394-1.183 0.611-2.746 0.611-4.401s-0.217-3.218-0.611-4.401zM16 7.5c0-0.513 0.022-1.015 0.064-1.496 0.513 0.052 0.936 0.716 0.936 1.496s-0.422 1.445-0.936 1.496c-0.042-0.481-0.064-0.983-0.064-1.496zM1 7.5c0-1.526 0.592-2.5 1-2.5 1.135 0 2.264-0.076 3.368-0.204-0.237 0.758-0.368 1.697-0.368 2.704s0.13 1.946 0.368 2.704c-1.104-0.128-2.233-0.204-3.368-0.204-0.408 0-1-0.974-1-2.5zM7.961 17.776c0.041 0.096 0.038 0.16 0.026 0.178s-0.069 0.046-0.174 0.046h-1.313c-0.319 0-0.681-0.282-0.759-0.592l-1.588-6.319c0.335 0.027 0.669 0.059 1 0.097l2.808 6.59zM6.489 10.353c-0.304-0.687-0.489-1.748-0.489-2.853 0-1.122 0.18-2.163 0.488-2.852 3.185-0.473 6.096-1.325 8.25-1.957 0.415-0.122 0.811-0.238 1.171-0.339-0.103 0.215-0.203 0.463-0.298 0.747-0.394 1.183-0.611 2.746-0.611 4.401s0.217 3.218 0.611 4.401c0.095 0.284 0.195 0.532 0.298 0.747-0.36-0.101-0.756-0.217-1.171-0.339-2.155-0.631-5.065-1.484-8.25-1.957zM18.44 11.585c-0.373 1.12-0.778 1.415-0.94 1.415s-0.567-0.296-0.94-1.415c-0.157-0.47-0.283-1.009-0.375-1.596 0.486-0.056 0.943-0.331 1.276-0.775 0.348-0.464 0.539-1.073 0.539-1.714s-0.192-1.251-0.539-1.714c-0.333-0.444-0.79-0.719-1.276-0.775 0.093-0.586 0.219-1.126 0.375-1.596 0.373-1.12 0.778-1.416 0.94-1.416s0.567 0.296 0.94 1.415c0.361 1.084 0.56 2.534 0.56 4.085s-0.199 3.001-0.56 4.085z"
  })));
}

LiniBullhorn.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniBullhorn;