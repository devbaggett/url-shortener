import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUrls } from "./actions/urls";
import Form from "./components/Form";
import Table from "./components/Table";
import './App.css';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUrls());
    }, [dispatch]);

    return (
        <div className="App">
            <h1>URL Shortener</h1>
            <Form />
            <Table />
        </div>
    );
}

export default App;
