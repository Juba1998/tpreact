import React from "react";

export default function NavbarButton(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <h3 className="nav--logo_text">Cours React</h3>
      <div class="toggleWrapper">
  <input type="checkbox" class="dn" id="dn" onClick={props.toggleDarkMode}/>
  <label for="dn" class="toggle">
    <span class="toggle__handler">
      <span class="crater crater--1"></span>
      <span class="crater crater--2"></span>
      <span class="crater crater--3"></span>
    </span>
    <span class="star star--1"></span>
    <span class="star star--2"></span>
    <span class="star star--3"></span>
    <span class="star star--4"></span>
    <span class="star star--5"></span>
    <span class="star star--6"></span>
  </label>
</div>
    </nav>
  );
}
