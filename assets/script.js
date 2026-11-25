$(function () {
    // mobile: tap the arrow to open/close a submenu (accordion)
    $('.sub-toggle').on('click', function () {
        var $li = $(this).closest('.has-sub');
        $li.toggleClass('open').siblings('.has-sub').removeClass('open');
        $(this).attr('aria-expanded', $li.hasClass('open'));
    });

    // parent links with no page: do nothing on desktop, toggle submenu on mobile
    $('.no-link').on('click', function (e) {
        e.preventDefault();
        if (window.innerWidth < 992) $(this).siblings('.sub-toggle').trigger('click');
    });

    // reset submenus when going back to desktop width
    $(window).on('resize', function () {
        if (window.innerWidth >= 992) $('.has-sub').removeClass('open');
    });

    // mark the current page link as active
    // var page = location.pathname.split('/').pop() || 'index.html';
    // $('.main-nav .nav-link').each(function () {
    //     if ($(this).attr('href') === page) $(this).addClass('active');
    // });
});