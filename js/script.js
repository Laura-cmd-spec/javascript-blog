{
  'use strict';

  const titleClickHandler = function (event) {
    const clickedElement = this;
    console.log('Link was clicked!');
    event.preventDefault();

    /* [Done] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }
    /* [Done] add class 'active' to the clicked link */

    clickedElement.classList.add('active');
    console.log('clickedElement:', clickedElement);

    /*[Done] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('article.active');

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    /* [Done] get 'href' attribute from the clicked link */

    const getHref = clickedElement.getAttribute('href');
    console.log(getHref);

    /* [Done] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(getHref);


    /* [Done] add class 'active' to the correct article */
    targetArticle.classList.add('active');
  }

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';
  optArticleTagsSelector = '.post-tags .list';

  function generateTitleLinks() {
    /* remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    let html = '';
    titleList.innerHTML = '';

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);

    for (let article of articles) {

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

    const links = document.querySelectorAll('.titles a');
    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  }
  generateTitleLinks();

}

function generateTags() {
  /* find all articles */
  const articles = document.querySelectorAll('optArticleSelector');
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find tags wrapper */
    const articleTag = article.querySelector('optiArticleTagsSelector');
    articleTag.innerHTML = '';
    /* make html variable with empty string */
    let HTML = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAtribut('data-tags');
    console.log(articleTag);
    /* split tags into array */
    const articleTagArray = articleTags.split('')
    console.log(articleTagArray);
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {

      /* generate HTML of the link */
      const LinkHTML = '<li><a href="#tag-' + tag + '">' + tag + ' ' + '</a></li>';
      /* add generated code to html variable */
      html = html + linkHtml
      /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    articleTag.innerHTML = html
    /* END LOOP: for every article: */
  }
}

generateTags();


