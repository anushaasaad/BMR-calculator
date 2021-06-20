import React, { Component } from 'react'
import './bmr.css';
class bmr extends Component {
    constructor() {
        super();
        this.state = {
            gender: '',
            weight: '',
            age: '',
            heightfeet: '',
            heightinches: '',
            activity: '',
            bmr : ''
        }
    }
    handleage = (event) => {
        this.setState({age: event.target.value})
    }
    handleweight = (event) => {
        this.setState({weight: event.target.value})
    }
    handleheightfeet = (event) => {
        this.setState({heightfeet: event.target.value})
    }
    handleheightinches = (event) => {
        this.setState({heightinches: event.target.value})
    }
    handlegender = (event) => {
        this.setState({gender: event.target.value})
    }
    handleactivity = (event) => {
        this.setState({activity: event.target.value})
    }
    calculatebmr(){
        let age=this.state.age;
        let gender = this.state.gender;
        let heightFeet=this.state.heightfeet;
        let heightInches=this.state.heightinches;
        let weight=this.state.weight;
        if (age == '' || gender == '' || heightFeet == '' || heightInches == '' || weight == '' ){
            this.state({error:'All feilds are required'});
            return;
        }
        let bmrcalc='';
        let height=((heightFeet*30.48)+(heightInches*2.54));
        if(gender == 1){
            bmrcalc = 66+ (6.2 * weight) + (12.7 * height) - (6.76 * age);
        }else if(gender == 2){
            bmrcalc = 655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
        }
        this.setState({bmr:bmrcalc});
        this.setState({error: ''});

        console.log(this.state.weight)
    }
    render() {
        let error;
        if (this.state.error){
            error = <div className="error">{this.state.error}</div>
        }
        let result;
        if (this.state.result){
            result = <div className="result">{this.state.error}</div>
        }
        return (
            <div id="bmrcalc">
                <div className="form">
                    <h2>BMR &amp; Daily Calorie Calculator</h2>
                    {error}
                    <div className="inputwrap">
                        <label className="label">Gender</label>
                        <label><input type="radio" value={this.state.gender} className="genderF" checked={this.state.gender === '1'} onChange={this.state.handlegender} name="gender" value="1" />Female</label>
                        <label><input type="radio" value={this.state.gender} className="genderM" checked={this.state.gender === '2'} onChange={this.state.handlegender} name="gender" value="2" />Male</label>
                    </div>
                    <div className="inputwrap">
                        <label className="label">Weight in Pounds</label>
                        <input type="number" value={this.state.weight} onChange={this.state.handleweight} name="weight" className="weight" min="0" max="999" />
                    </div>
                    <div className="inputwrap">
                        <label className="label">Height in feet and inches</label>
                        <input type="number" value={this.state.heightfeet} onChange={this.state.heightfeet} name="heightFeet" className="heightFeet" min="0" max="8" /><input type="number" value={this.state.heightinches} onChange={this.state.handleheightinches} name="heightInches" className="heightInches" min="0" max="11" />
                    </div>
                    <div className="inputwrap">
                        <label className="label">Age in years</label>
                        <input type="number" value={this.state.age} onChange={this.state.handleage} className="age" name="age" min="0" max="120" />
                    </div>
                    <button type="button" onClick={() => this.calculatebmr}>Calculate BMR</button>
                    {result}
                    <div className="workout">
                        <div className="inputwrap">
                            <label className="label">Workout in a Week</label>
                            <select className="activity" value={this.state.activity} onChange={this.state.handleactivity} name="activity">
                                <option value="">Select your Activity</option>
                                <option value="1.2">Sedentary (Very little or no exercise, and desk job)</option>
                                <option value="1.375">Lightly Active (Light exercise 1 to 3 days per week)</option>
                                <option value="1.55">Moderately Active (Moderate exercise 3 to 5 days per week)</option>
                                <option value="1.725">Very Active (Heavy exercise 6 to 7 days per week)</option>
                                <option value="1.9">Extremely Active (Very intense exercise, and physical job, exercise multiple times per day)</option>
                            </select>
                        </div>
                        <button type="button">Calculate Calories</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default bmr;