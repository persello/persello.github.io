import Link from 'next/link'

export default function Button({ children, className = "" }) {
    return <button className={`${className} transition-all py-4 px-8 font-semibold text-white rounded-md shadow-lg
                                           hover:shadow-md hover:opacity-80
                                           mb-4 mr-4
                                           `}>
            <div className="flex flex-row space-x-2">
                {children}
            </div>
        </button>
}