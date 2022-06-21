import React, { useEffect } from 'react'
import {AboutusTemplate} from '../../templates'
import { ScrollTop } from '../../molecules'


export function Aboutus() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <ScrollTop />
            <AboutusTemplate/>  
        </div>
    )
}
