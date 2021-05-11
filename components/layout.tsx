import NavBar from "./navbar";

export default function Layout({ children }) {
    return <div>
        <NavBar />

        <div className="px-8 md:px-20">

            {/* Spacer */}
            <div className="py-24"/>

            {children}
        </div>
    </div>
}