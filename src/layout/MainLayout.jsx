
import Nav from '../components/shared/nav/Nav';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/shared/footer/Footer';

const MainLayout = () => {
    const location =useLocation();
    console.log(location);
    const noHeaderFooter =location.pathname.includes('login')
    return (
        <div>
          {noHeaderFooter || <Nav></Nav>} 
            <Outlet></Outlet>
            {noHeaderFooter ||  <Footer></Footer>}  
        </div>
    );
};

export default MainLayout;