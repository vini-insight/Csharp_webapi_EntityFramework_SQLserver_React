import React, { Component } from 'react';

export class Pessoa {
    constructor() {
        this.id = 0;
        this.nome = "";
    }
}

export class AddPessoa extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", pessoa: new Pessoa(), loading: true };
        this.intialize();

        this.handleSalve = this.handleSalve.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    async intialize() {

        var id = this.props.match.params["id"];
        if (id > 0) {
            const response = await fetch('api/Pessoas/' + id);
            const data = await response.json();
            this.setState({ title: "Edit", pessoa: data, loading: false });
        }
        else {

            this.state = { title: "Create", pessoa: new Pessoa(), loading: false };
        }
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();

        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>Pessoa</h3>
                {contents}
            </div>
        );
    }


    handleSalve(event) {
        event.preventDefault();

        const data = new FormData(event.target);

        if (this.state.pessoa.id) {
            const response1 = fetch('api/Pessoas/' + this.state.pessoa.id, { method: 'PUT', body: data });
            // this.props.history.push('/fetch-pessoa');
            window.location.href = "fetch-pessoa";
            // this.props.location.href = "fetch-pessoa";
        }
        else {
            const response2 = fetch('api/Pessoas/', { method: 'POST', body: data });
            // this.props.history.push('/fetch-pessoa');
            window.location.href = "fetch-pessoa";
        }
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.push('/fetch-pessoa');
    }

    renderCreateForm() {
        return (
            <form onSubmit={this.handleSalve}>
                <div className="form-group row">
                    <input type="hidden" name="id" value={this.state.pessoa.id} />
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <input className="form-control" type="text" name="nome" defaultValue={this.state.pessoa.nome} required />
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-success" value={this.state.pessoa.id}>Salvar</button>
                    <button className="btn btn-danger" onClick={this.handleCancel}>Cencelar</button>
                </div>
            </form>

        );
    }

}


