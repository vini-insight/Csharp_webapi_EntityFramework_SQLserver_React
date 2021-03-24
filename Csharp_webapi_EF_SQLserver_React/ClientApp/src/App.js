import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { FetchPessoa } from './components/FetchPessoa';
import { AddPessoa } from './components/AddPessoa';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/fetch-pessoa' component={FetchPessoa} />
        <Route path='/add-pessoa' component={AddPessoa} />
        <Route path='/pessoa/edit/:id' component={AddPessoa} />
      </Layout>
    );
  }
}
