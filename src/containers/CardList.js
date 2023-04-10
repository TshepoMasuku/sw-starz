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
                            hair={user.hairColor}
                            eye={user.eyeColor}
                            skin={user.skinColor}
                        />
                    );
                })
            }
        </div>
    )
}

//     "image": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
//     "name": "Luke Skywalker",
//     "height": 1.72,
//     "mass": 73,
//     "gender": "male",
//     "homeworld": "tatooine",
//     "bornLocation": "polis massa",
//     "species": "human",
//     "hairColor": "blond",
//     "eyeColor": "blue",
//     "skinColor": "light",
//     ------------------------------------------
//     "hairColor": "brown, later graying",
//     "eyeColor": "brown",
//     "skinColor": "light",