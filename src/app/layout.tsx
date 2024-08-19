import type { Metadata } from 'next';

import MotionLazy from '@/components/animate/motion-lazy';
import LenisScroller from '@/components/lenis-scroller';

import './globals.css';

export const metadata: Metadata = {
	title: 'Stone Accounting Group',
	description: 'Stone Accounting Group',
};

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<script
					dangerouslySetInnerHTML={ {
						__html: 'history.scrollRestoration = "manual"',
					} }
				/>
			</head>
			<body className='bg-white'>
				<MotionLazy>
					<LenisScroller />
					{ children }
				</MotionLazy>
			</body>
		</html>
	);
}
