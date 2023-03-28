import React from 'react'

const Header = ( props ) =>
{
    return (
        <h2>{ props.course.name }</h2>
    )
}

const Part = ( props ) =>
{
    return (
        <p>
            { props.part.name } { props.part.exercises }
        </p>
    )
}

const Content = ( props ) =>
{
    return (
        <div>
            { props.course.parts.map( part =>
                <Part key={ part.id } part={ part } />
            ) }
        </div>
    )
}

const Total = ( props ) =>
{
    const total = props.course.parts.reduce( ( sum, part ) =>
    {
        console.log( 'sum:', sum )
        console.log( 'part:', part )
        return sum + part.exercises
    }, 0 )
    return (
        <p><strong>Total of { total } exercises</strong></p>
    )
}

const Course = ( props ) =>
{
    return (
        <div>
            <Header course={ props.course } />
            <Content course={ props.course } />
            <Total course={ props.course } />
        </div>
    )
}

export default Course
