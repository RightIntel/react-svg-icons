import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniFilmPlay(props = {}) {
  props.name = "FilmPlay";
  
  return (
    <Lini {...props}>
      <path d="M7.5 15c-0.076 0-0.153-0.017-0.224-0.053-0.169-0.085-0.276-0.258-0.276-0.447v-9c0-0.189 0.107-0.363 0.276-0.447s0.372-0.066 0.524 0.047l6 4.5c0.126 0.094 0.2 0.243 0.2 0.4s-0.074 0.306-0.2 0.4l-6 4.5c-0.088 0.066-0.194 0.1-0.3 0.1zM8 6.5v7l4.667-3.5-4.667-3.5z" />
      <path d="M19.5 2h-19c-0.276 0-0.5 0.224-0.5 0.5v15c0 0.276 0.224 0.5 0.5 0.5h19c0.276 0 0.5-0.224 0.5-0.5v-15c0-0.276-0.224-0.5-0.5-0.5zM3 11h-2v-2h2v2zM3 8h-2v-2h2v2zM1 12h2v2h-2v-2zM4 3h12v14h-12v-14zM17 9h2v2h-2v-2zM17 8v-2h2v2h-2zM17 12h2v2h-2v-2zM19 5h-2v-2h2v2zM3 3v2h-2v-2h2zM1 15h2v2h-2v-2zM17 17v-2h2v2h-2z" />
    </Lini>
  );
}

LiniFilmPlay.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
