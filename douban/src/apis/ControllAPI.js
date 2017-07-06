import axios from "axios";
// 轮播图    `http://5ishe.win/pages/7/mock/home/sliders.json`
// 商品列表  `http://5ishe.win/pages/7/mock/products/products.json`
// 热卖     `http://5ishe.win/pages/7/mock/home/hot_shop.json`
// 详情     `http://5ishe.win/pages/7/mock/detail/detail_slider.json`


 class ControllAPI {
	constructor(){
		this.frontUrl = "http://5ishe.win/pages/7/mock/";
	}

	Picture(success,error){
		var getURL = this.frontUrl + "home/sliders.json";
		console.log(getURL)
		axios.get(getURL).then((res,err)=>{
			if(!err){
				success(res)
				console.log(res)
			}else{
				error(err)
			}
		}).catch(err=>{
			error(err)
		})
	}
	Buylist(){
		console.log('abc')
	}
}

var controllAPI = new ControllAPI();
export default controllAPI;//实例化在抛出