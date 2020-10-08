var React = require('react');

var PropTypes = require('prop-types');

function LiniEvil({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniEvil';

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
    d: "M7.853 6.854c0.037-0.037 0.069-0.080 0.094-0.13 0.123-0.247 0.023-0.547-0.224-0.671l-2-1c-0.247-0.123-0.547-0.023-0.671 0.224s-0.023 0.547 0.224 0.671l0.49 0.245c-0.457 0.257-0.767 0.747-0.767 1.308 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.231-0.053-0.451-0.147-0.646zM6.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.233 6.192l0.49-0.245c0.247-0.123 0.347-0.424 0.224-0.671s-0.424-0.347-0.671-0.224l-2 1c-0.247 0.123-0.347 0.424-0.224 0.671 0.025 0.049 0.057 0.093 0.094 0.13-0.094 0.196-0.147 0.415-0.147 0.646 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.561-0.31-1.050-0.767-1.308zM12.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.613 5.552c0.378-0.566 0.707-1.494 1-2.816 0.252-1.138 0.378-2.132 0.383-2.174 0.028-0.222-0.096-0.436-0.302-0.523s-0.446-0.026-0.585 0.149c-0.49 0.616-1.887 2.205-2.88 2.732-1.641-1.246-3.633-1.92-5.729-1.92s-4.088 0.675-5.729 1.92c-0.992-0.527-2.389-2.116-2.88-2.732-0.14-0.175-0.379-0.236-0.585-0.149s-0.33 0.301-0.302 0.523c0.005 0.042 0.131 1.036 0.383 2.174 0.293 1.322 0.622 2.25 1 2.816-0.903 1.475-1.387 3.174-1.387 4.948 0 2.538 0.988 4.923 2.783 6.717s4.18 2.782 6.717 2.782 4.923-0.988 6.717-2.782c1.794-1.794 2.782-4.18 2.782-6.717 0-1.774-0.483-3.473-1.387-4.948zM17.719 2.14c-0.19 0.927-0.446 1.881-0.739 2.501-0.235-0.299-0.489-0.586-0.763-0.859-0.061-0.061-0.123-0.121-0.186-0.181 0.582-0.382 1.185-0.942 1.687-1.462zM1.281 2.141c0.502 0.52 1.105 1.079 1.687 1.461-0.063 0.059-0.124 0.119-0.186 0.181-0.273 0.273-0.527 0.56-0.763 0.859-0.292-0.62-0.548-1.574-0.739-2.501zM9.5 19c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 16c-0.88 0-1.721-0.202-2.499-0.599-0.742-0.379-1.399-0.933-1.901-1.6-0.166-0.221-0.121-0.534 0.099-0.7s0.534-0.121 0.7 0.099c0.859 1.144 2.172 1.8 3.601 1.8s2.741-0.656 3.601-1.8c0.166-0.221 0.479-0.265 0.7-0.099s0.265 0.479 0.099 0.7c-0.502 0.668-1.159 1.221-1.901 1.6-0.778 0.398-1.619 0.599-2.499 0.599z",
    fill: color
  })));
}

LiniEvil.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniEvil;