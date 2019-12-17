import React from 'react'

const Button = (props) => (
    <div className="field">
        <a className="button is-primary has-text-weight-bold"
            href={props.href}>
                {props.text}
        </a>
    </div>
)

export default Button