import React from 'react';
import '../src/scss/index.scss';
import '../src/scss/App.scss';
import {Provider} from "react-redux";
import store from "../src/redux_config/store";

import App, {Container} from 'next/app';
import Link from "next/link";

import Router from 'next/router';
Router.events.on('routeChangeComplete', (a,b) =>{
    alert(a)
})

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'LIVEEVIL',
            menus:[]
        };
    }

    UNSAFE_componentWillMount(){
        let temp = [];
        for(let i=0;i< 2;i++) temp.push({name:'---',link:'/'});
        temp.push({name:'登录',link:'/logan'});
        temp.push({name:'首页',link:'/home'});
        for(let i=0;i< 10;i++) temp.push({name:'---',link:'/'});
        this.setState({menus:temp});
    }

    render() {
        const {children} = this.props;
        return (
            <Provider store={store}>
                <div className="App">
                    <div className="header">
                        <div className="name">{this.state.name}</div>
                        <img className="photo" src="../static/logo.jpg" alt=""/>
                    </div>
                    <div className="content">
                        <div className="app-left">
                            {
                                this.state.menus.map((item) =>  (
                                    <Link scroll={false} href={item.link}>
                                        <a className={"item"}>{item.name}</a>
                                    </Link>
                                ))
                            }
                        </div>
                        <div className="app-container">
                            {children}
                        </div>
                    </div>
                </div>
            </Provider>
        )
    }
}

export default class BasicContainer extends App {
    render() {
        const {Component, pageProps} = this.props;
        return (
            <Container>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Container>
        )
    }
}