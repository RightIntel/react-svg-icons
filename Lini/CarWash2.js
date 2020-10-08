var React = require('react');

var PropTypes = require('prop-types');

function LiniCarWash2({
  size,
  color,
  ...props
}) {
  var className = 'Component Lini LiniCarWash2';

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
    d: "M20.001 15.51c0-0.011-0-0.023-0.001-0.034-0.006-0.258-0.094-1.833-1.276-2.424-0.171-0.085-0.525-0.262-3.883-0.524-0.122-0.28-0.327-0.731-0.576-1.203-0.779-1.478-1.27-1.817-1.572-1.943-1.057-0.442-4.242-0.542-6.314-0.024-1.297 0.324-2.459 1.088-3.36 2.209-0.513 0.638-0.807 1.223-0.924 1.483-0.297 0.234-0.565 0.506-0.803 0.817-0.857 1.115-1.291 2.673-1.291 4.632 0 0.133 0.053 0.26 0.146 0.354s0.221 0.146 0.354 0.146l1.035-0c0.249-0 0.46-0.183 0.495-0.429 0.028-0.197 0.076-0.388 0.141-0.57 0.413 1.164 1.525 2 2.828 2s2.415-0.836 2.828-2c0.065 0.183 0.113 0.373 0.141 0.57 0.035 0.246 0.246 0.429 0.495 0.429l6.071 0c0.249 0 0.46-0.183 0.495-0.429 0.017-0.119 0.042-0.236 0.073-0.35 0.311 1.028 1.267 1.779 2.395 1.779 1.38-0 2.502-1.123 2.502-2.502 0-0.555-0.181-1.071-0.491-1.489 0.272-0.005 0.491-0.226 0.491-0.5zM6.621 10.329c1.914-0.479 4.898-0.353 5.686-0.024 0.038 0.016 0.39 0.192 1.069 1.48 0.122 0.23 0.233 0.458 0.328 0.66-0.605-0.042-1.285-0.086-2.050-0.132-3.094-0.186-6.104-0.312-6.134-0.313-0.007-0-0.014-0-0.021-0-0.621 0-1.194 0.072-1.717 0.215 0.583-0.73 1.502-1.552 2.839-1.886zM5 19c-1.103 0-2-0.897-2-2 0-0.082 0.006-0.163 0.015-0.244 0.534-0.471 1.232-0.756 1.985-0.756s1.451 0.285 1.985 0.756c0.010 0.081 0.015 0.162 0.015 0.244 0 1.103-0.897 2-2 2zM14.126 18l-5.253-0c-0.2-0.776-0.632-1.479-1.242-2.012-0.728-0.637-1.663-0.987-2.632-0.987s-1.903 0.351-2.632 0.987c-0.61 0.534-1.042 1.237-1.242 2.012h-0.116c0.105-2.387 1.013-4.995 4.479-5 0.197 0.008 3.083 0.131 6.058 0.309 5.681 0.34 6.588 0.575 6.728 0.638 0.398 0.199 0.577 0.677 0.658 1.053l-0.934 0c-0.969 0-1.903 0.351-2.632 0.987-0.61 0.534-1.042 1.237-1.242 2.012zM17.498 19c-0.828 0-1.502-0.674-1.502-1.502 0-0.393 0.149-0.76 0.419-1.041 0.388-0.243 0.833-0.4 1.307-0.444 0.732 0.109 1.278 0.739 1.278 1.485 0 0.828-0.674 1.502-1.502 1.502z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M15.492 6.009c-0.83 0-1.504-0.675-1.504-1.504s0.675-1.504 1.504-1.504 1.504 0.675 1.504 1.504-0.675 1.504-1.504 1.504zM15.492 4c-0.278 0-0.504 0.226-0.504 0.504s0.226 0.504 0.504 0.504 0.504-0.226 0.504-0.504-0.226-0.504-0.504-0.504z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M18.498 6c-0.132 0-0.261-0.053-0.354-0.147s-0.146-0.222-0.146-0.353 0.053-0.261 0.146-0.353c0.093-0.093 0.222-0.147 0.354-0.147s0.26 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.26-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6.5 6c-0.132 0-0.261-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.26-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M6 3c-1.654 0-3 1.346-3 3 0 0.377 0.069 0.742 0.199 1.081-1.823 0.372-3.199 1.988-3.199 3.919 0 0.6 0.13 1.177 0.385 1.715 0.086 0.18 0.265 0.286 0.452 0.286 0.072 0 0.145-0.016 0.214-0.048 0.249-0.118 0.356-0.417 0.237-0.666-0.191-0.403-0.288-0.836-0.288-1.286 0-1.577 1.223-2.874 2.771-2.991 0.129 0.142 0.272 0.273 0.429 0.391 0.090 0.068 0.195 0.1 0.3 0.1 0.152 0 0.302-0.069 0.4-0.2 0.166-0.221 0.121-0.534-0.099-0.7-0.509-0.382-0.8-0.965-0.8-1.6 0-1.103 0.897-2 2-2s2 0.897 2 2c0 0.437-0.138 0.852-0.4 1.2-0.166 0.221-0.121 0.534 0.099 0.7s0.534 0.121 0.7-0.099c0.393-0.523 0.6-1.145 0.6-1.8 0-1.654-1.346-3-3-3z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M1.5 6.009c-0.132 0-0.26-0.053-0.353-0.146s-0.147-0.222-0.147-0.354 0.053-0.26 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.354c-0.093 0.093-0.222 0.146-0.353 0.146z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M2.5 4c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM2.5 2c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M16.496 10c-0.132 0-0.261-0.053-0.354-0.147s-0.146-0.222-0.146-0.353 0.053-0.261 0.146-0.353c0.093-0.093 0.222-0.147 0.354-0.147s0.26 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
  }, pathProps)), /*#__PURE__*/React.createElement("path", Object.assign({
    d: "M15.492 6.992c-0.31 0-0.617 0.041-0.912 0.12-0.458-0.688-1.232-1.112-2.080-1.112-0.885 0-1.712 0.475-2.159 1.239-0.139 0.238-0.059 0.545 0.179 0.684s0.545 0.059 0.684-0.179c0.268-0.459 0.765-0.744 1.296-0.744 0.446 0 0.858 0.196 1.138 0.522-0.165 0.103-0.322 0.219-0.469 0.349-0.207 0.183-0.226 0.499-0.043 0.706s0.499 0.226 0.706 0.043c0.458-0.405 1.048-0.628 1.661-0.628 1.383-0 2.508 1.125 2.508 2.508 0 0.286-0.048 0.567-0.142 0.834-0.092 0.26 0.045 0.546 0.305 0.638 0.055 0.019 0.111 0.029 0.166 0.029 0.206 0 0.399-0.128 0.472-0.334 0.132-0.374 0.199-0.767 0.199-1.166 0-1.934-1.574-3.508-3.508-3.508z"
  }, pathProps))));
}

LiniCarWash2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniCarWash2;