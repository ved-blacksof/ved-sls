import React, { useEffect } from 'react'
import { MachineLearningTemplate } from '../../templates'
import { ScrollTop } from '../../molecules'

export function MachineLearning() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <ScrollTop />
            <MachineLearningTemplate />            
        </div>
    )
}

