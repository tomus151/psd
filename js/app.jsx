require('./style.scss')
$(()=>{
     let addImg = $('.row3Col-8ImgAdd');
     addImg.on('click',function(e){
          e.preventDefault();
          let noVisible = $('.noVisible');
          noVisible.addClass('visible');
          noVisible.css('display', 'block');
     })
     let counter = 0;
     let noVisibleButton = $('.noVisibleButton')
     noVisibleButton.on('click',function(e){
          let link1 = $('.noVisibleInput').val()
          console.log(link1);
          let imgs = $('.row3Col-8Img')

          console.log(counter, link1);
          if(counter>7){
               counter=0
          }
          imgs.eq(counter).attr('src',link1);
          counter = counter +1;
     })
     let noVisibleDiv = $('.noVisibleDiv');
     noVisibleDiv.on('click', function(e){
          e.preventDefault();
          let visible = $('.visible');
          visible.css('display', 'none')
          visible.removeClass('visible');

     })
})
