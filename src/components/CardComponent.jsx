import React from 'react'

const CardComponent = ({title, imageUrl, description, imageAlt}) => {
  return (
    <div class="card h-100 shadow">
        <img src={imageUrl}
        alt={imageAlt}
        className="card-img-top"
        style={{height: '300px', objectFit: 'cover'}}
        ></img>
        <div className="card-body d-flex flex-column">
            <div className="card-title">{title}</div>
            <p className="card-text">{description}</p>
        </div>

    </div>
  )
}

export default CardComponent