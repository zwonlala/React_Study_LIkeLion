import React, {Component} from 'react';

export default class ConditionalComponent extends Component {
    state = {
        toggle: false, //여기에 쉼표 찍어도 되고 안찍어도 되는데 찍는이유..? 
        //-> 쉼표 없이 다음에 멤버 추가하고 깃허브에 올리면 이 줄과 새로 추가한 줄 추가 된 걸로 뜬다
        color: 'red',
    };

    onClickButton = () => {
        // this.setState(!this.state.toggle);    
        const {toggle} = this.state;
        this.setState({toggle: !toggle});
        // console.log(toggle); //여기에 console.log()를 찍으면 무용지물! 왜냐하면 이 함수가 끝나기 전까진 값이 변경되지 않기 때문!

        if (toggle) {
            this.setState({color: 'black'});
        }
        else {
            this.setState({color: 'red'});
        }
    };

    render() {
        const {toggle} = this.state;
        console.log(toggle); //여기에 console.log()를 찍어야 우리가 의도한 대로 변경된 토글 값 출력해줌!
        // return (
        //     <button onClick={this.onClickButton}>토글버튼</button>
        // )



        //if-else 문 써서 조건부 렌더링 하는 법
        //-> 이렇게 잘 안쓴다...
        // if (toggle) {
        //     return (
        //         <div>
        //              <button onClick={this.onClickButton}>토글버튼</button>
        //         </div>
        //     )
        // } 
        // else {
        //     return (
        //         <div>
        //              <button onClick={this.onClickButton}>토글버튼</button>
        //         </div>
        //     )
        // }

        //3항 연산자 써서 조건부 렌더링 쓰는 법. 
        return (
            <div>
                {
                    !toggle
                        ? <button onClick={this.onClickButton}>토글버튼</button>
                        : <button onClick={this.onClickButton}>토글버튼</button>
                }
            </div>
        )
    }
}