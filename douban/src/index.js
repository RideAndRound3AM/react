import React from 'react';
import ReactDOM from 'react-dom';
import Mainbox from "./component/Mainbox";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Mainbox>
	</Mainbox>
	, document.getElementById('root'));
registerServiceWorker();
