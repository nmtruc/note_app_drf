import React, { useState, useEffect } from 'react'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import Cookies from 'js-cookie'

const NotePage = ({ match, history }) => {
    let noteId = match.params.id
    let [note, setNote] = useState(null)
    let csrftoken = Cookies.get('csrftoken');

    useEffect(() => {
        getNote()
    }, [noteId])

    let getNote = async () => {
        let response = await fetch(`/api/notes/${noteId}/`)
        let data = await response.json()
        setNote(data)
    }

    let updateNote = async () => {
        fetch(`/api/notes/${noteId}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify(note)
        })
        history.push('/')
    }

    let deleteNote = async () => {
        fetch(`/api/notes/${noteId}/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            }
        })
        history.push('/')
    }

    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <ArrowLeft onClick={updateNote} />
                </h3>
                <button onClick={deleteNote}>Delete</button>
            </div>
            <textarea onChange={(e) => { setNote({ ...note, 'body': e.target.value }) }} defaultValue={note?.body}></textarea>
        </div>
    )
}

export default NotePage