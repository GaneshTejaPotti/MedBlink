import CategoryList from './_components/CategoryList';
import Slider from './_components/Slider';
import ProductList from './_components/ProductList';
// import GlobalApi from './_utils/GlobalApi';
import Footer from './_components/Footer';

export default async function Home() {

  return (
    <div className="p-10 px-16">
      <Slider />
      <CategoryList />
      <ProductList />
      <Footer />
    </div>
  );
}
