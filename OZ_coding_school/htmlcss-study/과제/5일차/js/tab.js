let tabWrap = document.querySelectorAll('.tab-wrap');

tabWrap.forEach(function(e){
  let tabBtn = e.querySelectorAll('.tab-btn');
  let tabCon = e.querySelectorAll('.tab-con');
  tabBtn.forEach(function(el, i){

    el.addEventListener('click', function(){
      tabBtn.forEach(function(ele){
        ele.classList.remove('active')
      });

      tabCon.forEach(function(ele){
        ele.classList.remove('active')
      });

      el.classList.add('active');
      tabCon[i].classList.add('active');
    });
  });
});