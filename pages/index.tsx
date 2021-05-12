import NavBar from '../components/generic/navbar/navbar'
import Layout from '../components/generic/layout'
import NorminalHero from '../components/generic/hero/norminal'
import UnderConstruction from '../components/generic/underconstruction'

export default function IndexPage() {
  return (
    <Layout>
      <div className="p-4">
        <NorminalHero />
        <UnderConstruction />
      </div>
    </Layout>
  )
}
