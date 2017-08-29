require('./style.scss')
$(()=>{
     let addImg = $('.row3Col-8ImgAdd');
     addImg.on('click',function(e){
          e.preventDefault();
          let visible = $('.noVisible');
          visible.css('display', 'block')
     })
     let counter = -1;
     let plus = $('.noVisibleButton')
     plus.on('click',function(e){
          let link1 = $('.noVisibleInput').val()
          console.log(link1);
          let imgs = $('.row3Col-8Img')
          counter = counter +1;
          console.log(counter, link1);
          
          if(counter>7){
               counter=0
          }
          imgs.eq(counter).attr('src',link1);
     })
})
