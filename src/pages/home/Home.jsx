import { Helmet } from "react-helmet-async";
import Banner from "../../components/home/banner/Banner";
import Category from "../../components/home/category/Category";
import PopularMenu from "../../components/home/popularMenu/PopularMenu";
import Testimonials from "../../components/home/testimonals/Testimonials";


const Home = () => {
    return (
        <div>
           <Helmet>
       <title>Bistro | Home</title>
       </Helmet>
          <Banner></Banner>
          <Category></Category>
          <PopularMenu></PopularMenu>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;