import Image from 'next/image'
import useSWR from 'swr'

export default function GitHubCard({ repo }) {
    const fetcher = (args) => fetch(args).then(res => res.json())
    const { data, error } = useSWR(`https://api.github.com/repos/${repo}`, fetcher)

    if (error) return <div>Error</div>
    if (!data) return <div>Loading...</div>

    return <div className="flex flex-col bg-gray-50 px-8 py-6 rounded-2xl shadow-inner my-8 sm:max-w-sm divide-y gap-y-4">
        <div className="flex items-center">
            <Image
                src={data.owner.avatar_url}
                height={64}
                width={64}
                className="rounded-full"
            />

            <div className="flex items-baseline ml-4">
                <div className="flex flex-col">
                    <p className="text-3xl font-semibold text-gray-700">{data.name}</p>
                    <p className="text-gray-500">{data.owner.login}</p>
                </div>
                <div className="flex items-center px-4 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <p className="mx-1">{data.stargazers_count}</p>
                </div>
            </div>
        </div>

        <p className="text-gray-400 pt-2">{data.description}</p>
    </div>
}