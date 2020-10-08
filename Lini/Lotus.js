var React = require('react');

var PropTypes = require('prop-types');

function LiniLotus({
  size,
  color = '#000000',
  ...props
}) {
  var className = 'Component Lini LiniLotus';

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
    d: "M18.612 11.154c-0.146-0.253-0.333-0.474-0.551-0.655 0.706-0.591 1.048-1.559 0.795-2.506s-1.035-1.615-1.943-1.773c0.317-0.865 0.129-1.876-0.564-2.569s-1.702-0.881-2.567-0.565c-0.048-0.28-0.146-0.552-0.292-0.805-0.326-0.565-0.852-0.969-1.482-1.137-0.947-0.254-1.916 0.089-2.507 0.796-0.591-0.707-1.56-1.050-2.507-0.796s-1.615 1.035-1.773 1.943c-0.865-0.317-1.876-0.129-2.569 0.564s-0.881 1.702-0.565 2.567c-0.28 0.048-0.552 0.146-0.805 0.292-0.565 0.326-0.969 0.852-1.137 1.482s-0.082 1.288 0.244 1.852c0.146 0.253 0.333 0.474 0.551 0.655-0.706 0.591-1.048 1.559-0.795 2.506s1.035 1.615 1.943 1.773c-0.317 0.865-0.129 1.875 0.564 2.569 0.461 0.461 1.074 0.715 1.726 0.715 0.292 0 0.575-0.051 0.841-0.149 0.049 0.279 0.146 0.55 0.292 0.803 0.326 0.565 0.852 0.969 1.482 1.137 0.21 0.056 0.424 0.084 0.636 0.084 0.423 0 0.84-0.111 1.217-0.328 0.253-0.146 0.474-0.333 0.655-0.551 0.459 0.549 1.147 0.878 1.875 0.878 0.209-0 0.421-0.027 0.631-0.083 0.947-0.254 1.615-1.035 1.773-1.943 0.272 0.099 0.557 0.15 0.843 0.15 0.625 0 1.25-0.238 1.726-0.714 0.461-0.461 0.715-1.074 0.715-1.726 0-0.292-0.051-0.575-0.149-0.841 0.279-0.049 0.55-0.146 0.803-0.292 0.565-0.326 0.969-0.852 1.137-1.482s0.082-1.288-0.244-1.852zM17.89 8.252c0.1 0.372 0.049 0.76-0.144 1.094-0.182 0.316-0.471 0.546-0.816 0.654h-2.957c-0.051-0.458-0.171-0.896-0.349-1.303l2.56-1.478c0.749-0.168 1.506 0.285 1.707 1.033zM9.5 14c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zM15.642 4.358c0.547 0.547 0.562 1.429 0.042 1.994l-2.563 1.48c-0.268-0.363-0.59-0.685-0.953-0.953l1.479-2.562c0.565-0.52 1.447-0.506 1.995 0.041zM10.654 2.254c0.333-0.192 0.722-0.244 1.094-0.144s0.683 0.338 0.875 0.671c0.182 0.316 0.238 0.681 0.159 1.034l-1.479 2.561c-0.407-0.178-0.844-0.299-1.303-0.349v-2.956c0.108-0.346 0.339-0.635 0.654-0.817zM7.252 2.11c0.372-0.1 0.76-0.048 1.094 0.144 0.316 0.182 0.546 0.471 0.654 0.816v2.957c-0.458 0.051-0.896 0.171-1.303 0.349l-1.478-2.56c-0.168-0.749 0.285-1.506 1.033-1.707zM3.358 4.358c0.547-0.547 1.429-0.562 1.994-0.042l1.48 2.563c-0.363 0.268-0.685 0.59-0.953 0.953l-2.562-1.479c-0.52-0.565-0.506-1.447 0.041-1.994zM1.11 8.252c0.1-0.372 0.338-0.683 0.671-0.875 0.316-0.182 0.681-0.238 1.034-0.159l2.561 1.479c-0.178 0.407-0.299 0.844-0.349 1.303h-2.956c-0.346-0.108-0.635-0.339-0.817-0.654-0.192-0.333-0.244-0.722-0.144-1.094zM1.11 12.748c-0.1-0.372-0.048-0.76 0.144-1.094 0.182-0.316 0.471-0.546 0.816-0.654h2.957c0.051 0.458 0.171 0.896 0.349 1.303l-2.56 1.478c-0.749 0.168-1.506-0.285-1.707-1.033zM3.358 16.642c-0.547-0.547-0.562-1.429-0.042-1.994l2.563-1.479c0.268 0.363 0.59 0.685 0.953 0.953l-1.479 2.562c-0.565 0.52-1.447 0.506-1.994-0.041zM8.346 18.746c-0.333 0.192-0.722 0.244-1.094 0.144s-0.683-0.338-0.875-0.671c-0.182-0.316-0.238-0.681-0.159-1.034l1.479-2.561c0.407 0.178 0.844 0.299 1.303 0.349v2.956c-0.108 0.346-0.339 0.635-0.654 0.817zM11.748 18.89c-0.372 0.1-0.76 0.049-1.094-0.144-0.316-0.182-0.546-0.471-0.654-0.816v-2.957c0.458-0.051 0.896-0.171 1.303-0.349l1.478 2.56c0.168 0.749-0.285 1.506-1.033 1.707zM15.642 16.642c-0.547 0.547-1.429 0.562-1.994 0.042l-1.479-2.563c0.363-0.268 0.685-0.59 0.953-0.953l2.562 1.479c0.52 0.565 0.506 1.447-0.041 1.995zM17.89 12.748c-0.1 0.372-0.338 0.683-0.671 0.875-0.316 0.182-0.681 0.238-1.034 0.159l-2.561-1.479c0.178-0.407 0.299-0.844 0.349-1.303h2.956c0.346 0.108 0.635 0.339 0.817 0.654 0.192 0.333 0.244 0.722 0.144 1.094z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 13c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM9.5 9c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5z",
    fill: color
  })));
}

LiniLotus.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};
module.exports = LiniLotus;