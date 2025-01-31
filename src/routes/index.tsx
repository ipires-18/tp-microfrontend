import NotFound from '@app/pages/not-found';
import { Route, Routes } from 'react-router-dom';
import MFClient from 'workpass_mf_client/main';

export function Router() {
  return (
    <Routes>
      <Route path='/clientes' element={<MFClient />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}
