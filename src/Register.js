import React, {Component} from 'react';

export default class Register extends Component {

    state = {
        value : {
            id: '',
            pw: '',
        }
    };

    onChangeId = e => {
        this.setState({id: e.target.value});
    };

    onChangePw = e => {
        this.setState({pw: e.target.value});
    };

    onChange = e => {
        this.setState({vlalue: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault(); //디폴트로 설정된 기능을 안써서 페이지가 새로 로드되는 것을 방지! 중요!
        
        //서버 통신할때
        //fetch('API주소');
        
        console.log('submit!');
    }

    render() {
        const {id, pw} = this.state;

        return (
            <form onSubmit={this.onSubmit} onChange={}>
                <input type="text" value={id} onChange={this.onChangeId} />
                <input type="password" value={pw} onChange={this.onChangePw}/>
                <button type={'submit'}>제출</button>
            </form>
        )
    }
}