import React from 'react';
import Logo from '../img/logo.png';

export default function Header() {
	return (
		<div className="py-12 flex items-center md:flex-row flex-col flex-wrap bg-red-200">
			<img className="m-auto" alt="logo" src={Logo} />
			<a className="mr-8 rounded-full bg-red-600 p-4 md:mt-0 mt-2" href="http://google.com">
				заказ по тел 012 345 67 89
			</a>
		</div>
	);
}
