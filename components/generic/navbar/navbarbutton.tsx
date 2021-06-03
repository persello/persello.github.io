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
    return <div className="grid w-min items-center">
        <Link href={destination.path}>
            <a className={current ? "text-yellow-500 dark:text-yellow-500" : "dark:text-white" + " w-min"}>
                <NavBarText>{destination.title.toUpperCase()}</NavBarText>
            </a>
        </Link>

        <div className={"flex bg-yellow-500 h-1 " + (current ? "" : "invisible")}/>
    </div>
}