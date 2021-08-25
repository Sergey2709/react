import { useSelector, useDispatch } from 'react-redux';
import {
    selectCount,
    selectText
} from '../Counter/counterSlice';
import {
    increment,
    selectMytext
} from './mytextSlice';

export default function DataDesk() {
    const count = useSelector(selectCount); // получаем данные из store
    const text = useSelector(selectText); // получаем данные из store
    const t = useSelector(selectMytext); // получаем данные из store
    const dispatch = useDispatch();


    let changeText = () => {
        console.log('work');
        dispatch(increment());
    }

    return (
        <div>
            <hr />
            <h1>Data Desk</h1>
            <h2>{count}</h2>
            <h2>{text}</h2>
            <h2 onClick={changeText}>{t}</h2>
        </div>
    );
}