import useSWR from 'swr'

export default function GitHubCard({ repo }) {
    const fetcher = (args) => fetch(args).then(res => res.json())
    const { data, error } = useSWR(`https://api.github.com/repos/${repo}`, fetcher)

    if (error) return <div>Error</div>
    if (!data) return <div>Loading...</div>

    return <div className="text-8xl">
        <h1>{data.stargazers_count}</h1>
        <h1>{data.name}</h1>
        <h1>{data.language}</h1>
    </div>
}