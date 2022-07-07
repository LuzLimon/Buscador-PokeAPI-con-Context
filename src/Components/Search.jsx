import React from "react";

class Search extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      name2: '#',
      img: '#',
      img2: '#',
      shiny: '#',
    }
  }
  
  fetchJale = async () => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
    let data = await res.json()
    console.log(data.name);
    this.setState({
      name: data.sprites.name,
      img: data.sprites.front_default,
      img2: data.sprites.back_default,
    })
  }

  handleName = event => {
    this.setState({
      name: event.target.value
    })
  }
  
  handleSubmit = event =>{
    this.fetchJale()
    this.setState({
      name: '',
    })
    event.preventDefault()
  }
  

render() {
        return (
        <div class="ContainerBus">
        <div className="card text-center">
          <div className="card-header">
            Pokemon API Buscador
          </div>
          <div className="card-body">
        <form onSubmit={this.handleSubmit}>    
            <label>Buscar Pokemon</label><br/>
            <input 
                type="text"
                placeholder="nombre"
                value={this.state.name}
                onChange={this.handleName}
            />
            <button type="submit" className="btn btn-primary">Search</button>
            <br /><br />
            <button onClick={this.setState.img}>Front</button>
          
        </form>
        <span>{this.state.name}</span>
        <img src={this.state.img} alt="Front"/>   
        <img src={this.state.img2} alt="Back"/>
          </div>
        </div>
        </div>
        );
    }

}


export default Search;