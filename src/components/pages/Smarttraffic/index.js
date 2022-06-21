import React, { useEffect } from 'react'
import { SmarttrafficTemplate } from '../../templates'
import { ScrollTop } from '../../molecules'

export function Smarttraffic() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <ScrollTop />
            <SmarttrafficTemplate />        
        </div>
    )
}

