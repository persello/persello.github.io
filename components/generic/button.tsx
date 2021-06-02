import Link from 'next/link'

export default function Button({ children, className = "" }) {
    return <button className={`${className} transition-all py-4 px-8 font-semibold text-white rounded-md shadow-lg
                                           hover:shadow-md hover:opacity-80
                                           flex-shrink-0 mr-0 mb-4
                                           flex-grow md:flex-grow-0 md:mr-4
                                           w-full md:w-auto`}>
            <div className="flex flex-row space-x-2">
                {children}
            </div>
        </button>
}