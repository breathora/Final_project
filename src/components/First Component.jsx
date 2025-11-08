import logo from '../logo.svg';
import '../App.css';
import ChildrenComponent from './ChildrenComponent';

const FirstComponent = () => {
    return (
        <div>
            <h1>Первый компонент</h1>
            <p>Всем привет! Это мой компонент!</p>
            <img src={logo} className="App-logo" alt="logo" />
            <ChildrenComponent name="Alla" text="Привет мир!"></ChildrenComponent>
        </div>
    )
}

export default FirstComponent;