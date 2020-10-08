var React = require('react');

var PropTypes = require('prop-types');

function LiniShip2({
  size,
  ...props
}) {
  var className = 'Component Lini LiniShip2';

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
    d: "M18.5 20c-0.707 0-1.29-0.583-1.854-1.146-0.38-0.38-0.854-0.854-1.146-0.854-0.276 0-0.696 0.431-1.066 0.811-0.542 0.557-1.157 1.189-1.934 1.189-0.767 0-1.349-0.614-1.863-1.156-0.393-0.415-0.8-0.844-1.137-0.844-0.355 0-0.813 0.471-1.217 0.886-0.533 0.548-1.084 1.114-1.783 1.114-0.707 0-1.29-0.583-1.854-1.146-0.38-0.38-0.854-0.854-1.146-0.854s-0.766 0.473-1.146 0.854c-0.564 0.564-1.146 1.146-1.854 1.146-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.293 0 0.766-0.473 1.146-0.854 0.564-0.564 1.146-1.146 1.854-1.146s1.29 0.583 1.854 1.146c0.38 0.38 0.854 0.854 1.146 0.854 0.276 0 0.696-0.431 1.066-0.811 0.542-0.557 1.157-1.189 1.934-1.189 0.767 0 1.349 0.614 1.863 1.156 0.393 0.415 0.8 0.844 1.137 0.844 0.355 0 0.813-0.471 1.217-0.886 0.533-0.548 1.084-1.114 1.783-1.114 0.707 0 1.29 0.583 1.854 1.146 0.38 0.38 0.854 0.854 1.146 0.854 0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z",
    fill: "#000000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 16c-0.293 0-0.766-0.473-1.146-0.854-0.42-0.42-0.85-0.85-1.335-1.042 0.051-0.757 0.244-2.595 0.966-5.483 0.010-0.040 0.015-0.080 0.015-0.121 0-0.464-0.397-0.851-1.37-1.338-0.188-0.094-0.398-0.192-0.63-0.293l0-1.869c0-0.416-0.378-0.665-1.076-0.979-0.428-0.192-1.019-0.421-1.759-0.68-0.847-0.296-1.7-0.566-2.165-0.71v-2.13c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v2.13c-0.464 0.142-1.315 0.407-2.159 0.69-0.735 0.246-1.323 0.458-1.748 0.63-0.68 0.275-1.094 0.474-1.094 0.9v2.019c-0.232 0.101-0.442 0.199-0.63 0.293-0.973 0.487-1.37 0.874-1.37 1.338 0 0.041 0.005 0.082 0.015 0.121 0.722 2.888 0.915 4.726 0.966 5.483-0.485 0.192-0.915 0.623-1.335 1.042-0.38 0.38-0.854 0.854-1.146 0.854-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.707 0 1.29-0.583 1.854-1.146 0.38-0.38 0.854-0.854 1.146-0.854s0.766 0.473 1.146 0.854c0.564 0.564 1.146 1.146 1.854 1.146 0.699 0 1.25-0.566 1.783-1.114 0.404-0.415 0.862-0.886 1.217-0.886 0.337 0 0.744 0.429 1.137 0.844 0.514 0.542 1.096 1.156 1.863 1.156 0.777 0 1.392-0.631 1.934-1.189 0.37-0.38 0.79-0.811 1.066-0.811 0.293 0 0.766 0.473 1.146 0.854 0.564 0.564 1.146 1.146 1.854 1.146 0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM11.579 4.196c1.664 0.572 2.234 0.867 2.421 0.985l-0 1.281c-0.26-0.1-0.537-0.203-0.832-0.308-1.274-0.455-2.56-0.848-3.168-1.029v-1.448c0.417 0.131 0.99 0.316 1.579 0.518zM5 5.082c0.533-0.276 2.301-0.881 4-1.407v1.451c-0.609 0.181-1.894 0.574-3.168 1.029-0.294 0.105-0.571 0.208-0.832 0.308v-1.38zM13.717 15.114c-0.404 0.415-0.862 0.886-1.217 0.886-0.337 0-0.744-0.429-1.137-0.844-0.514-0.542-1.096-1.156-1.863-1.156-0.777 0-1.392 0.631-1.934 1.189-0.37 0.38-0.79 0.811-1.066 0.811-0.293 0-0.766-0.473-1.146-0.854-0.43-0.43-0.871-0.871-1.37-1.056-0.047-0.767-0.233-2.608-0.957-5.544 0.118-0.115 0.497-0.398 1.667-0.886 0-0 0.001-0 0.001-0.001 0.45-0.187 1.016-0.405 1.73-0.655 1.347-0.472 2.657-0.862 3.075-0.984 0.417 0.122 1.724 0.511 3.071 0.983 0.715 0.25 1.282 0.468 1.733 0.656 0.001 0.001 0.003 0.001 0.004 0.002 1.169 0.487 1.548 0.77 1.666 0.885-0.724 2.938-0.91 4.779-0.957 5.546-0.481 0.182-0.895 0.607-1.299 1.022z",
    fill: "#000000"
  })));
}

LiniShip2.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniShip2;