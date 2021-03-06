import React, { Component } from 'react';
import './style.css';

class SkillsBar extends Component {
    render() {
        return (
            <div>
                <div className='name'>
                    {this.props.name}
                    {''}
                </div>
                <progress value={this.props.value} max='100' />
            </div>
        );
    }
}
export default SkillsBar;