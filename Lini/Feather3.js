var React = require('react');

var PropTypes = require('prop-types');

function LiniFeather3({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniFeather3';

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
    d: "M4.501 15c-0.017 0-0.034-0.001-0.052-0.003-0.273-0.028-0.472-0.271-0.447-0.544 0.239-2.52 1.062-4.786 2.449-6.734 1.138-1.599 2.649-2.982 4.493-4.11 3.19-1.952 6.524-2.609 7.556-2.609 0.276 0 0.5 0.224 0.5 0.5 0 0.944-0.877 1.821-1.252 2.196-0.611 0.611-1.712 0.993-2.777 1.363-0.031 0.011-0.062 0.022-0.093 0.032 0.682-0.034 1.269-0.039 1.557-0.039 0.065 0 0.101 0 0.101 0 0.186 0.002 0.355 0.106 0.44 0.271s0.072 0.363-0.035 0.516c-0.8 1.145-1.776 2.037-2.983 2.727-0.579 0.331-1.217 0.485-2.009 0.485-0.462 0-0.926-0.052-1.375-0.102-0.433-0.048-0.881-0.098-1.309-0.098-0.774 0-1.363 0.162-1.909 0.526-0.017 0.012-0.035 0.022-0.054 0.031-0.725 0.362-1.352 1.351-1.815 2.859-0.367 1.196-0.49 2.278-0.491 2.289-0.028 0.255-0.245 0.445-0.496 0.445zM17.805 2.068c-1.305 0.2-3.851 0.872-6.338 2.394-1.376 0.842-2.917 2.068-4.157 3.794 0.576-0.275 1.211-0.405 1.956-0.405 0.484 0 0.96 0.053 1.42 0.104 0.442 0.049 0.859 0.096 1.265 0.096 0.611 0 1.091-0.112 1.513-0.353 0.789-0.451 1.45-0.98 2.028-1.629-0.928 0.029-2.277 0.11-3.125 0.336-0.201 0.054-0.414-0.023-0.535-0.192s-0.125-0.395-0.010-0.568c0.477-0.715 1.616-1.111 2.823-1.53 0.958-0.333 1.949-0.677 2.398-1.126 0.158-0.158 0.532-0.532 0.763-0.921z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M7.568 16.925c-0.006-0.006-0.568-0.641-0.568-1.425 0-0.36-0.193-0.701-0.544-0.961-0.222-0.164-0.535-0.117-0.699 0.105s-0.117 0.535 0.105 0.699c0.114 0.084 0.139 0.146 0.139 0.157 0 0.017-0.054 0.132-0.309 0.26-0.305 0.153-0.739 0.24-1.191 0.24s-0.885-0.088-1.191-0.24c-0.256-0.128-0.309-0.243-0.309-0.26 0-0.008 0.016-0.054 0.095-0.122 0.209-0.181 0.232-0.496 0.051-0.705s-0.496-0.232-0.705-0.051c-0.364 0.315-0.441 0.651-0.441 0.878 0 0.785-0.564 1.42-0.568 1.425-0.543 0.593-0.543 1.557 0 2.15 0.087 0.095 0.91 0.925 3.068 0.925s2.981-0.83 3.068-0.925c0.543-0.593 0.543-1.557 0-2.15zM6.831 18.399c-0.006 0.006-0.627 0.601-2.331 0.601-1.656 0-2.293-0.566-2.336-0.606-0.19-0.214-0.188-0.582 0.005-0.793 0.022-0.024 0.366-0.405 0.604-0.993 0.029 0.016 0.058 0.032 0.089 0.047 0.446 0.223 1.027 0.346 1.638 0.346s1.192-0.123 1.638-0.346c0.030-0.015 0.060-0.031 0.089-0.047 0.238 0.588 0.582 0.969 0.604 0.993 0.195 0.213 0.195 0.586 0 0.799z"
  }, pathProps))));
}

LiniFeather3.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFeather3;