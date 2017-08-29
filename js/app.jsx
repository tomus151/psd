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
          e.preventDefault();
          let link1 = $('.noVisibleInput').val()
          let imgs = $('.row3Col-8Img');
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
     let galImg = $('.row3Col-8Img');
     galImg.on('click', function(e){
          e.preventDefault();
          let galleryDiv = $('.displayNone');
          galleryDiv.removeClass('displayNone');
          let href=$(this).attr('src');
          let galleryWindow = $('.noVisibleGallery').find('img');
          galleryWindow.attr('src',href);
     })
     let galDiv = $('.noVisibleDivGallery');
     galDiv.on('click', function(e){
          e.preventDefault();
          let toHide =$('.toHide');
          toHide.addClass('displayNone');
     })
})
