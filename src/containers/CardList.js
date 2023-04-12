import React from 'react';
import Card from "../components/Card";

const gridStylez = {
    display: 'flex', 
    flexWrap:'wrap',
    gap: '16px',
}

export default function CardList({passData}) {
    return (
        <div style={gridStylez}>
            {
            passData.map( (user,index) => {
                return(
                    <Card 
                        key={index}
                        image={user.image}
                        name={user.name}
                        homeworld={user.homeworld}
                        species={user.species}
                        height={user.height}
                        gender={user.gender}
                        mass={user.mass}
                        hairColor={user.hairColor}
                        eyeColor={user.eyeColor}
                        skinColor={user.skinColor}
                    />
                );
            })
            }
        </div>
    )
}
