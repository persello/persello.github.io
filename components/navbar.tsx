import NavBarButton, { NavBarButtonDestination } from './navbarbutton'
import NavBarText from './navbartext'
import { useRouter } from 'next/router';
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

    return <div className="fixed w-full py-4 bg-white px-8 lg:px-36">
        <div className="flex justify-between">
            <div>
                <NavBarText>Riccardo Persello</NavBarText>
            </div>

            <div className="flex gap-x-6 visible invisible md:visible">
                {pages.map(page => (
                    <NavBarButton
                        destination={page}
                        current={router.pathname == page.path}
                    />
                ))}
            </div>

            <div>
                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </div>
    </div>
}

