import { useState } from "react";
import "./header.css";
import { useEffect } from "react";
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
    else{
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className=" flex">
      <button
        className="icon-menu  menu flex"
        onClick={() => setShowModal(true)}
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
      <button
        className="icon-moon-o  flex"
        onClick={() => {
          //send value to localStorage
          localStorage.setItem(
            "currentTheme",
            theme === "dark" ? "light" : "dark"
          );

          //get value from localStorage
          setTheme(localStorage.getItem("currentTheme"));
        }}
      />

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => setShowModal(false)}
              />
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
