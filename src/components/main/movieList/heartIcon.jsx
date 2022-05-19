import React from "react"
import { handleClick } from "../handlers/handleClick.js"
import { Checkbox } from "pretty-checkbox-react"
import "@djthoms/pretty-checkbox"

export default function HeartIcon({ movie }) {
  return (
    <div className="heartIcon">
      <Checkbox
        checked={movie.checked}
        shape="round"
        style={{ fontSize: "40px" }}
        className="mdiHeartIcon"
        onChange={(e) => handleClick(e, movie)}
        icon={<i className="mdi mdi-heart-outline" />}
        animation="jelly"
      />
    </div>
  )
}
