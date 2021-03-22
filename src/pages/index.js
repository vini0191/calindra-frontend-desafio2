import Layout from '../components/layout';
import Navbar from '../components/navbar';
import GreyBody from '../components/greybody';
import BlueBody from '../components/bluebody';
import Footer from '../components/footer';

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <GreyBody />
      <BlueBody />
      <Footer />
    </Layout>
  );
}
