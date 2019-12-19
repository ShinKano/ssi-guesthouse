import React from 'react'


const ButtonEx = (props) => (
    <div className="field">
        <a className="button is-primary has-text-weight-bold" target="_blank"
            href={props.href}>
                {props.text}
            
        </a>
    </div>
)

export default ButtonEx