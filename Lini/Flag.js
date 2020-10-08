var React = require('react');

var PropTypes = require('prop-types');

function LiniFlag({
  size,
  ...props
}) {
  var className = 'Component Lini LiniFlag';

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
    d: "M1.5 20c-0.276 0-0.5-0.224-0.5-0.5v-17c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v17c0 0.276-0.224 0.5-0.5 0.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 12c-2.207 0-3.347-1.14-4.354-2.146-0.995-0.995-1.854-1.854-3.646-1.854s-2.652 0.859-3.646 1.854c-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707c1.006-1.006 2.146-2.146 4.354-2.146s3.347 1.14 4.354 2.146c0.995 0.995 1.854 1.854 3.646 1.854 1.704 0 2.565-0.776 3.5-1.707v-5.628c-0.839 0.723-1.883 1.335-3.5 1.335-2.207 0-3.347-1.14-4.354-2.146-0.995-0.995-1.854-1.854-3.646-1.854s-2.652 0.859-3.646 1.854c-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707c1.006-1.006 2.146-2.146 4.354-2.146s3.347 1.14 4.354 2.146c0.995 0.995 1.854 1.854 3.646 1.854s2.652-0.859 3.646-1.854c0.143-0.143 0.358-0.186 0.545-0.108s0.309 0.26 0.309 0.462v7c0 0.133-0.053 0.26-0.146 0.354-1.006 1.006-2.146 2.146-4.354 2.146z"
  })));
}

LiniFlag.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniFlag;