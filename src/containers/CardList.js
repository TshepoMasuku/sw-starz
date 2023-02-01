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
