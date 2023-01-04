import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniCoolantTemperature(props = {}) {
  props.name = "CoolantTemperature";
  
  return (
    <Lini {...props}>
      <path d="M5.5 16c-0.618 0-1.18-0.281-1.724-0.553-0.46-0.23-0.894-0.447-1.276-0.447-0.645 0-1.408 0.617-1.647 0.854-0.196 0.194-0.512 0.194-0.707-0.002s-0.195-0.511 0-0.706c0.117-0.117 1.18-1.146 2.354-1.146 0.618 0 1.18 0.281 1.724 0.553 0.46 0.23 0.894 0.447 1.276 0.447 0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M18.5 16c-0.128 0-0.255-0.049-0.353-0.146-0.24-0.238-1.002-0.854-1.647-0.854-0.382 0-0.816 0.217-1.276 0.447-0.543 0.272-1.106 0.553-1.724 0.553-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.382 0 0.816-0.217 1.276-0.447 0.543-0.272 1.106-0.553 1.724-0.553 1.173 0 2.236 1.029 2.354 1.146 0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z" />
      <path d="M14.5 20c-0.651 0-1.117-0.31-1.527-0.584-0.335-0.223-0.624-0.416-0.973-0.416s-0.638 0.193-0.973 0.416c-0.411 0.274-0.876 0.584-1.527 0.584s-1.119-0.311-1.532-0.586c-0.335-0.223-0.624-0.415-0.968-0.415s-0.633 0.192-0.968 0.415c-0.412 0.274-0.88 0.586-1.532 0.586-1.173 0-2.236-1.029-2.354-1.146-0.195-0.195-0.195-0.512 0-0.707s0.511-0.195 0.706-0.001v0c0.239 0.238 1.002 0.854 1.647 0.854 0.35 0 0.641-0.194 0.978-0.418 0.41-0.273 0.876-0.583 1.522-0.583s1.112 0.31 1.522 0.583c0.337 0.224 0.628 0.418 0.978 0.418 0.349 0 0.638-0.193 0.973-0.416 0.411-0.274 0.876-0.584 1.527-0.584s1.117 0.31 1.527 0.584c0.335 0.223 0.624 0.416 0.973 0.416 0.645 0 1.408-0.617 1.647-0.854 0.196-0.194 0.512-0.194 0.707 0.002s0.195 0.511-0 0.706c-0.117 0.117-1.18 1.146-2.354 1.146z" />
      <path d="M13.5 8c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2.5v-2h2.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2.5v-2.5c0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5v11c-0.623 0.469-1 1.211-1 2 0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5c0-0.789-0.377-1.531-1-2v-1.5h2.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2.5v-2h2.5zM9.5 16c-0.827 0-1.5-0.673-1.5-1.5 0-0.532 0.285-1.028 0.745-1.296 0.006-0.003 0.012-0.007 0.018-0.011 0.147-0.091 0.237-0.252 0.237-0.425v-11.268c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v11.264c-0.001 0.087 0.021 0.175 0.067 0.253 0.038 0.066 0.089 0.121 0.149 0.162 0.011 0.008 0.022 0.015 0.034 0.021 0.463 0.268 0.75 0.766 0.75 1.3 0 0.827-0.673 1.5-1.5 1.5z" />
    </Lini>
  );
}

LiniCoolantTemperature.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
