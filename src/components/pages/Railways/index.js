import React, { useEffect } from 'react'
import { RailwaysTemplate } from '../../templates'

export function Railways() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <RailwaysTemplate />            
        </div>
    )
}

