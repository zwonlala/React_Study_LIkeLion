import React from 'react';
import NewInput from './NewInput';
import ConditionalComponent from './ConditionalComponent';

class App2 extends React.Component {
    state = {
        color : 'green'
    };
    

    render() {
        return (
            // <div>
            //     <NewInput/>
            //     <CustomBtn color={this.state.color} />
            // </div>
            // <ConditionalComponent/>
            <ListBtn/>
        );
    }


}

class  CustomBtn extends React.Component {
    static defaultProps = {
        color : 'white'
    };

    render() {
        const btnStyle = {
            color : this.props.color
        };

        return (
            <div>
                <button  style={btnStyle}> 내 버튼</button>
            </div>
        )
    }
}

//똑같은 컴포넌트 여러개 넣어주는 방법
class ListBtn extends React.Component {
    render() {
        const nameList = ['a', 'b', 'c', 'd', 'e'];
        return (
            <div>
                {
                    nameList.map((e,i) => {
                        return <button key={i}>{e}</button> //여기선 설명하기 위해 그냥 숫자 넣어주지만 사실 이렇게 안일하게 숫자 값 넣어주면 안됨. uuid나 겹치지 않는 값으로 할당해줘야 함.
                    })
                }
            </div>
        );
    }
}

// export default CustomBtn;
export default App2;