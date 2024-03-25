import { useState } from "react";
import "./header.css";
const Header = () => {
    const [showModal ,setShowModal] = useState(false) ;
  return (
    <header className=" flex">
      <button className="icon-menu  menu flex"
      onClick={()=> setShowModal(true)}
      />
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">articles</a>
          </li>
          <li>
            <a href="">project</a>
          </li>
          <li>
            <a href="">speaking</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        </ul>
      </nav>
      <button className="icon-moon-o  flex" />

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li >
                <button  className="icon-close" onClick={()=> setShowModal(false)}/>
            </li>
            <li>
              <a href="">about</a>
            </li>
            <li>
              <a href="">articles</a>
            </li>
            <li>
              <a href="">project</a>
            </li>
            <li>
              <a href="">speaking</a>
            </li>
            <li>
              <a href="">contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
