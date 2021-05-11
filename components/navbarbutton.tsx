import Link from 'next/link'
import NavBarText from './navbartext'

export interface NavBarButtonDestination {
    path: string;
    title: string;
}

export interface NavBarButtonProps {
    destination: NavBarButtonDestination;
    current: boolean;
}

export default function NavBarButton({ destination, current }: NavBarButtonProps) {
    return <Link href={destination.path}>
        <a className={current ? "text-yellow-400" : ""}>
            <NavBarText>{destination.title.toUpperCase()}</NavBarText>
        </a>
    </Link>
}