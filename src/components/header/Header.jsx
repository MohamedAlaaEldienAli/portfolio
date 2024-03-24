
import './header.css';
const Header = () => {
    return (
        <header className=' flex'>
            <button className='menu'>
                show
            </button>
            <div/>
            <nav>
                <ul className='flex'>
                    <li><a href="">about</a></li>
                    <li><a href="">articles</a></li>
                    <li><a href="">project</a></li>
                    <li><a href="">speaking</a></li>
                    <li><a href="">contact</a></li>
                </ul>
            </nav>
            <button>
                ligth
            </button>

            <div className="border fixed">

            </div>
            
        </header>
    );
}

export default Header;
