import React from 'react'

export const GifGrilItem = ({url,id,title}) => {
    return (
        <div className='card'>
                        <img src={url} alt={url}/><br/>
                        <p>{title}</p>
        </div>
    )
}
