import NavBar from "./navbar";

export default function Layout({ children }) {
    return <div>
        <NavBar />

        <div className="px-8 lg:px-36">

            {/* Spacer */}
            <div className="py-8"/>

            {children}
        </div>
    </div>
}