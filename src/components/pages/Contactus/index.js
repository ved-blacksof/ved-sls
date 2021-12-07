import React, { useEffect } from 'react'
import { ContactusTemplate } from '../../templates'

export function Contactus() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <>
            <ContactusTemplate/>
        </>
    )
}
