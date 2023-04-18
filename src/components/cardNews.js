class Cardnwes extends HTMLElement{
    constructor(){
        super();

        const shadow =  this.attachShadow({ mode: "open"})
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());

    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card");
        // card left 
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class","card_left");

        const autor = document.createElement("span")
        autor.textContent = "by " + (this.getAttribute("autor") ||" anonymopus") 

        const linkTitle = document.createElement("a")
        linkTitle.textContent = this.getAttribute("title")
        linkTitle.href = this.getAttribute("link-url")

        const newsContent = document.createElement("p")
        newsContent.textContent = this.getAttribute("content")


        cardLeft.appendChild(autor)
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(newsContent)



        // card right
        const cardright = document.createElement("div");
        cardright.setAttribute("class","card_right");

        const newsImg = document.createElement("img")
        newsImg.src = this.getAttribute("caminho-img") || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcD5njo6POkUmcU7kQcyLTckktPH5gbTde2Q&usqp=CAU"
        newsImg.alt = this.getAttribute("Foto da noticia")
        cardright.appendChild(newsImg)

        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardright)
        return componentRoot
    }

    style(){
        const style =  document.createElement("style");
        style.textContent=`
        
        
        .card{
            width: 80%;
            background: whitesmoke;
            margin: auto;
            margin-top: 3%;
           
            -webkit-box-shadow: 9px 7px 5px 0px rgba(0,0,0,0.58);
        -moz-box-shadow: 9px 7px 5px 0px rgba(0,0,0,0.58);
        box-shadow: 9px 7px 5px 0px rgba(0,0,0,0.58);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        
        
        
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        
        .card_left > span{
            font-weight: 400;
        
        }
        
        .card_left > a{
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        
        }
        
        .card_left > p{
            color: gray;
        }
        
        .card_right > img {
            width: 400px;
            height: 200px;
        } 
        
                        
                        `
                  return style      
    }
}



customElements.define("card-news",Cardnwes)