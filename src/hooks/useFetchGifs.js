import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs=(category)=>{
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    console.log(category);
                
    useEffect(()=>{
        getGifs(category)
        .then(img=>{
            // setTimeout(() => {
                setState({
                    data:img,
                    loading: false,
                })    
            // }, 3000);
        })
    },[])
    // useEffect(()=>{
    //     // getGifs(category).then(img=>setImages(img))
    //     getGifs(category).then(setImages);
    // },[ category ]);
    
    return state;
}


