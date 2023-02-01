import React from 'react';
import Font, { Text } from 'react-font';

const cardStyle = {
    background: 'linear-gradient(180deg, rgba(34, 33, 33, 0.800), rgba(255, 255, 255, 0.700))',
    width: '280px',
}

export default function Card({name,height,mass,hair,skin,eye,birthyear,gender}) {
    return (
        <article style={cardStyle} className="mw5 center br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
                <Text
                    className="f2 mb1"
                    family="Redressed"
                    italic
                    weight={600}
                >
                    {name}
                </Text>
                <img 
                    src={`https://robohash.org/${name}.png`} 
                    alt="StarzPic"
                    className="br-100 h4 w4 dib ba b--black-05 pa2"
                    width="auto" height="50%"
                />
                {/* Jedi Characteristics */}
                <Font family="Redressed">
                    <p className="f4 fw4">
                        Birth Year: {birthyear} <br />
                        Gender: {gender} <br />
                        Height: {height}cm <br />
                        Mass: {mass}kg <br />
                        Hair Color: {hair} <br />
                        Skin Color: {skin} <br />
                        Eye Color: {eye} <br />
                    </p>
                </Font>
            </div>
        </article>
    )
}
