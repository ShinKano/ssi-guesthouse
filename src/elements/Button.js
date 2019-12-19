import React from 'react'
import { Link } from 'gatsby'

const Button = (props) => (
    <div className="field">
        <Link className={`button has-text-weight-bold ${props.green ? "is-success" : "is-primary"}`}
            to={props.to}>
                {props.text}
        </Link>
    </div>
)

export default Button