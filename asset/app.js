var i18nZHData = {
      'tran-site-categories':'Categories',
      'tran-site-tags':'Tags',
      'tran-posted-in':'post to',
      'tran-tags':'Tags:',
      'tran-archives':'Achive',
      'tran-categories':'Categories：',
      'tran-comments':'Comment',
      'tran-readmore':'Read more...',
      'tran-prev-page':'&laquo; Prev',
      'tran-next-page':'Next &raquo;',
      'tran-disqus-comments':'Comment'
    };

document.addEventListener('DOMContentLoaded',function(){
  const el = document.getElementById('navbarSNSRssSwitchBtn');
  el.addEventListener('click',function(){
    const $target = document.getElementById('navbarSNSRssButtons');
    el.classList.toggle('is-active');
    $target.classList.toggle('is-active');
  });

  var userLang = navigator.language || navigator.userLanguage; 
  if(userLang.indexOf('zh') != -1){
    var result = Object.keys(i18nZHData);
    for (var i = 0; i < result.length; i++) {
        var key = result[i];
        var eles = document.querySelectorAll('.'+key);
        eles.forEach(function(ele){
          ele.innerHTML = i18nZHData[key];
        });
    }
  }

});
