/* Simple client-side include: fetches HTML and inserts into element with id 'nav-placeholder' */
(function(){
  function includeHTML(path, containerId){
    fetch(path).then(function(r){
      if(!r.ok) return;
      return r.text();
    }).then(function(html){
      var el = document.getElementById(containerId);
      if(el) el.innerHTML = html;
    }).catch(function(e){console.warn('include failed',e)});
  }
  // auto-run on pages
  if(typeof window !== 'undefined'){
    window.addEventListener('DOMContentLoaded', function(){
      includeHTML('/assets/nav.html','nav-placeholder');
    });
  }
})();
