import React from 'react'
import ResultTitle from './ResultTitle'
import "./result.css"
import ResultLink from './ResultLink'
import ResultParagraph from './ResultParagraph'

export default function SearchResult(props) {
    return (
        <div className='search-container' >
            <div className='card'>
                <ResultLink />
                <ResultTitle title={props.title} />
                <ResultParagraph />
            </div>
        </div>
    )
}