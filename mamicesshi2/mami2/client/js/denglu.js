$(() => {
    // 测试数据

    // $(".phonenumber").val("13377293591");
    // $(".dongtainumber").val("999");
    let regphonenumber = /^1[3-9]\d{9}$/;
    // 监听手机号码失去焦点事件
    let phone = $(".phonenumber");


    phone.blur(function (e) {


        let parent = $(this).parent(".from-item");
        let msg = $(this).next(".form-group__message")
        var phonetext = $.trim($(this).val());
        console.log(phonetext);

        if (phonetext.length == 0) {
            parent.addClass("erro");
            msg.html("手机号码不能为空")
        } else if (!regphonenumber.test(phonetext)) {
            parent.addClass("erro");
            msg.html("手机号码不符合规范！")
        } else {
            parent.removeClass("erro");
            msg.html("")
        }


    })
    // 图形验证码的处理
    let captcha1 = new CaptchaMini({
        fontSize: 30,
        length: 5,
        content: "adshdfsnf234j35uetege5",
        lineNum: 3,
        dotNum: 20
    });
    let imgCodeText;


    captcha1.draw(document.querySelector('#captcha'), r => {
        console.log("验证码 = " + r);
        imgCodeText = r;
    });
    // 短信验证码
    let randomNumber;
    function getRandom(min, max) {
        return parseInt(Math.random() * (max - min + 1)) + min
    }

    randomNumber = 5553;
    $(".duanxin").click(function () {
        $("#ppnu").trigger("keyup");
        let flag = $(".from-item").hasClass("form-group-error");
        /* 如果flag的值是flase,那么我们就调用第三方平台发请求 发短信 */
        if (flag) return;

        $.ajax({
            type: 'post',
            url: 'http://route.showapi.com/28-1',
            dataType: 'json',
            data: {
                "showapi_appid": '91032', //这里需要改成自己的appid
                "showapi_sign": 'd57b19c8d2d44aef94aee464768a38d8', //这里需要改成自己的应用的密钥secret
                "mobile": $("#ppnu").val(),
                "content": `{"name":"大可爱","code":${randomNumber},"minute":"3","comName":"小可爱"}`,
                "tNum": "T150606060601",
            },
            success: (result) => console.log(result)
        });
    });

    $(".btn").click(function () {
        $("#ppnu").trigger("keyup");
        if ($("#imageCode").val() != imgCodeText) {
            alert("识别码不正确!");
            return;
        }
        if ($(".dongtainumber").val() != randomNumber + "") {
            alert("动态码不正确!");
            return;
        }
        console.log($(".btn"), "提交成功");
        alert("登录成功")
        window.location.href = "http://127.0.0.1/mamicesshi/mami/client/html/GJMi.html";
    })


})