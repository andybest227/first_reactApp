import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import NotFound from "../components/NotFound";
import DefinitionSearch from "../components/DefinitionSearch";

export default function Defination() {

    const [word, setWord] = useState();
    const [notFound, setNotFound] = useState(false);
    const [error, setError] = useState(false);
    let { search } = useParams();
    const navigate = useNavigate();

    const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
    //const url = 'https://api.dictilfkfkdkslsonaryapi.dev/api/v2/entries/en/';


    useEffect(() => {
        fetch(url + search)
            .then((res) => {
                console.log(res.status);
                if (res.status === 404) {
                    setNotFound(true);
                }

                if (!res.ok) {
                    setError(true);
                    throw new Error("Something went wrong");
                }

                return res.json();
            })
            .then((data) => {
                setWord(data[0].meanings);

            })
            .catch((e) => {
                console.log(e.message + ": ");
            })
            ;

    }, []);

    if (notFound === true) {
        return (
            <>
                <NotFound />
                <Link to="/dictionary">Search another</Link>
            </>
        )
    }
    if (error === true) {
        console.log("Here...");
        return (
            <>
                <p>Something was wrong, try again!</p>
                <Link to="/dictionary">Search another</Link>
            </>
        );
    }
    return (
        <>
            {word ? (
                <>
                    <h2>Here are the definations:</h2>
                    {word.map((meaning) => {
                        return (
                            <p key={uuidv4()}>
                                <strong> {meaning.partOfSpeech + ": "}</strong>
                                {meaning.definitions[0].definition}
                            </p>
                        )
                    })}
                    <DefinitionSearch />
                </>
            ) : "Loading..."}
        </>
    );
}