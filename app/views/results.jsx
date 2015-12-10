import React from 'react';
import ResultItem from '../partials/results/result-item.jsx';

export default class Results extends React.Component {
    render () {
        return (
            <ol style={{
                    paddingLeft: '0px'
                }}>
                { this.props.results.map(result => (
                    <ResultItem key={ result.title } title={result.title} url={ result.url } date={ result.date } summary={ result.desc } />
                ))}
            </ol>
        );
    }
}
