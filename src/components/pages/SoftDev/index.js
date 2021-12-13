import React, { useEffect } from 'react'
import { SoftDevTemplate } from '../../templates'
import { ScrollTop } from '../../molecules'

export function SoftDev() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <ScrollTop />
            <SoftDevTemplate />            
        </div>
    )
}

