import React from 'react';
import {Card} from './../card/card.component';

export const CardList = props => {

    return (
        <div>
            {/* <h1>Hello {props.name}! You can do it</h1> */}
            {
                props.employees.map( employee => (
                    <Card key={employee.id} employee={employee}></Card>
                 ) )
            }
        </div>
    )
}
