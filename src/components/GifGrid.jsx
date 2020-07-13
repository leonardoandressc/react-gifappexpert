import React from 'react'
//import { useEffect, useState } from 'react'
import { GifGrilItem } from './GifGrilItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({category}) => {
    const {data:images,loading} = useFetchGifs(category);
    
    return (
        <>
            <h3 className='animate__animated animate__bounce animate__delay-2s'>{category}</h3>
            {loading && 'loading'}
            <div className='card-grid'>
                {images.map((img)=>
                <GifGrilItem 
                {...img} 
                key={img.id}
                />)}
            </div>
        </>
    )
}
