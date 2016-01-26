import React from 'react';
import moment from 'moment';

const format = "dddd, Do בMMMM YYYY";
moment.format = format;
moment.locale('he');

export default class ResultItem extends React.Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
        date: React.PropTypes.string.isRequired,
        summary: React.PropTypes.string.isRequired,
        author: React.PropTypes.string,
        unit: React.PropTypes.string,
        tags: React.PropTypes.array,
        search: React.PropTypes.func
    };
    tagSearch(tag) {
        if (this.props.search) {
            this.props.search(tag);
        }
    }
    render() {
        let optionalAuthor = this.props.unit ? this.props.unit + ' ' : '';
        optionalAuthor += this.props.author ? this.props.author + ' ' : '';
        return (
            <li style={{
                    listStyleType: 'none',
                    width: '530px'
                }}>
                <h3 style={{
                        marginBottom: '5px'
                    }}>
                    <a target="_blank" href={this.props.url} style={{
                            textDecoration: 'none'
                        }}>{this.props.title}</a>
                </h3>
                <span style={{
                        lineHeight: '1.3em'
                    }}>
                    <cite style={{
                            color: 'green',
                            display: 'block',
                            direction: 'ltr'
                        }}>{this.props.url}</cite>
                    <div><em>{`${moment(new Date(this.props.date)).format(format)} ${optionalAuthor}`}</em></div>
                    <span className="desc" dangerouslySetInnerHTML={{
                            __html: this.props.summary
                        }} />
                    { this.props.tags ? <ul style={{
                        listStyle: "none",
                        padding: "0",
                        display: "flex"
                    }}>
                    { this.props.tags.map(item => (
                        <li key={item} style={{
                            paddingLeft: "0.5em"
                        }}><a onClick={this.tagSearch.bind(this, item)} style={{
                            color: "green",
                            textDecoration: "none",
                            cursor: "pointer"
                        }}>{item}</a></li>
                    ))}
                    </ul> : undefined }
                </span>
            </li>
        );
    }
}
