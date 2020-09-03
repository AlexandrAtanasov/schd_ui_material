import React, { Children } from 'react'
import Link from 'next/link'

// import components
import { NavbarComponent } from '../../Components/First/NavbarComponent'
import { HeadComponent } from '../../Components/First/HeadComponent'

export function MainLayout( {children, title, description, pageName} ) {

    return (
        <React.Fragment>
            <HeadComponent 
                title={title}
                description={description}
            />
            <NavbarComponent 
                pageName={pageName}
            />
            <main>
                {children}
            </main>

        </React.Fragment>
    )
} 