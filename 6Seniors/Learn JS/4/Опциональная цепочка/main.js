"use strict"

// ?.

let user = {}

// alert(user.addres.street);
alert(user.addres?.street);


let userAdmin = {
    admin() {
      alert("Я админ");
    }
  };
  
  let userGuest = {};
  
  userAdmin.admin?.(); // Я админ
  
  userGuest.admin?.(); // ничего не произойдет (такого метода нет)
