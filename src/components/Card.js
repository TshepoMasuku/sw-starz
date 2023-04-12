import React from 'react';
import Font, { Text } from 'react-font';

const cardStyle = {
    width: '280px',
    boxSizing: 'unset',
    background: 'linear-gradient(180deg, rgba(34, 33, 33, 0.800), rgba(255, 255, 255, 0.700))',
}

export default function Card({
    name,image,homeworld,species,gender,
    height,mass,skinColor,eyeColor,hairColor
}) 
{
    const method2Capitalize = 
        typeof homeworld === "string" ? 
        (homeworld?.charAt(0).toUpperCase() + homeworld?.slice(1)) : 
        (homeworld?.join(" & "));

    return (
        <article style={cardStyle} className="mw5 center br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
                <Text
                    className="f2 mb1"
                    style={{margin: '0'}}
                    family="Redressed"
                    italic
                    weight={600}
                >
                    {name}
                </Text>
                <img 
                    src={image}
                    alt="StarzPic"
                    className="br4 h4 w4 dib ba b--black-05 pa2"
                    width="auto" height="100%"
                />
                {/* Jedi Characteristics */}
                <Font family="Redressed">
                    <p className="f3 fw4"> {/** */} 
                        {homeworld && `Homeworld: ${method2Capitalize}`} <br />
                        {species && `Species: ${species}`} <br />
                        {gender && `Gender: ${gender}`} <br />
                        {height && `Height: ${height}m`} <br />
                        {mass && `Mass: ${mass}kg`} <br />
                        {skinColor && `Skin Color: ${skinColor}`} <br />
                        {eyeColor && `Eye Color: ${eyeColor}`} <br />
                        {hairColor && `Hair Color: ${hairColor}`}
                    </p>
                </Font>
            </div>
        </article>
    )
}
