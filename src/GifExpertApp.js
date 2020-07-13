import React, { useState } from 'react'
import { AddCategories } from './components/AddCategories'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])
    return (
        <div>
            <h2>Gif expert app</h2>
            
            <hr/>
            <AddCategories setCategories={setCategories}  />
            <ol>
                {
                    categories.map((category) => (
                        <GifGrid 
                        category={category}
                        key={category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}

