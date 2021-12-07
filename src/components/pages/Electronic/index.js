import React, { useEffect } from 'react'
import { ElectronicTemplate } from '../../templates'

export function Electronics() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <ElectronicTemplate/>
        </div>
    )
}
