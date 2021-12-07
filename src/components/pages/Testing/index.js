import React, { useEffect } from 'react'
import { TestingTemplate } from '../../templates'

export function Testing() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <TestingTemplate />            
        </div>
    )
}

