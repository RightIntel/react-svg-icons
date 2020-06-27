import React from 'react';
import PropTypes from 'prop-types';
export default function LiniUmbrella2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniUmbrella2';

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
    d: "M16.51 6.49C14.905 4.885 12.77 4 10.5 4s-4.405.884-6.01 2.49S2 10.23 2 12.5a.5.5 0 001 0c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5a.5.5 0 001 0c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5v6a.5.5 0 01-1 0 .5.5 0 00-1 0c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5v-6c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5a.5.5 0 001 0c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5a.5.5 0 001 0c0-2.27-.884-4.405-2.49-6.01zM16.5 10c-.817 0-1.544.394-2 1.002a2.497 2.497 0 00-4 0 2.497 2.497 0 00-4 0 2.497 2.497 0 00-3.168-.712C4.277 7.23 7.133 5 10.5 5s6.222 2.23 7.168 5.29A2.485 2.485 0 0016.5 10zM17.5 6a.5.5 0 01-.447-.724l1-2a.5.5 0 01.895.447l-1 2A.501.501 0 0117.5 6zM13.5 4a.5.5 0 01-.447-.724l1-2a.5.5 0 01.895.447l-1 2A.501.501 0 0113.5 4zM6.5 4a.5.5 0 01-.447-.724l1-2a.5.5 0 01.895.447l-1 2A.501.501 0 016.5 4zM1.5 7a.5.5 0 01-.447-.724l1-2a.5.5 0 01.895.447l-1 2A.501.501 0 011.5 7zM3.5 3a.5.5 0 01-.447-.724l1-2a.5.5 0 01.895.447l-1 2A.501.501 0 013.5 3zM16.5 3a.5.5 0 01-.447-.724l1-2a.5.5 0 01.895.447l-1 2A.501.501 0 0116.5 3zM10.5 3a.5.5 0 01-.447-.724l1-2a.5.5 0 01.895.447l-1 2A.501.501 0 0110.5 3z"
  })));
}
LiniUmbrella2.propTypes = {
  size: PropTypes.number.isRequired
};