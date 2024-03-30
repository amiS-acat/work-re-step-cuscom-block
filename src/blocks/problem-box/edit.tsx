import { __ } from '@wordpress/i18n';

import { RichText, useBlockProps } from '@wordpress/block-editor';

import './styles/edit.scss';

export const edit = ( props ) => {
	const { attributes, setAttributes } = props;

	return (
		<div { ...useBlockProps() }>
			<RichText
				value={ attributes.text }
				onChange={ ( text ) => setAttributes( { text } ) }
			/>
		</div>
	);
};
