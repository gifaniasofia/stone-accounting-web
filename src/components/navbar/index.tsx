'use client';

import React, { useState } from 'react';
import {
	AnimatePresence,
	m,
	useMotionValueEvent,
	useScroll,
} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import appData from '@/constant/data/app';
import navigationData from '@/constant/data/navigation';
import { cn } from '@/lib/utils';

import LookupIcon from '../../../public/images/icon/lookup.svg';

import MobileNav from './mobile';

const Navbar: React.FC = () => {
	const [scrolled, setScrolled] = useState<boolean>(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', latest => {
		setScrolled(latest > 250);
	});

	return (
		<m.nav
			variants={ {
				initial: {
					color: '#01019b',
					boxShadow: '0 0 #0000',
				},
				animate: {
					color: '#FFFFFF',
					boxShadow:
            '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
				},
			} }
			initial='initial'
			animate={ scrolled ? 'animate' : 'initial' }
			style={ { background: scrolled ? '#01019b' : 'transparent' } }
			transition={ { duration: 0.35, ease: 'easeInOut' } }
			className={ cn('fixed top-0 z-50 w-full h-16 lg:h-20') }
		>
			<div className='flex items-center justify-between h-full relative px-4 lg:px-12 3xl:px-14'>
				<Logo />
				<div className='hidden gap-8 lg:flex'>
					<Links />
					<LookupIcon className='flex-shrink-0 w-10 h-10 3xl:w-[49px] 3xl:h-[49px]' />
				</div>
				<MobileNav />
			</div>
		</m.nav>
	);
};

export default Navbar;

export const Logo: React.FC = () => {
	return (
		<Link
			href='/'
			className='max-lg:absolute max-lg:z-[100] max-lg:top-1/2 max-lg:-translate-y-1/2 max-lg:left-4'
		>
			<Image
				src={ appData.logo }
				alt={ appData.appName }
				width={ 192 }
				height={ 53 }
				className='w-[120px] lg:w-[160px] h-auto object-contain'
			/>
		</Link>
	);
};

const Links = () => {
	const menus = navigationData.menu;

	return (
		<div className='flex items-center gap-6'>
			{ menus.map(menu => (
				<NavLink
					key={ menu.name }
					menu={ menu } />
			)) }
		</div>
	);
};

const NavLink = ({ menu }: { menu: NavMenu }) => {
	const [open, setOpen] = useState<boolean>(false);

	const showFlyout = menu.items?.length && !menu.href && open;

	return (
		<div
			onMouseEnter={ () => setOpen(true) }
			onMouseLeave={ () => setOpen(false) }
			className='relative h-fit w-fit'
		>
			<span
				className={ cn(
					'relative cursor-pointer text-xl',
					open && 'text-primary-light'
				) }
			>
				{ menu.href ? <Link href={ menu.href }>{ menu.name }</Link> : menu.name }
			</span>
			<AnimatePresence>
				{ showFlyout && (
					<m.div
						initial={ { opacity: 0, y: 15 } }
						animate={ { opacity: 1, y: 0 } }
						exit={ { opacity: 0, y: 15 } }
						style={ { translateX: '-50%' } }
						transition={ { duration: 0.3, ease: 'easeOut' } }
						className='absolute left-1/2 top-14 bg-gray-primary/70 text-white'
					>
						<div className='absolute -top-6 left-0 right-0 h-6 bg-transparent' />
						{ menu.items?.map(item => (
							<div
								key={ item.name }
								className='text-base px-[25px] py-3 min-w-[191px] whitespace-nowrap cursor-pointer hover:bg-gray-primary/85'
							>
								<Link href={ item.href }>{ item.name }</Link>
							</div>
						)) }
					</m.div>
				) }
			</AnimatePresence>
		</div>
	);
};
