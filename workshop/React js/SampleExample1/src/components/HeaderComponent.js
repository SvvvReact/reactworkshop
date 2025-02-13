import '../style.css';
import logo from '../logo.avif';
function Header(){
    return(<div id='header'>
        <img src={logo} id='logo' alt=''/>
        <span id='heading'>Coding Thinker</span>
    </div>);
}
export default Header;