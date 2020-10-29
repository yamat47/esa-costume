// add custom data attribute to root README.
setTimeout( () => {
  const navigationItems = document.querySelectorAll('nav.navbar-side > ul > li:first-child span.navbar-side__title-name');

  Array
    .from(navigationItems)
    .filter( (node) => node.innerText.trim() === 'README' )
    .forEach( (node) => { node.dataset.esaCostumeRootReadme = true } );
}, 0 )
