import React from 'react';

export default class Headbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

  			let imags = this.props.photoArr.map((photo,index)=>{
  			return <img src={photo.img} key={index} />
  			});
		    return (
		    		<div className="headbox">
		    			<h1>  DouBan welcome you {this.props.names}</h1>
		    			<div className="photo">
		    					<div className="imags">
		    					{imags}
		    					</div>
		    			</div>
		    		</div>
		    	)

	}

}
