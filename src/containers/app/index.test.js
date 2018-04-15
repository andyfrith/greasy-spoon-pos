import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

describe( 'containers.app', () => {
  it( 'renders without crashing', () => {
    shallow( <App /> );
  } );
} );
