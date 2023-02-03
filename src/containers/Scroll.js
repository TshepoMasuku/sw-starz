import React from 'react'

export default function Scroll(props) {
    return (
        <div 
            style={{
                height:'65vh',
                overflowY: 'scroll', 
                border: '2px solid gold',
            }}
        >
            { props.children }
        </div>
    )
}
