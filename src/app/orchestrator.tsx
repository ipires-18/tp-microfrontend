import { Router } from '@routes/index';
import store from '@stores/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

export const Orchestrator = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
};
