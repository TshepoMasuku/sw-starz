import React from 'react';
import Card from "./Card";

const griid = {
    margin: '10px 20px',
    display: 'grid',
    gridTemplate: "repeat(4, auto) / repeat(4, auto)",
    // gridTemplateColumns: "repeat(3, auto)",
    // gridTemplateRows: "repeat(3, auto)",
    gridGap: "15px",
}

export default function CardList({passData}) {
    return (
        <div style={griid}>
            {
            passData.map( (user,index) => {
                return(
                    <Card 
                        key={index}
                        name={user.name}
                        height={user.height}
                        mass={user.mass}
                        hair={user.hair_color}
                        skin={user.skin_color}
                        eye={user.eye_color}
                        birthyear={user.birth_year}
                        gender={user.gender}
                    />
                );
            })
            }
        </div>
    )
}
