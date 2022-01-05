import React from 'react'

export const GifGridImages = ({ url, title }) => {

    return (
        <div className="card">
            <img src={url} alt={title} className="card animate__animated animate__fadeIn"/>
            <p>{title}</p>
        </div>
    )
}
