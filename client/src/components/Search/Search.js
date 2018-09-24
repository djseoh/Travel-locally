import React from "react";
import "./Search.css";


const Search = props => (
    
    <form className="content">
        <input type="text" name="input" className="put" />
        <button type="reset" className="search"></button>
    </form>
)
function expand() {
    $(".search").toggleClass("close2");
    $(".put").toggleClass("square");
    if ($('.search').hasClass('close2')) {
      $('input').focus();
    } else {
      $('input').blur();
    }
  }
  $('.search').on('click', expand);

export default Search;