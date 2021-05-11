import NavBarButton, { NavBarButtonDestination } from './navbarbutton'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { motion } from 'framer-motion'
// import Measure from 'react-measure'

import Image from 'next/image'

import 'tailwindcss/tailwind.css'

const pages: Array<NavBarButtonDestination> = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Projects",
        path: "/projects"
    },
    {
        title: "Contact",
        path: "/contact"
    },
]

export default function NavBar() {
    const router = useRouter();

    const [menuOpen, setMenuOpen] = useState(false)
    const [{ width, height }, setDimensions] = useState({ width: 0, height: 100 })

    const menuVariants = {
        open: { y: (width > 640 ? -height : 0) },
        closed: { y: -height }
    }

    return <motion.div className="fixed w-full bg-white"
        animate={menuOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ ease: "anticipate", duration: (width > 640 ? 0 : 0.3) }}
        initial="closed" >

        {/* <Measure
            bounds
            onResize={contentRect => { setDimensions(contentRect.bounds) }}> */}

        {/* {({ measureRef }) => ( !!!ref={measureRef}!!! */}
        <div className="grid grid-cols-1 gap-y-6 p-12 bg-gray-100">
            {pages.map(page => (
                <NavBarButton
                    destination={page}
                    current={router.pathname == page.path}
                />
            ))}
        </div>
        {/* )} */}
        {/* </Measure> */}

        <div className="flex justify-between py-4 px-8 align-bottom md:px-32 md:py-16">
            <div>
                <Image
                    width={48}
                    height={48}
                    src="/safari-pinned-tab.svg"
                />
            </div>

            <div className="flex gap-x-6 invisible sm:visible">
                {pages.map(page => (
                    <NavBarButton
                        destination={page}
                        current={router.pathname == page.path}
                    />
                ))}
            </div>

            <button className="visible sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    </motion.div >
}

