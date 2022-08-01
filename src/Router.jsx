import { Route, Routes } from 'react-router-dom';

import { InitialScreen } from './page/InitialScreen';
import { LoginScreen } from './page/LoginScreen';

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<InitialScreen />} />
            <Route path="/login" element={<LoginScreen />}/>
        </Routes>
    );
}