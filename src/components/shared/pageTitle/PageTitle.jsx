import { Parallax} from 'react-parallax';

const PageTitle = ({title,subtitle,img}) => {
   
    return (
     <div>
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
        {/* style={{backgroundImage: `url("${bgImg}")`}} */}
          
                <div className="hero h-[500px]"  >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{subtitle}</p>

                    </div>
                </div>
            </div>
    </Parallax>
        
     </div>
    );
};

export default PageTitle;