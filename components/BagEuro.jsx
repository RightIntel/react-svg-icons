import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniBagEuro(props = {}) {
  props.name = "BagEuro";
  
  return (
    <Lini {...props}>
      <path d="M15.733 10.136c-0.716-1.203-1.626-2.21-2.358-3.018-0.539-0.596-1.093-1.208-1.291-1.633 0.331-0.193 0.556-0.418 0.77-0.631 0.195-0.195 0.195-0.512 0-0.707-0.171-0.171-0.434-0.192-0.628-0.064 0.222-0.664 0.67-1.503 1.575-2.182 0.193-0.144 0.255-0.406 0.148-0.622-0.026-0.053-0.653-1.289-1.948-1.289-0.81 0-1.063 0.51-1.198 0.783-0.108 0.218-0.112 0.227-0.302 0.227-0.378 0-0.809-0.219-1.266-0.451-0.542-0.275-1.102-0.559-1.719-0.559l-0.020 0c-1.17 0.012-2.231 1.040-2.348 1.157-0.103 0.103-0.155 0.244-0.145 0.389s0.083 0.278 0.199 0.365c0.736 0.552 1.261 1.272 1.56 2.141 0.005 0.014 0.009 0.027 0.014 0.041-0.194-0.127-0.457-0.105-0.627 0.065-0.195 0.195-0.195 0.512 0 0.707 0.213 0.213 0.438 0.438 0.77 0.632-0.197 0.424-0.752 1.036-1.292 1.633-0.732 0.809-1.643 1.815-2.358 3.018-0.852 1.433-1.267 2.861-1.267 4.364 0 2.046 0.755 3.536 2.243 4.429 1.218 0.731 2.889 1.071 5.257 1.071s4.039-0.34 5.257-1.071c1.488-0.893 2.243-2.383 2.243-4.429 0-1.503-0.414-2.931-1.267-4.364zM6.278 1.501c0.343-0.248 0.809-0.507 1.227-0.511l0.010-0c0.378 0 0.809 0.219 1.266 0.451 0.542 0.275 1.102 0.559 1.719 0.559 0.81 0 1.063-0.51 1.198-0.783 0.108-0.218 0.112-0.227 0.302-0.227 0.367 0 0.647 0.218 0.825 0.417-1.379 1.229-1.712 2.748-1.792 3.437-0.359 0.098-0.843 0.157-1.533 0.157s-1.174-0.059-1.533-0.157c-0.078-0.672-0.397-2.131-1.689-3.342zM9.5 19c-4.556 0-6.5-1.346-6.5-4.5 0-2.992 1.946-5.141 3.366-6.711 0.69-0.762 1.24-1.37 1.486-1.947 0.424 0.098 0.958 0.158 1.648 0.158s1.224-0.060 1.648-0.158c0.246 0.577 0.796 1.185 1.485 1.947 1.421 1.57 3.366 3.719 3.366 6.711 0 3.154-1.944 4.5-6.5 4.5z" />
      <path d="M11.75 15.067c-0.239-0.138-0.545-0.057-0.683 0.182-0.252 0.435-0.854 0.75-1.433 0.75-0.682 0-1.297-0.43-1.533-1h1.399c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.5v-1h1.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.399c0.235-0.57 0.851-1 1.533-1 0.579 0 1.182 0.316 1.433 0.75 0.138 0.239 0.444 0.321 0.683 0.182s0.321-0.444 0.182-0.683c-0.426-0.736-1.371-1.249-2.299-1.249-0.658 0-1.321 0.261-1.819 0.717-0.392 0.359-0.653 0.803-0.76 1.283h-0.555c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.555c0.107 0.48 0.368 0.924 0.76 1.283 0.498 0.456 1.161 0.717 1.819 0.717 0.928 0 1.873-0.514 2.299-1.25 0.138-0.239 0.057-0.545-0.182-0.683z" />
    </Lini>
  );
}

LiniBagEuro.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
