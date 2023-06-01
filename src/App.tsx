import '@/plugins/reactI18n';

import { type FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Register from '@/pages/Register';

const App: FC = () =>
	<Routes>
<Route path='/register' element={<Register />} />
</Routes>;

export default App;
