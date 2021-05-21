import { Component } from "react";
import '../App.css';

class Carousel extends Component {
    constructor() {
        super()
        this.state = {
          
        }
    }

    img = "https://i.pinimg.com/originals/f6/da/7b/f6da7b1bb9b27a46009544460a95f327.jpg"
    img1 = "https://wallpaperaccess.com/full/1986132.jpg"
    img2 = "https://lh3.googleusercontent.com/5XJrZ0mAkemFTcyuKf_tkxDUpQRJnjWnYb-o81U8m8ITDIJLhuCHwpE7WuUKoPORGgr8m1S-=w1080-h608-p-no-v0"
   
    render() {
        return (   

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
     </ol>
    <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={this.img} class="d-block w-100" style={{height:"600px"}}   alt="..."></img>
    </div>
    <div class="carousel-item">
    <img src={this.img1} class="d-block w-100" style={{height:"600px"}} alt="..."></img>
    </div>
    <div class="carousel-item">
    <img src={this.img2} class="d-block w-100" style={{height:"500px"}} alt="..."></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>          


           
        )
    }
}
export default Carousel;
