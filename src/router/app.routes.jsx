import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home/index';
import { CreateMovie } from '../pages/CreateMovie/index';
import { Preview } from '../pages/Preview/index';
import { Profile } from '../pages/Profile/index';

export function AppRoutes(){
    return(
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/createmovie' element={<CreateMovie />}/>
        <Route path='/preview' element={<Preview />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    );
}