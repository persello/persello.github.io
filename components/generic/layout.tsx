import NavBar from "./navbar/navbar";
import Measure from 'react-measure'
import { useState, useEffect } from 'react'

export default function Layout({ children }) {
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

    return <div>
        <NavBar isHeaderMode={underScrollOffset} />

        <div className="px-8 md:px-20">

            {/* Spacer */}
            <div className="py-24" />

            {children}
        </div>
    </div>
}