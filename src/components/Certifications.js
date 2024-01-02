import Simpli from "../assets/img/simplilearn-com-logos-idOTNvfSEe.png";
import ibm from "../assets/img/ibm.svg";
import Coursera  from "../assets/img/Coursera-New.png";
import cisco from "../assets/img/cisco-icon.png";
import fortinet from "../assets/img/Fortinet-Logo.wine.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"


export const Certifications = () => {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="certification" id="certification">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="certification-bx wow zoomIn">
                        <h2>Certifications</h2>
                        <p>I've earned a diverse array of certifications, honing these skills through self-directed learning and personal dedication.<br></br> Also I try to learn new things related to my passion.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme certification-slider">
                            <div className="item">
                                <img src={Simpli} alt="Image" />
                                <h5>Simplilearn</h5>
                                <p className="title"><a  className="title" href="https://drive.google.com/file/d/1guptPU1VIuZkfTpPvrQyq1ESL9V2tvyU/view?usp=sharing">Data Science with Python</a></p>
                            </div>
                            <div className="item">
                                <img src={ibm} alt="Image" />
                                <h5> IBM Data Science</h5>
                                <p><a className="title" href="https://drive.google.com/file/d/13S24G0yrzPzthhkLKLAS5_DgJ788i5eR/view?usp=sharing">Data Science Methodologies</a>|<a className="title" href = "https://drive.google.com/file/d/1t0Nw4p2J14n8Rx-g4snD0-8bBRpF9VZz/view?usp=drive_link"> Foundations - Level 1</a> |<a className="title" href="https://drive.google.com/file/d/1jPzN7G_bxdc9OeR_DwsB3x1oOTjii2Ni/view?usp=drive_link">Foundations - Level 2 (V2)</a></p>
                            </div>
                            <div className="item">
                                <img src={cisco} alt="Image" />
                                <h5>CISCO</h5>
                                <p><a className="title" href="https://drive.google.com/file/d/17DrqvkxGxSl2-sxY1hbCa03U_j51jP70/view?usp=drive_link">Introduction to Cybersecurity</a>| <a className="title" href="https://drive.google.com/file/d/1ZzM8SSLC3l6Vm2Cli7DvglFbzMplwqmo/view?usp=drive_link">Introduction to Network</a></p>
                            </div>
                            <div className="item">
                                <img src={fortinet} alt="Image" />
                                <h5>FORTINET</h5>
                                <p><a  className="title" href="https://drive.google.com/file/d/1D8TFgutkdrOIOfJXeVEVCUhznCiihBeu/view?usp=drive_link">NSE Level 1</a>| <a className="title" href="https://drive.google.com/file/d/1zk2zLt13biR4RPahCwOH1RKKE-kaAXyE/view?usp=drive_link">Level 2</a>| <a className="title" href="https://drive.google.com/file/d/1UkjpDqNOmGm4qOW0HcBN26uJH5sTNIPw/view?usp=drive_link">Level 3</a> </p>
                            </div>
                            <div className="item">
                                <img src={Coursera} alt="Image" />
                                <h5>Coursera</h5>
                                <p><a className="title" href="https://drive.google.com/drive/folders/1vyhJcTjnzNgskICJhuEiUsqTOWdcHFtt?usp=sharing">Coursera All the Certifications</a></p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
