import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/components/app/app.jsx';
import {FILMS} from '~/moks/films';

const init = () => {
  ReactDOM.render(
      <App filmsList={FILMS} />,
      document.querySelector(`#root`)
  );
};

init();
