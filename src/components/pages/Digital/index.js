import React, { useEffect } from 'react'
import { DigitalTemplate } from '../../templates'
import { ScrollTop } from '../../molecules'

export function Digital() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <ScrollTop />
            <DigitalTemplate/>
        </div>
    )
}
