import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../api";

function Table() {
    const urls = useSelector(state => state.urls);

    function handleClick(event) {
        event.preventDefault();
        const redirectURL = async () => {
            const response = await axios.get(url + "/" + event.target.innerHTML);
            window.location.replace(response.data);
        };
        redirectURL()
            .then(() => {
                console.log("Redirecting...");
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Original URL</th>
                    <th>Shortened URL</th>
                    <th>Clicks</th>
                </tr>
            </thead>
            <tbody>
                {urls.map(item => {
                    return (
                        <tr key={item._id}>
                            <td><a href={item.original}>{item.original}</a></td>
                            <td><a href={item.short} onClick={handleClick}>{item.short}</a></td>
                            <td>{item.clicks}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table;
