import NavBar from "./navbar/navbar";
import Measure from 'react-measure'
import { useState, useEffect } from 'react'

export default function Layout({ children, title }) {
    const [underScrollOffset, setUnderScrollOffset] = useState(true)

    var internalMeasure

    useEffect(() => {
        setInterval(() => {
            if (underScrollOffset && window.scrollY > 60) {
                setUnderScrollOffset(false)
            } else if (!underScrollOffset && window.scrollY < 50) {
                setUnderScrollOffset(true)
            }
        }, 100)
    })

    return <html>
        <head>
            <title>{title}</title>
        </head>
        <body className="dark:bg-gray-900">
            <div>

                <NavBar isHeaderMode={underScrollOffset} />

                <div className="px-8 md:px-24 xl:px-36">

                    {/* Spacer */}
                    <div className="py-24" />

                    {children}
                </div>
            </div>
        </body>
    </html>
}