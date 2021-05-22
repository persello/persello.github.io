import Image from 'next/image'
import useSWR from 'swr'

export default function GitHubCard({ repo }) {
    const fetcher = (args) => fetch(args).then(res => res.json())
    const { data, error } = useSWR(`https://api.github.com/repos/${repo}`, fetcher)

    if (error) return <div>Error</div>
    if (!data) return <div>Loading...</div>

    return <div className="flex flex-col bg-gray-50 rounded-2xl shadow-inner my-8 sm:max-w-sm">
        <div className="px-8 py-6 divide-y">
            <div className="flex items-center pb-4">
                <a href={data.owner.html_url}>
                    <Image
                        src={data.owner.avatar_url}
                        height={64}
                        width={64}
                        className="rounded-full"
                    />
                </a>
                <div className="flex items-baseline ml-4">
                    <div className="flex flex-col">
                        <p className="text-3xl font-semibold text-gray-700">{data.name}</p>
                        <div className="flex flex-row">
                            <p className="text-gray-500">{data.owner.login}</p>
                            <div className="flex items-center px-4 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                <p className="mx-1">{data.stargazers_count}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-gray-400 pt-4">{data.description}</p>
        </div>

        <a href={data.html_url} className="flex items-center justify-center p-4 self-stretch bg-gray-200 rounded-b-2xl hover:bg-gray-300">
            <svg className="h-6 w-6" id="github-svg" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
            <p className="mx-2">View in GitHub</p>
        </a>
    </div>
}