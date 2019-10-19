class Manger1 {
    constructor(data) {
        this.data = data;
        this.root = null;
        this.titleEle = null;

    }
    init() {
        this.render();

    }
    render() {
        this.renderbody();
        this.root = document.createElement("div")
        this.root.id = "box3";
        this.root.appendChild(this.titleEle);
        document.querySelector('.banner22-2').appendChild(this.root);
    }
    renderbody() {
        let otitle = document.createElement("div");
        otitle.className = "box4"
        let html = this.data.map((ele) => {
            return `
            <li>
                    <a href="#">
                        <img src=${ele.bigpic}>
                    </a>
                    <p class="tt1">${ele.title}</p>
                    <div class="xiaopictuer"> 
                    <img src=${ele.smallpic}> 
                     <span>${ele.username}</span> 
                      </div> 
                    <div class="yonghuname">
                    <span></span>  
             <span>${ele.dianzan}</span>  
                    </div>
                </li>
            `
        }).join("");
        otitle.innerHTML = `<ul class="j_slideLists">${html}</ul>`
        this.titleEle = otitle;


    }


}