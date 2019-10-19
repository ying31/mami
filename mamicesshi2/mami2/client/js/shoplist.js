$(() => {
    new Promise(function (resolve, reject) {

        $.ajax({
            type: "get",
            url: "http://127.0.0.1/mamicesshi/mami/server/shoplist2.php",
            dataType: "json",
            success: function (data) {
                // console.log(data);
                let res = "";
                for (let i = 0; i < data.count; i++) {
                    res += `<a href="javascript:;">${i + 1}</a>`
                }
                $("#page").html(res);
                $("#page").children().eq(0).addClass("active");

                resolve();
            }
        });
    }).then(function () {
        getDataWithPage(1, 0);
    })
    function getDataWithPage(page, type) {
        $.ajax({
            type: "get",
            url: "http://127.0.0.1/mamicesshi/mami/server/shoplist1.php",
            data: `page=${page}&sortType=${type}`,
            dataType: "json",
            success: function (data) {
                console.log(data);
                renderUI(data)
                // $(".item").on("click", function () {
                // console.log($(".item"), "+++");
                // 列表页跳转详情页
                var aLis = document.querySelectorAll('.item')
                for (var i = 0; i < aLis.length; i++) {
                    aLis[i].index = i;
                    aLis[i].onclick = function () {
                        var good = data[this.index];
                        var xhtml = '';
                        // console.log(good);
                        for (var h in good) {
                            xhtml += h + '=' + good[h] + '&';
                        }
                        console.log(xhtml);
                        location.href = 'Product details.html?' + xhtml.slice(0, -1);
                    }
                }

                /* 实现点击添加商品到购物车的功能 */
                $(".addCart").on("click", function () {
                    // console.log($(".addCart"), "+++");
                    let good_id = $(this).parents("li").data().id;
                    console.log(good_id);

                    $.ajax({
                        url: "http://127.0.0.1/mamicesshi2/mami2/server/cart.php",
                        data: { type: "add", good_id: good_id },
                        dataType: "json",
                        success: function (response) {
                            if (response.status == "success") {
                                $(".cart_total").text($(".cart_total").text() * 1 + 1);
                            }
                            console.log(response);

                        }

                    });




                })





            }
        });
    }


    function renderUI(data) {
        // console.log(data);
        let html = data.map((ele) => {

            return `
            <li class="item" data-id=${ele.good_id}>
            <div class="item-box">
                <img src=${ele.pic}>
                <div class="huizhang">
                ${ele.huizhang ? `<img src=${ele.huizhang}></img>` : ''}
            </div>
                <div class="title">
                    <a href="">${ele.title}</a>
                </div>
                <div class="temai">
                ${ele.temai ? `<span class="temai1">${ele.temai}</span>` : ''}
                  
                    <span class="temai2">${ele.zimaocang}</span>
                </div>
                <p class="sale">
                    <span>￥${ele.price}</span>
                   <span>￥${ele.redprice}/件</span>
                    <span>${ele.sale}</span>
                  
                </p>
              
            </div>  
            <button class="addCart" style="background:orange;width: 80px;height: 20px;text-align:center;">加入购物车</button>
        </li>
            `
        }).join("");
        $(".box-list").html(html);
    }
    /* 先给页面添加点击事件，当点击的时候获取页码值，根据该值发送网络请求 */
    $("#page").on("click", "a", function () {
        getDataWithPage($(this).text());
        $(this).addClass("active").siblings().removeClass("active");
    })

    /* 处理排序 */
    $(".typeBtn").click(function () {
        getDataWithPage(1, $(this).index());
    })
    /* 发请求获取购物车中商品的数量 */
    $.ajax({
        url: "http://127.0.0.1/mamicesshi2/mami2/server/cart.php",
        dataType: "json",
        success: function ({ total }) {
            // console.log(total);
            $(".cart_total").text(total);
        }
    });

    $(".cart").click(() => window.location.href = "Security settlement.html");




})