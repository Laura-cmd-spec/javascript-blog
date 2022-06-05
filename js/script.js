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
      console.log('Add class active to:' + articleSelector);
  }

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';
    optArticleTagsSelector = '.post-tags .list';
    optArticleAuthorSelector = '.post-author';


  function generateTitleLinks(customSelector = '') {
    console.log('Generate Title List');
    /* remove contents of titleList */

   const titleList = document.querySelector(optTitleListSelector);
    let html = '';
    titleList.innerHTML='';

    /* for each article */

    const articles = document.querySelectorAll(optArticleSelector + customSelector);

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
      link.addEventListener('click', ClickHandler);
    }
  }
  generateTitleLinks();
}

 function generateTags() {
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    /* START LOOP: for every article: */
    for (let article of articles) {
      /* find tags wrapper */
     
  const articleTag = article.querySelector(optiArticleTagsSelector);
      articleTag.innerHTML = '';
      /* make html variable with empty string */
    let html = '';
      /* get tags from data-tags attribute */
  const articleTags = article.getAttribute('data-tags');
      console.log(articleTags);
      /* split tags into array */
  const articleTagsArray = articleTags.split(' ');
      console.log(articleTagsArray);
      /* START LOOP: for each tag */
      for (let tag of articleTagsArray) {
        /* generate HTML of the link */
  const LinkHTML = '<li><a href="#tag-' + tag + '">' + tag + ' ' + '</a></li>';
        /* add generated code to html variable */
      html = html + linkHTML;
        /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
      articleTag.innerHTML = html;
      /* END LOOP: for every article: */
    }
  }
  generateTags();

  function tagClickHandler(event) {
    /* prevent default action for this event */
    event.preventDefault();
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
      console.log(tag)
    /* find all tag links with class active */
    const activeTagLinks = document.guerySelectorAll('a.active[href^="#tag-"]');
    /* START LOOP: for each active tag link */
    for (let activeTagLink of activeTagLinks) {
      /* remove class active */
      if (activeTagLink) activeTagLink.classList.remove('active');
      /* END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */
    const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
    /* START LOOP: for each found tag link */
    for (let tagLink of tagLinks) {
      /* add class active */

      /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks('[data-tags~="' + tag + '"]');
  }

  function addClickListenersToTags() {
    /* find all links to tags */
    const linksToTags = document.querySelectorAll('a[href^="#tag-"]')
    /* START LOOP: for each link */
    for (linkToTag of linksToTags) {
      /* add tagClickHandler as event listener for that link */
      linkToTag.addEventListener('click', tagClickHandler);
      /* END LOOP: for each link */
    }
  }

  addClickListenersToTags();

  function generateAuthors() {
    const articles = document.guerySelectorAll(optiArticlerSelector);
    for (let article of articles) {

      const postAuthor = article.guerySelector(optArticleAuthorSelector);
      postAuthor.innerHTML = "";

      let html = '';

      const articleAuthor = article.getAttribute('date-author');

      const linkHTML = '<a href="#author-' + articleAuthor + '">' + articleAuthor + ' ' + '</a>';

      html = linkHTML;

      postAuthor.innerHTML = html;
    }
  }
  generateAuthors();

  function authorClickHandler(event) {
    /* prevent default action for this event */
    event.preventDefault();
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    /* make a new constant "tag" and extract tag from the "href" constant */
    const author = href.replace('#author', '');
    console.log(author)
    /* find all tag links with class active */
    const activeAuthorLinks = document.guerySelectorAll('a.active[href^="#author"]');
    /* START LOOP: for each active tag link */
    for (let activeAuthorLink of activeAuthorLinks) {
      /* remove class active */
      if (activeAuthorLink) activeAuthorLink.classList.remove('active');
      /* END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */
    const authorLinks = document.querySelectorAll('a[href="' + href + '"]');
    /* START LOOP: for each found tag link */
    for (let authorLink of authorLinks) {
      /* add class active */
      authorLink.classList.add('active');
      /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks('[data-author~="' + author + '"]');
  }

  function addClickListenersToAuthor() {
    /* find all links to tags */
    const linksToAuthor = document.querySelectorAll('a[href^="#author-"]')
    /* START LOOP: for each link */
    for (linkToAuthor of linksToAuthor) {
      /* add tagClickHandler as event listener for that link */
      linkToAuthor.addEventListener('click', authorClickHandler);
      /* END LOOP: for each link */
    }
  }
  addClickListenersToAuthor();

