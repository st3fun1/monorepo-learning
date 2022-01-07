import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import '@monorepo-learning/shared-ui';
import { Route, Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { DemoCounterElement, TitleElement } from '@monorepo-learning/shared-ui';

export function App() {
  const title = useRef<TitleElement>(null);
  const counter = useRef<DemoCounterElement>(null);

  useEffect( () => {
    if (title.current) {
      title.current.color = 'blue';
    }

    if(counter.current) {
      counter.current.count = 2;
    }
  }, []);

  return (
    <>
      <custom-title title={'React'} ref={title}/>

      <custom-counter ref={counter} />
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </>
  );
}

export default App;
