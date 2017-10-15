"use strict";
// main global variables that all the functions use 
var title = document.title;
var eateryList = [];
var filteredList = [];
var donts = {};


  var gilbarco_eateryList = [
      "4 ый этаж",
      "6 ый этаж",
      "Авиапарк",
      "Корчма",
      "Метрополис",
      "Старт",
      "Урюк"
      ];

  var gilbarco_donts = {
    denis : ["Старт", "4 ый этаж", "6 ый этаж"],
    andrey : ["4 ый этаж", "6 ый этаж"],
    dima : ["6 ый этаж"],
    artem : ["Метрополис", "6 ый этаж"],
    artems : ["Метрополис", "6 ый этаж"],
    ilya : [],
    evgeniy : ["Метрополис", "6 ый этаж"],
    vlad : ["6 ый этаж"],
    valeriya : ["6 ый этаж", "Старт"]
  };
  
  var espoc_eateryList = [
      "Applebee\'s",
      "Bagel Talk",
      "Burger Bros",
      "Chipotle",
      "El Meson",
      "Fireside Grill",
      "Ginger",
      "Ibby\'s",
      "La Rosa",
      "Lemon",
      "Mo\'s",
      "Noodles & Company",
      "Sichuan Cottage",
      "Sofra",
      "Solo Trattoria",
      "Subway",
      "Tokio" ];

  var espoc_donts = {
    ani : ["Tokio", "Sofra", "Applebee\'s", "Fireside Grill", "Sichuan Cottage"],
    barb : ["Lemon", "Mo\'s", "Chipotle", "Ginger", "Sofra","Ibby\'s","Subway"],
    bob : ["Lemon", "La Rosa"],
    erez : [],
    prahini : ["La Rosa","Lemon", "Ginger","Sofra"],
    jess : ["Lemon", "Ginger", "Sofra","Ibby\'s","Sichuan Cottage"],
    kym : [],
    melissa : ["Lemon", "Ginger", "Sofra"],
    rupesh : ["Tokio"]
  };
  
  
  // set the global variables
  function setGlobalVariables() {
    // generate variable names from the title of the document 
    title = title.toLowerCase();
    var var1 = title + "_eateryList";
    var var2 = title + "_donts";
    // set the global varibles 
    eateryList = window[var1];
    donts = window[var2];
    filteredList = eateryList;
  }
  
  setGlobalVariables();

  // show the list of eateries based on selected hungries
  function validate() {   
    document.getElementById("showOptions").innerHTML = '';
    var elements = document.getElementsByTagName('input');
    filteredList = eateryList;
    for (var i = 0; i < elements.length; i++) {
      var input = elements[i];
      var hungry =  elements[i].value; 

      if (input.checked && donts.hasOwnProperty(hungry) && donts[hungry].length > 0) {
        filteredList = filteredList.filter(function(val){
          return (donts[hungry].indexOf(val) === -1);
        });
      }
    }
    showOptions(filteredList);
    
  }
    
  // show a random eatery based on selected hungries  
  function randomOption() {
    document.getElementById("showOptions").innerHTML = '';
    var rand = Math.floor(Math.random() * filteredList.length);
    showOptions([filteredList[rand]]);
  }
  
  // show list of available eateries  
  function allOptions() {
    // clear the current list
    document.getElementById("showOptions").innerHTML = '';
    // clear all the selectors
    var elements = document.getElementsByTagName('input');
    for (var i = 0; i < elements.length; i++) {
      var input = elements[i];
      input.checked = false;
    }
   
    showOptions(eateryList);
  }

  // display function
  function showOptions(arr){
    var div = document.createElement('div');
    if (Array.isArray(arr) && arr.length > 0) {
      var ul = document.createElement('ul');
      for(var i = 0; i< arr.length; i++) {
        var li = document.createElement('li');
        var txt = document.createTextNode(arr[i]);
        li.appendChild(txt);
        ul.appendChild(li);
      }
      div.appendChild(ul);
    } else {
      txt = document.createTextNode("hmmm... it worked on my computer");
      div.appendChild(txt);
    } 
    document.getElementById("showOptions").appendChild(div);
  }
  // .- -. ..
