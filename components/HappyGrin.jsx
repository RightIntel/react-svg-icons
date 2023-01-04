import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniHappyGrin(props = {}) {
  props.name = "HappyGrin";
  
  return (
    <Lini {...props}>
      <path d="M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z" />
      <path d="M15.5 10h-12c-0.276 0-0.5 0.224-0.5 0.5 0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5c0-0.276-0.224-0.5-0.5-0.5zM9 15.977c-0.715-0.065-1.39-0.266-2-0.579l-0-4.398h2v4.977zM10 11h2v4.398c-0.61 0.313-1.285 0.514-2 0.579v-4.977zM4.023 11h1.977l0 3.739c-1.1-0.91-1.842-2.238-1.978-3.739zM13 14.739v-3.739h1.977c-0.136 1.501-0.877 2.83-1.977 3.739z" />
      <path d="M7.947 6.277l0-0c-0.001-0.002-0.004-0.007-0.007-0.014-0-0-0-0.001-0-0.001-0.079-0.15-0.706-1.261-1.939-1.261-1.294 0-1.921 1.224-1.947 1.276-0.123 0.247-0.023 0.547 0.224 0.671 0.072 0.036 0.148 0.053 0.223 0.053 0.183 0 0.36-0.101 0.448-0.277 0.004-0.007 0.381-0.724 1.053-0.724 0.671 0 1.050 0.719 1.054 0.726l-0.001-0.003 0-0c0.082 0.164 0.251 0.277 0.447 0.277 0.276 0 0.5-0.224 0.5-0.5 0-0.080-0.019-0.156-0.053-0.223z" />
      <path d="M14.947 6.277l0-0c-0.001-0.002-0.004-0.007-0.007-0.014-0-0.001-0.001-0.001-0.001-0.001-0.080-0.151-0.707-1.261-1.939-1.261-1.294 0-1.921 1.224-1.947 1.276-0.123 0.247-0.023 0.547 0.224 0.671 0.072 0.036 0.148 0.053 0.223 0.053 0.183 0 0.36-0.101 0.448-0.277 0.004-0.007 0.381-0.724 1.053-0.724 0.671 0 1.050 0.719 1.054 0.726l-0.001-0.003 0-0c0.082 0.164 0.251 0.277 0.447 0.277 0.276 0 0.5-0.224 0.5-0.5 0-0.080-0.019-0.156-0.053-0.223z" />
    </Lini>
  );
}

LiniHappyGrin.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
