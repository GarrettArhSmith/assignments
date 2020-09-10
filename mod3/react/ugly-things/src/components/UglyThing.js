import React, { Component } from 'react';

class UglyThing extends Component {
    state = {
        isEditing: false,
        imgUrl: this.props.imgUrl,
        title: this.props.title,
        desc: this.props.desc
    }

    editToggle = e => {
        if (this.state.isEditing) {
            const clickedId = Number(e?.target.parentNode.id)
            this.props.saveEdit(clickedId, this.state.title, this.state.desc, this.state.imgUrl)
        }
        this.setState(({isEditing}) => ({isEditing: !isEditing}))
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    render() {
        const editButton = <button className="edit" onClick={this.editToggle}>✎</button>
        const saveButton = <button className="save" onClick={this.editToggle}>✔</button>
        return (
            <div className="uglyThing">
                <span className="actions" id={this.props.id}>
                    {this.state.isEditing ? saveButton : editButton}
                    <button className="delete" onClick={this.props.delete}>✖</button>
                </span>
                {this.state.isEditing ? (
                    <form className="editForm">
                        <label>Image URL</label>
                        <input type="text" name="imgUrl" value={this.state.imgUrl} onChange={this.handleChange}/>
                        <label>Title</label>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                        <label>Description</label>
                        <input type="text" name="desc" value={this.state.desc} onChange={this.handleChange}/>
                    </form>
                ) : (
                    <>
                        <img src={this.props.imgUrl || "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="} alt={this.props.title} />
                        <h1>{this.props.title}</h1>
                        <p>{this.props.desc}</p>
                    </>
                )}
            </div>
        );
    }
}

export default UglyThing;