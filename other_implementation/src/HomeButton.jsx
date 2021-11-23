import { useDispatch } from 'react-redux';

export default function HomeButton(props) {
    const { text } = props;

    const dispatch = useDispatch();

    return (
        <button onClick={
            () => dispatch({
                type: "HOME",
            })

        }>
            {text}
        </button>
    )
}