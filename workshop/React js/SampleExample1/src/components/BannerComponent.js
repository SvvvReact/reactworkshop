import '../style.css';
import banner from '../banner.png';

function Banner(){
    return(<div id='banner'>
        <img src={banner} id='bannerImg' alt=''/>
    </div>);
}
export default Banner;