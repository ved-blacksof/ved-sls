import React, { useEffect } from 'react'
import { SoftDevTemplate } from '../../templates'

export function SoftDev() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <SoftDevTemplate />            
        </div>
    )
}

