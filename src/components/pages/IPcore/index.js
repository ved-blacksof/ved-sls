import React, { useEffect } from 'react'
import { IPcoreTemplate } from '../../templates'
import { ScrollTop } from '../../molecules'

export function IPcore() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <ScrollTop />
            <IPcoreTemplate />            
        </div>
    )
}

