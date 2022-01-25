import React from "react";
import Customer from "./Customer";
import Login from "./Login";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import styled from "styled-components";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <SContainer>
                <Link to="/login">ログイン画面</Link>　
                <Link to="/customer">顧客一覧画面</Link>
            </SContainer>
            <Switch>
                <Route exact path={"/login"}>
                    <Login/>
                </Route>
                <Route exact path={"/customer"}>
                    <Customer/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

const SContainer = styled.div`
  // リンクのスタイル、リンクの配置位置
  font-family: serif;
  margin: 10px;
  
  //display: flex; // 横並びに
  //justify-content: space-around; // 要素に間隔あける
  //align-items: center; // 中央寄せ
  //flex-direction: column; // 積み重なるように
`

export default App;