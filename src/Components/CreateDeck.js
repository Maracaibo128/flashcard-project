import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../utils/api/index";

function CreateDeck() {
    const history = useHistory();
    const initialState = {
        name: "",
        description: "",
    };
    const [newDeck, setNewDeck] = useState(initialState);

    function handleChange({target}) {
        setNewDeck({
            ...newDeck,
            [target.name]: target.value,
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const abortController = new AbortController();
        const response = await createDeck(
            {...newDeck},
            abortController.signal
        );
        history.push("/");
        return response;
    }

    async function handleCancel() {
        history.push("/");
    }

    return (
        <div>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">Create deck</li>
            </ol>
            <form onSubmit={(event) => handleSubmit(event)}>
                <h1>Create Deck</h1>
                <div className="form-group">
                    <label>Name</label>
                    <input  
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        onChange={handleChange}
                        value={newDeck.name}
                        />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        type="text"
                        id="description"
                        name="description"
                        className="form-control"
                        onChange={handleChange}
                        value={newDeck.description}
                        />
                </div>
                <button
                    className="btn btn-secondary m-1 p-1"
                    onClick={() => handleCancel()}>Cancel</button>
                <button
                    className="btn btn-primary m-1 p-1"
                    type="submit">Submit</button>
            </form>
        </div>
    )



}

export default CreateDeck;
