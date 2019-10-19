class Manger {
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
        this.root.id = "box1";
        this.root.appendChild(this.titleEle);
        document.querySelector('.lunbo1-1').appendChild(this.root);
    }
    renderbody() {
        let otitle = document.createElement("div");
        otitle.className = "box2"
        let html = this.data.map((ele) => {
            return `
            <li>
                    <a href="#">
                        <img src=${ele.bigpic}>
                    </a>
                    <p>${ele.title}</p>
                    <div>
             <span>${ele.price}</span>  
             <span>${ele.product}</span>  
                    </div>
                </li>
            `
        }).join("");
        otitle.innerHTML = `<ul class="j_slideLists">${html}</ul>`
        this.titleEle = otitle;


    }


}