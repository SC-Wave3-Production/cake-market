import React from 'react';
import Logo from '../img/logo.png';

export default function Header() {
	return (
		<div className="py-12 flex items-center bg-red-200">
			<img className="m-auto" alt="logo" src={Logo} />
			<a className="mr-8 rounded-full bg-red-600 p-4" href="http://google.com">
				заказ по тел 012 345 67 89
			</a>
		</div>
	);
}
