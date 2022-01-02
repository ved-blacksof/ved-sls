import React, { useEffect } from 'react'
import { ContactusTemplate } from '../../templates'
import { ScrollTop } from '../../molecules'

export function Contactus() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <>
            <ScrollTop />
            <ContactusTemplate/>
        </>
    )
}
