$(document).ready(function(){
    $('.parallax-div').css('height', 2*$(window).height()/3);
    $(window).on('resize', function(){
        $('.parallax-div').css('height', 2*$(window).height()/3);
    });
    $('.sidenav').sidenav();
    $('.modal').modal();
    $(".dropdown-trigger").dropdown();
    var i = 1;
    setInterval(function(){
        i++;
        if(i>3) i=1;
        $('.parallax-div').css('background-image', 'url(assets/images/image-'+i+'.jpeg)');
        // $('.parallax-div h1').text();
    }, 15000);
    var data = ['wine1:Bollinger', 'wine2:Marc Bredif', 'wine3:Kiwa', 'wine4:Chateau Clos I Eglise', 'wine5:Chronic Cellars', 'wine6:Graham Beck'];
    for(var i=0;i<4;i++){
        for(var j=0;j<data.length;j++){
            $('.wine-list').append('<div class="col s3"><div class="single-drink modal-trigger" data-target="modal1"><div class="thumb hvr-buzz-out"><img src="assets/images/'+data[j].split(':')[0]+'.png" class="responsive-img" /></div><div class="name">'+data[j].split(':')[1]+'</div></div></div>');
        }
    }
    $('#search').on('keyup', function(){
        var value = $(this).val();
        var filteredData = data.filter(function(singleData){
            return singleData.split(':')[1].toLowerCase().substring(0,value.length) == value.toLowerCase();
        });
        $('.wine-list').text('');
        for(var i=0;i<4;i++){
            for(var j=0;j<filteredData.length;j++){
                $('.wine-list').append('<div class="col s3"><div class="single-drink modal-trigger" data-target="modal1"><div class="thumb hvr-buzz-out"><img src="assets/images/'+filteredData[j].split(':')[0]+'.png" class="responsive-img" /></div><div class="name">'+filteredData[j].split(':')[1]+'</div></div></div>');
            }
        }
    });
});