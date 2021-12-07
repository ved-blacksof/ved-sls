import React, { useEffect } from 'react'
import {AboutusTemplate} from '../../templates'

export function Aboutus() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <AboutusTemplate/>  
        </div>
    )
}
