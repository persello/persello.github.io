import Image from 'next/image'
import GitHubCard from '../githubcard'
import ReactStoreBadges from 'react-store-badges'


export default function NorminalHero() {
    return <div className="flex flex-col sm:flex-row">
        <div className="sm:w-3/5 sm:pr-8">
            <div className="flex flex-col items-">
                <h1 className="font-black text-6xl xl:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-yellow-200">Norminal</h1>
                <h1 className="absolute filter blur-3xl font-black text-6xl xl:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-yellow-200">Norminal</h1>
                <p className="font-mono leading-loose py-6">
                    Check out Norminal, an app for <u>everything</u> about SpaceX. <br />
                    Norminal is now available on the iOS App Store. <br /> It works on both iPhones and iPads.
                </p>

                <div className="lg:py-6">
                    <ReactStoreBadges
                        platform={'ios'}
                        url={'https://apps.apple.com/us/app/norminal/id1540171547?itsct=apps_box_badge&amp;itscg=30200'}
                        locale={'en-us'}
                    />
                </div>

                <div className="hidden sm:block">
                    <GitHubCard repo="persello/norminal" />
                </div>
            </div>
        </div>

        <div className="self-center pt-8 sm:w-2/5">
            <Image src="/images/norminal1.png" width={400} height={800} layout="intrinsic" objectFit="contain" />
        </div>

        <div className="visible sm:hidden">
            <GitHubCard repo="persello/norminal" />
        </div>
    </div>
}