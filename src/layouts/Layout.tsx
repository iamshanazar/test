import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';
import NavCard from '@/helpers/NavCard';
// import {AiOutlineClockCircle} from "react-icons/ai"

const MainLayout: React.FC = () => (
	<div className='flex h-screen w-full bg-layout'>
		<div className='mr-2 grow p-4 xl:p-8'>
			<Header />
			<div className='mt-3 flex w-full flex-wrap gap-5'>
				<NavCard icon={<AiOutlineClockCircle />} title='Çek' />
				<NavCard icon={<AiOutlineClockCircle />} title='Çek' />
				<NavCard icon={<AiOutlineClockCircle />} title='Çek' />
				<NavCard icon={<AiOutlineClockCircle />} title='Çek' />
			</div>
		</div>
		<Outlet />
	</div>
);

export default MainLayout;
