class findshop {
    constructor(data) {
        this.data = data;
        this.root = null;
        this.titleEle = null;
        this.bodyEle = null;
    }
    init() {
        this.render();
        this.addevent();
    }
    render() {
        this.renderTitle();
        // this.renderbody();
        this.root = document.createElement("div");
        this.root.className = "find_main";
        this.root.appendChild(this.titleEle);
        // this.root.appendChild(this.bodyEle);
        document.querySelector('.find_cate_content').appendChild(this.root);
    }
    renderTitle() {
        let oTitle = document.createElement("div");
        oTitle.className = "find_main_cate"
        oTitle.innerHTML = this.data.map((ele) => {
            return `<div class="find_cate_main_c">${ele.name1} </div>
           <div class="find_cate_main_e">${ele.name2}</div>
           <div class="find_cate_box"> ${this.renderbody(ele.data1)} </div>  
        
           `
        }).join("");
        this.titleEle = oTitle;
    }
    renderbody(data) {

        // let oBody = document.createElement("div");
        // oBody.className = "find_cate_box";
        let html = data.map((ele) => {
            return ` <a href="http://127.0.0.1/mamicesshi2/mami2/client/html/shoplist.html">
            <img src=${ele.bigpic} class="find_cate_box">
            <div class="cate_text">
                <p class="ctext">${ele.title}</p>
                <div class="etext">${ele.price}</div>
            </div>
        </a>`
        }).join("");
        return html;

    }

}