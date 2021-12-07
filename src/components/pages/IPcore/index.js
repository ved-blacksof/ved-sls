import React, { useEffect } from 'react'
import { IPcoreTemplate } from '../../templates'

export function IPcore() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <IPcoreTemplate />            
        </div>
    )
}

