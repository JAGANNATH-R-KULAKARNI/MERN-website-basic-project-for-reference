import React from 'react';
import axios from 'axios';
import List from './components/list';

class App extends React.Component
{

  constructor()
  {
    super();

    this.state={
     foodName : '',
     daysSinceIAte : 0,
     list : null,
     newfoodname : ''
    };

    this.valueChangeHandler=this.valueChangeHandler.bind(this);
    this.uploadToDatabase=this.uploadToDatabase.bind(this);
    this.editFoodNameHandler=this.editFoodNameHandler.bind(this);
    this.deleteFood=this.deleteFood.bind(this);
  }

  componentDidMount()
  {
  axios.get('http://localhost:3001/read')
  .then((res)=>{
    console.log(res);
    this.setState({
      list : res.data
    });

  })
  .catch((err)=>console.log(err));
  }

  editFoodNameHandler(id)
  {
  console.log(this.state.newfoodname);

  axios.put('http://localhost:3001/update',{
    id : id,
    newfoodname : this.state.newfoodname
  })
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  });
  }

  deleteFood(id)
  {
    axios.delete(`http://localhost:3001/delete/${id}`)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
  }

  uploadToDatabase()
  {
    console.log(this.state.daysSinceIAte);
    console.log(this.state.foodName);
    axios.post('http://localhost:3001/insert',{
      foodName : this.state.foodName,
      days : this.state.daysSinceIAte,
    });
  }
  valueChangeHandler(e)
  {
   this.setState({
     [e.target.name] : e.target.value
   });

   console.log(e.target.value);
  }

  render()
  {
    return (
      <div>
        <form>
  <label for="foodname">FoodName : </label><br />
  <input type="text" id="foodname" name="foodName" onChange={this.valueChangeHandler}/><br />
  <label for="dsia">daysSinceIAte :</label><br />
  <input type="number" id="dsia" name="daysSinceIAte" onChange={this.valueChangeHandler}/><br /><br />
  <button onClick={this.uploadToDatabase}> Upload </button>
 </form>
 <br />
 <h1>List</h1>
 <ul>
   {
     this.state.list ? this.state.list.map((item)=>{
      return <List FoodName={item['foodName']} DaysSinceIAte={item['daysSinceIAte']} id={item['_id']}
      valueChangeHandler={this.valueChangeHandler} editFoodNameHandler={this.editFoodNameHandler} deleteFood={this.deleteFood}/>;
        
    })
    : null
   }
 </ul>
      </div>
    );
  }
}
export default App;
