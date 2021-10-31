import React from 'react';

class Form extends React.Component {
    state = {
        inputText: '',
        inputText2: '',
        textarea: '',
        selectOptions: [
            { value: 'grapefruit', text: 'грейпфрут' },
            { value: 'apple', text: 'Яблоко' }
        ],
        select: ["grapefruit"],
    }

    componentDidMount() {
        setTimeout(() => this.setState({ selectOptions: [
            ...this.state.selectOptions,
            { value: 'orange', text: 'Апельсин' }
        ] }), 3000)
    }

    onChange = (e, nameState) => {
        console.log(e.target.value)
        this.setState({ [nameState]: e.target.value })
    }

    onChangeSelect = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        console.log(value)
        this.setState({ select: value })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const requestPayload = {
            input1: this.state.inputText,
            input2: this.state.inputText2,
            textarea: this.state.textarea,
            select: this.state.select,
        }
        console.log(requestPayload)
    }

    renderList = () => {
        return this.state.selectOptions.map((el) => (
            <option key={el.value} value={el.value}>{ el.text }</option>
        ));
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.inputText}
                    onChange={(e) => this.onChange(e, 'inputText')}
                />
                <input
                    type="text"
                    value={this.state.inputText2}
                    onChange={(e) => this.onChange(e, 'inputText2')}
                />
                <textarea value={this.state.textarea} onChange={(e) => this.onChange(e, 'textarea')} />
                <select multiple value={this.state.select} onChange={(e) => this.onChangeSelect(e)}>
                    { this.renderList() }
                </select>
                <button onClick={this.onFormSubmit}>submit</button>
            </form>
        )
    }
}

export default Form;