import { Hero,  PopularProducts, Services, SpecialOffer, Subscribe, CustomerReviews, SuperQuality, Footer } from "./sections";

import Navbar from "./components/Navbar";
const App = () => (
  <main className="relative">
    <Navbar />


    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>

    <section className="padding">
      <PopularProducts />
    </section>

    
  
      <SuperQuality />
  


    
      <Services />
   


    <section className="padding ">
    <SpecialOffer />
    </section>


    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>


    <section className="padding-x sm:py-32 py-16 w-full">
    <Subscribe />
    </section>


    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>


  </main>
)


export default App;