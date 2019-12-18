import React from 'react'
import { Link } from 'gatsby'

const Button = (props) => (
    <div className="field">
        <Link className="button is-primary has-text-weight-bold"
            to={props.to}>
                {props.text}
        </Link>
    </div>
)

export default Button