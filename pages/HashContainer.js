import React, {Component} from 'react';
import '../src/scss/index.scss';
import '../src/scss/App.scss';
import Login from './Login';
import Home from './Home';
import Link from "next/link";

class HashContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'LIVEEVIL',
            menus: [],
            hash:'#login'
        };
    }

    UNSAFE_componentWillMount() {
        let temp = [];
        for (let i = 0; i < 2; i++) temp.push({name: '---', link: '/'});
        temp.push({name: '登录', link: '/HashContainer#login'});
        temp.push({name: '首页', link: '/HashContainer#home'});
        for (let i = 0; i < 10; i++) temp.push({name: '---', link: '/'});
        this.setState({menus: temp});
    }

    componentDidMount() {
        window.onhashchange = (e) => {
            this.setState({hash:window.location.hash});
        }
    }

    render() {
        return (
            <div className="App">
                <div className="header">HashContainer</div>
                <div className="content">
                    <div className="app-left">
                        {
                            this.state.menus.map((item) => (
                                <a className={"item"} href={item.link}>{item.name}</a>
                            ))
                        }
                    </div>
                    <div className="app-container">
                        {
                            this.state.hash === '#login' ? <Login/> : <Home/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default HashContainer