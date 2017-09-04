require('./style.scss')
$(()=>{
     //slider i galeria
     let addImg = $('.row3Col-8ImgAdd');
     let imgs = $('.row3Col-8Img');
     //petla nadaje data id do każdego obrazka
     for(let i = 0; i<imgs.length; i++){
          imgs.eq(i).attr('data-id',i)
     }
     //kliknięcie pokazuje div z opacity plusa i inputa do wpisywanie
     addImg.on('click',function(e){
          e.preventDefault();
          let noVisible = $('.noVisible');
          noVisible.addClass('visible');
          noVisible.css('display', 'block');
     })
     //pobieranie wartości z inputa i dodawanie obrazka
     let counter = 0;
     let noVisibleButton = $('.noVisibleButton')
     noVisibleButton.on('click',function(e){
          e.preventDefault();
          let link1 = $('.noVisibleInput').val()

          if(counter>7){
               counter=0
          }
          imgs.eq(counter).attr('src',link1);
          counter = counter +1;
     })
     //ukrywanie dodawania obrazka
     let noVisibleDiv = $('.noVisibleDiv');
     noVisibleDiv.on('click', function(e){
          e.preventDefault();
          let visible = $('.visible');
          visible.css('display', 'none')
          visible.removeClass('visible');

     })
     //slider na samym początku jest napisane pokazywanie galerii ze sliderem
     //drugi event to slider
     let galImg = $('.row3Col-8Img');
     galImg.on('click', function(e){
          e.preventDefault();
          let galleryDiv = $('.displayNone');
          galleryDiv.removeClass('displayNone');
          let href=$(this).attr('src');
          let galleryWindow = $('.noVisibleGallery').find('img');
          galleryWindow.attr('src',href);
          let idImg = $(this).attr('data-id');
          let nextBtn = $('.nextGalBut');
          let prevBtn = $('.prevGalBut');
          nextBtn.on('click', function(e){
               e.preventDefault();
               if(idImg>5){
                    idImg=-1;
               }
               idImg = parseInt(idImg) + 1;
               let nextImg = $(`[data-id=${idImg}]`);
               let hrefNextImg = nextImg.attr('src');
               galleryWindow.attr('src',hrefNextImg);
          })
          prevBtn.on('click', function(e){
               e.preventDefault();
               if(idImg<1){
                    idImg=7;
               }
               idImg = parseInt(idImg) - 1;
               let nextImg = $(`[data-id=${idImg}]`);
               let hrefNextImg = nextImg.attr('src');
               galleryWindow.attr('src',hrefNextImg);
          })
     })
     //ukrywanie galerii
     let galDiv = $('.noVisibleDivGallery');
     galDiv.on('click', function(e){
          e.preventDefault();
          let toHide =$('.toHide');
          toHide.addClass('displayNone');
     })
     //formularz
     let url = "./db/coments.json"
     let ul = $('.comments')
     function loadComments(){
          $.ajax({
               url: url,
               type: "GET",
               dataType: "json"
          }).done(function(resp){
               ul.empty();
               //od tego miejsca jest robiona losowość komentarzy

               let array =[];
               for (var i = 0; i<(resp.comments.length/3); i++){
                    let nrForArray = 0;
                    nrForArray = Math.floor((Math.random() * resp.comments.length) + 1);
                    array.push(nrForArray);
               }

               for (var i=0; i<array.length; i++){
                    var p = $("<p>");
                    var h3 = $("<h3>");
                    var li = $("<li>");
                    var title = resp.comments[array[i]-1].full_name;
                    var desc = resp.comments[array[i]-1].message;
                    li.attr("data-id-comment", resp.comments[i].id);
                    h3.text(title);
                    p.text(desc);
                    li.append(h3);
                    li.append(p);
                    ul.append(li);
               }
          })
     }
     loadComments();
     let fullName = $('.inputFullName');
     let email = $('.inputEmail');
     let message = $('.textareaMessage');
     let messageButton = $('.buttonSend');
     messageButton.on('click', function(e){
          e.preventDefault();
          let newComment = {
               full_name: fullName.val(),
               email: email.val(),
               message:  message.val()
          }
          var p = $("<p>");
          var h3 = $("<h3>");
          var li = $("<li>");
          console.log(newComment.full_name)
          console.log(newComment.email)
          console.log(newComment.message)
          h3.text(newComment.full_name);
          p.text(newComment.message);
          li.append(h3);
          li.append(p);
          ul.append(li);
     })
     messageButton.on('click', function(e){
          e.preventDefault();
          fullName = '';
     })

})
