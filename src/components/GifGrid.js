import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridImages } from './GifGridImages';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ( { category } ) => {

const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            {loading && <p className='animate__animated animate__flash'>Loading, please wait...</p>}
            <div className='card-grid'>

                {
                    images.map(img => {
                        return <GifGridImages 
                        key = { img.id } 
                        { ...img } 
                        />
                    })

                }
                
            </div>
        </>
    )
}
