import type { FC } from 'react';

const Search: FC = () => (
	<div className='w-full mr-7 '>
		<input
			type='search'
			className='w-full h-xl outline-none border-none rounded-sm bg-[#323435] px-1 py-2 text-[#C4C4C4]'
			placeholder='Search'
		/>
	</div>
);

export default Search;
