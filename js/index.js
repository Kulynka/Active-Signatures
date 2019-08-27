$(document).ready(function(){
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

    $(function() {
        $('.menu-icon').on('click', function() {
        $(this).closest('.menu').toggleClass('menu_state_open');
        });
    })
})
        
