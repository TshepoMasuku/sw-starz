import React from 'react';
import Font, { Text } from 'react-font';

const cardStyle = {
    width: '280px',
    boxSizing: 'unset',
    background: 'linear-gradient(180deg, rgba(34, 33, 33, 0.800), rgba(255, 255, 255, 0.700))',
}

export default function Card(props) {
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
                    {props.name}
                </Text>
                <img 
                    src={props.image}
                    alt="StarzPic"
                    className="br4 h4 w4 dib ba b--black-05 pa2"
                    width="auto" height="100%"
                />
                {/* Jedi Characteristics */}
                <Font family="Redressed">
                    <p className="f3 fw4"> 
                        {props.homeworld && `Homeworld: ${props.homeworld}`} <br />
                        {props.species && `Species: ${props.species}`} <br />
                        {props.gender && `Gender: ${props.gender}`} <br />
                        {props.height && `Height: ${props.height}m`} <br />
                        {props.mass && `Mass: ${props.mass}kg`} <br />
                        {props.skinColor && `Skin Color: ${props.skinColor}`} <br />
                        {props.eyeColor && `Eye Color: ${props.eyeColor}`} <br />
                        {props.hairColor && `Hair Color: ${props.hairColor}`}
                    </p>
                </Font>
            </div>
        </article>
    )
}
