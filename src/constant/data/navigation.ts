const navigationData = {
	menu: [
		{
			name: 'About us',
			items: [
				{
					name: 'Our Mission',
					href: '/',
				},
				{
					name: 'Our Values',
					href: '/',
				},
				{
					name: 'Our Story',
					href: '/',
				},
				{
					name: 'Client Benefits',
					href: '/',
				},
			],
		},
		{
			name: 'Our service',
			items: [
				{
					name: 'Accounting',
					href: '/',
				},
				{
					name: 'Taxation',
					href: '/',
				},
				{
					name: 'Business Advisory',
					href: '/',
				},
				{
					name: 'Others',
					href: '/',
				},
			],
		},
		{
			name: 'Franchise program',
			items: [
				{
					name: 'Program Overview',
					href: '/',
				},
				{
					name: 'Franchise Benefit',
					href: '/',
				},
				{
					name: 'Application Process',
					href: '/',
				},
			],
		},
		{
			name: 'Contact',
			href: '/contact',
			items: [
				{
					image: '/images/icon/tel.svg',
					href: 'tel:+61355231234',
					name: '(+61) 355 231 234',
				},
				{
					image: '/images/icon/mail.svg',
					href: 'mailto:hello@stoneaccounting.com.au',
					name: 'hello@stoneaccounting.com.au',
				},
			],
		},
	] satisfies NavMenu[],
};

export default navigationData;
