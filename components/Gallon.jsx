import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniGallon(props = {}) {
  props.name = "Gallon";
  
  return (
    <Lini {...props}>
      <path d="M13.471 14.055c-0.251-0.376-0.471-1.103-0.471-1.555v-1c0-0.452 0.22-1.179 0.471-1.555l1.445-2.168c0.057-0.085 0.084-0.182 0.084-0.277-0-0.162-0.078-0.32-0.223-0.416-0.23-0.153-0.54-0.091-0.693 0.139l-1.445 2.168c-0.213 0.319-0.755 0.609-1.139 0.609h-4c-0.383 0-0.926-0.29-1.139-0.609l-1.445-2.168c-0.153-0.23-0.464-0.292-0.693-0.139-0.144 0.096-0.223 0.255-0.223 0.416 0 0.095 0.027 0.192 0.084 0.277l1.445 2.168c0.251 0.376 0.471 1.103 0.471 1.555v1c0 0.452-0.22 1.179-0.471 1.555l-1.445 2.168c-0.057 0.085-0.084 0.182-0.084 0.277 0 0.162 0.078 0.32 0.223 0.416 0.23 0.153 0.54 0.091 0.693-0.139l1.445-2.168c0.213-0.319 0.755-0.609 1.139-0.609h4c0.383 0 0.926 0.29 1.139 0.609l1.445 2.168c0.096 0.145 0.255 0.223 0.416 0.223 0.095 0 0.192-0.027 0.277-0.084 0.144-0.096 0.223-0.255 0.223-0.416 0-0.095-0.027-0.192-0.084-0.277l-1.445-2.168zM7.5 13c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5h-4z" />
      <path d="M11.5 5h-4c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5h4c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM7.5 3c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-4z" />
      <path d="M17.146 3.939l-0.033-0.033 0.439-0.439c0.585-0.585 0.585-1.536 0-2.121l-0.898-0.898c-0.283-0.283-0.659-0.438-1.061-0.438s-0.778 0.156-1.061 0.438l-0.439 0.439-0.033-0.033c-0.487-0.487-1.372-0.854-2.061-0.854h-5c-0.688 0-1.574 0.367-2.061 0.854l-3.086 3.086c-0.487 0.487-0.854 1.373-0.854 2.061v12.5c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-12.5c0-0.688-0.367-1.574-0.854-2.061zM15.24 1.154c0.094-0.094 0.219-0.145 0.354-0.145s0.26 0.052 0.354 0.145l0.898 0.898c0.195 0.195 0.195 0.512 0 0.707l-0.439 0.439-1.605-1.605 0.439-0.439zM17 18.5c0 0.276-0.224 0.5-0.5 0.5h-14c-0.276 0-0.5-0.224-0.5-0.5v-12.5c0-0.415 0.267-1.060 0.561-1.354l3.086-3.086c0.293-0.293 0.939-0.561 1.354-0.561h5c0.415 0 1.060 0.267 1.354 0.561l3.086 3.086c0.293 0.293 0.561 0.939 0.561 1.354v12.5z" />
    </Lini>
  );
}

LiniGallon.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
