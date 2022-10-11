import React from "react";
import "./button.styles.css";
import classnames from "classnames"

const Button = ({ variant, children, ...props }) => {

  const buttonClasses = classnames('button', {
    [variant]: variant,
  })

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}

export default Button