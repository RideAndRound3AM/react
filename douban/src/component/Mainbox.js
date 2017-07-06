import React from 'react';
import {
	BrowserRouter  as  Router, 
	Link,
	Route
} from "react-router-dom";
import Headbox from "./Headbox";
import Contentbox from "./Contentbox";
import Sidebox from "./Sidebox";
import ControllAPI from "../apis/ControllAPI";
export default class Mainbox extends React.Component {

  constructor(props) {
    super(props);
    this.renderPicture=this.renderPicture.bind(this);
    this.state={
    	name:"王聪",
    	photo:[]
    }
  }
  componentDidMount() {
  	console.log("组件加载结束")
  	this.renderPicture();
  }
/*返回出图片*/
  renderPicture(){
  	ControllAPI.Picture(res=>{
  		if(res.status==200){
  			var data = res.data;
  			this.setState({
  				photo:data.list
  			})
  			console.log(res)
  		}
  	},err=>{
  		console.log(err)
  	});
  }
 /*返回商品列表*/
  renderBuylist(){

  }

  render() {
    return (
    	<Router>
    		<div className="mainbox">
				<div className="nav">
					<ul>
						<li>
							<Link to="/">
								首页
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="/Contentbox">
								文章
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to = "/Sidebox">
								about us
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="/">
								购物车
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="/">
								集市
							</Link>
						</li>
					</ul>
				</div>      		
				<div className="content">
					<Route exact path="/" render= {
						()=>{
							return <Headbox names={this.state.name} photoArr={this.state.photo}/>
						}
					}/>
					<Route path="/Contentbox" component={Contentbox}/>
					<Route path="/Sidebox" component={Sidebox}/>
				</div>
     	 </div>
		
    	</Router>
          );
  }
}

