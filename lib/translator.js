import React from 'react';
import {connect} from 'react-redux';

const returnTranslation = (labels, lang) => {
	return Object.keys(labels).reduce((acc, key) => {
		acc[key] = labels[key][lang];
		return acc;
	}, {});
}

export const translator = (labels) => {
	return (Component) => {
		class Translator extends React.Component {
			render() {
				const props = returnTranslation(labels, this.props.lang);
				return React.cloneElement(<Component />, {...props, ...this.props})
			}
		}

	  return connect(
			(state) => ({lang: state.lang}),
			null,
		)(Translator)
	}
}
