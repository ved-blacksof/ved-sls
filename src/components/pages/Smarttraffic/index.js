import React, { useEffect } from 'react'
import { SmarttrafficTemplate } from '../../templates'

export function Smarttraffic() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <SmarttrafficTemplate />        
        </div>
    )
}

