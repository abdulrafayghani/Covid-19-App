import React from 'react'
import FadeIn from 'react-fade-in'
import Lottie from 'react-lottie'
import * as loading from './loading.json'

export const Loading = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animation: loading.default,
        redereSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }  
    } 
    
    return (
        <div>
            <FadeIn>
                <h1>Getting App Ready</h1>
                <Lottie options={defaultOptions} height={120} width={120} />
            </FadeIn>
            
        </div>
    )
}
