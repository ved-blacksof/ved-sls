import React, { useEffect } from 'react'
import { TransformersTemplate } from '../../templates'
import { ScrollTop } from '../../molecules'

export function Transformers() {

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <ScrollTop />
            <TransformersTemplate />            
        </div>
    )
}

