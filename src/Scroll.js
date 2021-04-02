import React from 'react'

export default function Scroll(props) {
    return (
        <div style={{overflowY: 'scroll', height:'70vh'}} className="ba-ns b--yellow">
            { props.children }
        </div>
    )
}
