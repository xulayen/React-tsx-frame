import React, { useEffect } from 'react';
import logo from '@/internals/img/logo.svg';
import styles from './App.less';
import observerHoc from '@/components/hoc/observerHoc';
import CSSModules from 'react-css-modules';

function App(props: any) {
  const store = props.store.home.HomeStore;
  function cluseNum() {
    ++store.txtMobile;
  }

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div styleName="App" onClick={() => cluseNum()}>
      <header styleName="App-header">
        <img src={logo} styleName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          {props.store.home.HomeStore.txtMobile}
        </p>
        <a
          styleName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a styleName="App-link" href="http://xulayen.com">
          作者：{props.store.APPStore.BaseInfo.Author}
        </a>
      </header>
    </div>
  );
}

export default observerHoc(CSSModules(App, styles));

