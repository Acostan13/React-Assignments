import React from 'react'
import Link from 'next/link'

const errorPage = () => {
    return (
        <div>
            <h1>Oop, something went wrong.</h1>
            <p>Try <Link href='/auth'><a>going back</a></Link>.</p>
        </div>
    )
}

export default errorPage