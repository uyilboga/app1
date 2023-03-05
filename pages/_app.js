import PropTypes from 'prop-types';

import { store } from '@/store';
import { Provider } from 'react-redux';

import 'bootstrap/scss/bootstrap.scss';
import '@/styles/globals.scss';
import '@/styles/_ui.scss';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}),
};
