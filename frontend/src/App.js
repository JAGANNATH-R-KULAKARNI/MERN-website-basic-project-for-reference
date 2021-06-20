import React from 'react';
import axios from 'axios';

class App extends React.Component
{
  constructor()
  {
    super();
    this.state={
      data : "Not yet received :("
    };
  }

  componentDidMount()
  {
   axios.get('/admin/ReactExpressConnection').then((res)=>{
     this.setState({
       data : res.data
     })
   })
   .catch(err =>console.log(err));
  }

  render()
  {
    return (
      <div>
        {this.state.data}
      </div>
    );
  }
}
export default App;
