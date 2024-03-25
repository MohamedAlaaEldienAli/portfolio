
import './hreo.css';
const Hero = () => {
    return (
        <section className='hero '>
            <div className="left-sec border">
                <div className="parent-avatar">
                    <img src="/public/avatar-modified.png" alt=""  className='avatar'/>
                    <span className='icon-verified'></span>
                </div>
            </div>
            <div className="right-sec animation border">right</div>
        </section>
    );
}

export default Hero;
