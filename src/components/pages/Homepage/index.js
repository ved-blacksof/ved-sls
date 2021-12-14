import React, { useEffect } from 'react'
import { HomepageTemplate } from '../../templates'
import { Navbar, } from '..'
import { ScrollTop } from '../../molecules'

export function Homepage() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <ScrollTop />
            <HomepageTemplate />
        </div>
    )
}
    