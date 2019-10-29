function f() {
    var nickName = $('#nickName').css('display');
    if (nickName === 'block') {
        $('#nickName').css('display','none');
    } else {
        $('#nickName').css('display','block');
    }
}