import React, { useEffect } from 'react'
import { ElectronicTemplate } from '../../templates'
import { ScrollTop } from '../../molecules'

export function Electronics() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <ScrollTop />
            <ElectronicTemplate/>
        </div>
    )
}
