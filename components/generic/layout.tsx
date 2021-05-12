import NavBar from "./navbar/navbar";
import Measure from 'react-measure'
import { useState, useEffect } from 'react'

export default function Layout({ children }) {
    const [overScrollOffset, setOverScrollOffset] = useState(false)

    var internalMeasure

    useEffect(() => {
        setInterval(() => {
            if (overScrollOffset && window.scrollY > 60) {
                setOverScrollOffset(false)
            } else if (!overScrollOffset && window.scrollY < 50) {
                setOverScrollOffset(true)
            }
        }, 100)
    })

    return <div>
        <NavBar isHeaderMode={overScrollOffset} />

        <div className="px-8 md:px-20">

            {/* Spacer */}
            <div className="py-24" />

            {children}
        </div>
    </div>
}