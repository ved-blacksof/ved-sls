import React, { useEffect } from 'react'
import { DigitalTemplate } from '../../templates'

export function Digital() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <DigitalTemplate/>
        </div>
    )
}
