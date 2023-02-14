import React, { useState } from "react";
import { useHistory } from "react-router-dom"


function NameAndDescriptionForm({ handleChange, handleSubmit, handleCancel, mode }) {
 console.log(mode);
    return (
        <>
        <h3>{mode === "Edit" ? "Edit Deck" : "Create Deck"}</h3>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label
                    htmlFor="FormControlInput1"
                    className="form-label">Name
                </label>
                <input 
                    type="text"
                    className="form-control"
                    id="FormControlInput1"
                    name="name" 
                    onChange={handleChange}
                />

                <div className="mb-3">
                    <label
                        htmlFor="FormControlTextarea1"
                        className="form-label">
                            Description
                    </label>
                    <textarea
                        className="form-control"
                        id="FormControlTextarea1"
                        name="description"
                        rows="3"
                        onChange={handleChange}
                    />

                    <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={handleCancel}
                    >
                            Cancel
                    </button>

                    <button
                        className="btn btn-primary"
                        type="submit">
                            Save
                    </button>
                </div>
            </div>
        </form>
        </>
    )

}

export default NameAndDescriptionForm;

