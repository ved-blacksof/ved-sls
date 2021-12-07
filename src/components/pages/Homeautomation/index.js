import React, { useEffect } from 'react'
import { HomeautomationTemplate } from '../../templates'

export function Homeautomation() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <HomeautomationTemplate />            
        </div>
    )
}

