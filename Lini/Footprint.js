import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFootprint({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFootprint';

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
    d: "M14 11.997c-1.145 0-2.177-.562-2.907-1.583C10.378 9.413 10 8.06 10 6.5c0-.695.053-2.48.549-4.036C11.197.428 12.24 0 13 0c1.12 0 2.152.712 2.907 2.005C16.612 3.214 17 4.81 17 6.5c0 1.269 0 2.581-.338 3.594-.421 1.263-1.317 1.903-2.662 1.903zM13 1c-.774 0-1.242.961-1.498 1.767C11.049 4.19 11 5.852 11 6.5c0 1.331.322 2.515.907 3.333.545.762 1.268 1.164 2.093 1.164.916 0 1.428-.365 1.713-1.219C16 8.918 16 7.689 16 6.5 16 3.519 14.626 1 13 1zM13.5 18c-.765 0-1.773-.311-2.228-1.79C11 15.326 11 14.271 11 13.5a.5.5 0 01.723-.447c.404.202 1.068.322 1.776.322s1.373-.12 1.776-.322a.5.5 0 01.723.447c0 .77 0 1.825-.272 2.71-.455 1.48-1.463 1.791-2.228 1.791zm-1.494-3.794c.015.57.063 1.195.221 1.709.296.961.835 1.085 1.272 1.085s.976-.123 1.272-1.085c.158-.515.207-1.139.221-1.709-.443.109-.957.169-1.494.169s-1.051-.059-1.494-.169zM5 13.997c-1.345 0-2.241-.64-2.662-1.903C2 11.08 2 9.768 2 8.5c0-1.69.388-3.286 1.093-4.495C3.847 2.712 4.88 2 6 2c.761 0 1.804.427 2.451 2.464C8.946 6.021 9 7.805 9 8.5c0 1.56-.378 2.914-1.093 3.914-.73 1.021-1.762 1.583-2.907 1.583zM6 3C4.374 3 3 5.519 3 8.5c0 1.189 0 2.418.287 3.278.285.855.797 1.219 1.713 1.219.825 0 1.549-.403 2.093-1.164C7.678 11.015 8 9.831 8 8.5c0-.648-.049-2.31-.502-3.733C7.242 3.961 6.773 3 6 3zM5.5 20c-.765 0-1.773-.311-2.228-1.79C3 17.326 3 16.271 3 15.5a.5.5 0 01.723-.447c.404.202 1.068.322 1.776.322s1.373-.12 1.776-.322a.5.5 0 01.723.447c0 .77 0 1.825-.272 2.71-.455 1.48-1.463 1.791-2.228 1.791zm-1.493-3.794c.015.57.063 1.195.221 1.709C4.524 18.876 5.063 19 5.5 19s.976-.123 1.272-1.085c.158-.515.207-1.139.221-1.709-.443.109-.957.169-1.493.169s-1.051-.059-1.494-.169z"
  })));
}
LiniFootprint.propTypes = {
  size: PropTypes.number.isRequired
};