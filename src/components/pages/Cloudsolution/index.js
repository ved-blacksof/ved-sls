import React, { useEffect } from 'react'
import {CloudsolutionTemplate} from '../../templates'

export function Cloudsolution() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])

    return (
        <div>
            <CloudsolutionTemplate/>  
        </div>
    )
}
