import type { FC } from 'react';

type TProps = {
	icon: any;
	title: string;
};

const NavCard: FC<TProps> = ({ icon, title }) => {
	console.log('in card');
	return (
		<div className='my-2 flex h-[123px] w-[180px] flex-col items-start justify-between rounded-md bg-nav_card p-4 text-lg text-white lg:w-[200px]'>
			<span className='text-xl'>{icon}</span>
			<span className='w-full'>{title}</span>
		</div>
	);
};

export default NavCard;
