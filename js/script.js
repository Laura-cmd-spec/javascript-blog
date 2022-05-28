'use strict';

  const titleClickHandler = function(event){
  const clickedElement = this;
  console.log('Link was clicked!');
  event.preventDefault();

    /* [Done] remove class 'active' from all article links  */ 

  const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
     activeLink.classList.remove('active');
   } 
   /* [Done] add class 'active' to the clicked link */

    clickedElement.classList.add('active');

   /*[Done] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('article.active');
    for(let activeArticle of activeArticles){
     activeArticle.classList.remove('active');
   } 

   /* [Done] get 'href' attribute from the clicked link */
  const getHref = clickedElement.getAttribute('href');

  const articleSelector = getAttribute('article');
  console.log('Link was clicked!');

   /* [Done] find the correct article using the selector (value of 'href' attribute) */
  const correctArticle = document.querySelector(getHref);

  /* [Done] add class 'active' to the correct article */
  correctArticle.classList.add('active');
  }

  