import React,{Component} from 'react';

class List extends Component
{
    render()
    {
        return(
            <div>
                <br />
            <li>FoodName : {this.props.FoodName} , DaysSinceIAte : {this.props.DaysSinceIAte}</li>
            <label for="newFoodName">newFoodName :</label>
            <input type="text" id="newFoodName" name="newfoodname" onChange={this.props.valueChangeHandler}/><br />
             <button onClick={() => this.props.editFoodNameHandler(this.props.id)}> Update </button><br />
             <button onClick={() => this.props.deleteFood(this.props.id)}> Delete </button>
             <br />
            </div>
        );
    }
};

export default List;