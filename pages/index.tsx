import NavBar from '../components/generic/navbar/navbar'
import Layout from '../components/generic/layout'
import NorminalHero from '../components/hero/norminal'

export default function IndexPage() {
  return (
    <Layout>
      <div className="p-4">
        <NorminalHero />
      </div>
    </Layout>
  )
}
