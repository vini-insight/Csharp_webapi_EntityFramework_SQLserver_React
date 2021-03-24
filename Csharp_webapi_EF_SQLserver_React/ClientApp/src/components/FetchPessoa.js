import React, { Component } from "react"
import { Link } from 'react-router-dom'

export class FetchPessoa extends Component {
    static displayName = "Pessoas";

    constructor() {
        super();
        this.state = { pessoas: [], loading: true }
    }

    componentDidMount() {
        this.populaPessoaData();
    }

    static handleEdit(id) {
        window.location.href = "/pessoa/edit/" + id;
    }

    static handleDelete(id) {
        if (!window.confirm("Você deseja deletar a pessoa : " + id)) {
            return;
        }
        else {
            fetch('api/pessoas/' + id, { method: 'delete' })
                .then(json => {
                    window.location.href = "fetch-pessoa";
                    alert('Deletado com Sucesso!');
                })
        }
    }

    static renderPessoasTabela(pessoas) {

        return (
            <table className='table table-striped' aria-labelledby="tabelLabel" >
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {pessoas.map(pess =>
                        <tr key={pess.id}>
                            <td>{pess.id}</td>
                            <td>{pess.nome}</td>

                            <td>
                                <button className="btn btn-success" onClick={(id) => this.handleEdit(pess.id)}>Edit</button> &nbsp;
                                  <button className="btn btn-danger" onClick={(id) => this.handleDelete(pess.id)}>Delete</button>
                            </td>

                        </tr>

                    )}
                </tbody>
            </table>
        );

    }

    render() {
        let contents = this.state.loading
            ? <p><em> Carregando... </em> </p>
            : FetchPessoa.renderPessoasTabela(this.state.pessoas);

        return (
            <div>
                <h1 id="tabelLabel" >Pessoas</h1>
                <p>Tela de Listagem de Pessoas</p>
                <p>
                    <Link to="/add-pessoa">Cadastrar Pessoa</Link>
                </p>
                {contents}
            </div>
        );
    }


    async populaPessoaData() {
        const response = await fetch('api/Pessoas');
        const data = await response.json();
        this.setState({ pessoas: data, loading: false });
    }

}