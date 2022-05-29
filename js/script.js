{
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


   /* [Done] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(getHref);
  

  /* [Done] add class 'active' to the correct article */
  targetArticle.classList.add('active');
  };

const  optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';
  
  function generateTitleLinks(){
/* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  
  titleList.innerHTML = '';
  let html = '';

  /* for each article */
  const articles = dokument.querySelectorAll(optArticleSelector);

  for (let article of articles){

    /* get the article id */
  const articleId = article.getAttribute('id');

    /* find the title element */
  const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* get the title from the title element */

    /* create HTML of the link */
  const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    /* insert link into titleList */
  html = html + linkHTML;
  }
  titleList.innerHTML = html;
  }

  generateTitleLinks();

  const links = document.querySelectorAll('.titles a');
  for (let link of links){
    link.addEventListener('click', titleClickHandler);
  }
  }
  
  


