var React = require('react');

var PropTypes = require('prop-types');

function LiniUpload({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniUpload';

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
    d: "M13.854 4.646l-4-4c-0.195-0.195-0.512-0.195-0.707 0l-4 4c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l3.146-3.146v10.293c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10.293l3.146 3.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 20c-2.488 0-4.834-0.542-6.607-1.527-1.866-1.037-2.893-2.447-2.893-3.973 0-2.641 3.128-4.953 7.437-5.496 0.272-0.034 0.521 0.157 0.558 0.428s-0.151 0.522-0.422 0.563c-1.321 0.197-2.519 0.634-3.371 1.232-0.776 0.544-1.203 1.174-1.203 1.774 0 0.725 0.647 1.464 1.774 2.028 1.254 0.627 2.932 0.972 4.726 0.972s3.472-0.345 4.726-0.972c1.127-0.564 1.774-1.303 1.774-2.028 0-0.6-0.427-1.23-1.203-1.774-0.852-0.598-2.049-1.035-3.371-1.232-0.271-0.040-0.459-0.291-0.422-0.563s0.286-0.462 0.558-0.428c4.31 0.543 7.437 2.855 7.437 5.496 0 1.525-1.027 2.936-2.893 3.973-1.773 0.985-4.119 1.527-6.607 1.527zM2.126 12.243c-0.716 0.681-1.126 1.457-1.126 2.257 0 1.146 0.845 2.246 2.379 3.098 1.627 0.904 3.801 1.402 6.121 1.402s4.494-0.498 6.121-1.402c1.534-0.852 2.379-1.953 2.379-3.098 0-0.8-0.411-1.576-1.126-2.257 0.083 0.249 0.126 0.502 0.126 0.757 0 1.134-0.826 2.172-2.327 2.922-1.39 0.695-3.227 1.078-5.173 1.078s-3.783-0.383-5.173-1.078c-1.5-0.75-2.327-1.788-2.327-2.922 0-0.254 0.043-0.508 0.126-0.757z",
    fill: color
  })));
}

LiniUpload.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniUpload;