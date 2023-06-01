import type { FC } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import Search from './Search';

const Header: FC = () => (
	<div className='relative flex w-full justify-between'>
		<div className='flex w-1/2 items-center justify-center gap-5 text-white'>
			<AiOutlineMenu className='text-2xl' />
			<Search />
		</div>
		<div className='text-white'>Satyjy: Berdi Nazarow</div>
	</div>
);

export default Header;
