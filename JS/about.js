

// 滑掉直接關閉聯絡我們視窗
 window.addEventListener('wheel', function (e) {
    // 滑鼠上滾
    // 往上滑可以直接關閉聯絡我們視窗
    if (e.deltaY < 0) {
        $('#section888').addClass('boxhid');
    }

    // 滑鼠下滾
    // 往下滾動NAVBAR背景色換色
    if (e.deltaY > 0) {
        $(".navbar_blue").addClass('changeBGcolor');
    }
});


// 按下分頁，按鈕顏色交換，隱藏另一頁

// 品牌精神
$('#tab_btn1').click(function () {
    $('#tab_btn1').addClass('tabitems_hover_event');
    $('#tab_btn2').removeClass('tabitems_hover_event');
    $('.welfareBox').addClass('hideClass');
    $('.soulBox').removeClass('hideClass');
})
// 公益活動
$('#tab_btn2').click(function () {
    $('#tab_btn2').addClass('tabitems_hover_event');
    $('#tab_btn1').removeClass('tabitems_hover_event');
    $('.soulBox').addClass('hideClass');
    $('.welfareBox').removeClass('hideClass');
});

// 點擊聯絡我們展開視窗
$("#callme").click(function () {

    $('#section888').addClass('boxSh');
    $('#section888').removeClass('boxhid');
});
// 關閉聯絡我們展開視窗
$("#closebtn").click(function () {

    $('#section888').addClass('boxhid');
    $('#section888').removeClass('boxSh');
});


// 點連結緩慢移到定位
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
