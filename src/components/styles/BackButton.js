import React from "react"
import Button from "./Button"
export default props => (
  <Button
    title="Go back"
    className="back"
    onClick={() => window.history.back()}
    style={props.style}
  >
    {props.children}
  </Button>
)
