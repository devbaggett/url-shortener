import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUrl } from "../actions/urls";

function Form() {
    const [url, setUrl] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(createUrl({original: url}));
    };

    return (
        <form method="POST" onSubmit={handleSubmit}>
            <label htmlFor="originalUrl" />
            <input id="originalUrl"
                   type="url"
                   name="originalUrl"
                   value={url}
                   placeholder="URL"
                   onChange={event => setUrl(event.target.value)}
                   required />
            <button type="submit">Shorten</button>
        </form>
    );
}

export default Form;
