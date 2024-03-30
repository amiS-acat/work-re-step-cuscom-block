import { __ } from '@wordpress/i18n';

import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components'

import './styles/edit.scss';

export const edit = (props) => {
	const { attributes, setAttributes } = props;

	return (
		<div {...useBlockProps()}>
			<h2>FAQ</h2>
			<TextControl
				label={__('質問', 'faq')}
				value={attributes.question}
				onChange={(val) => setAttributes({ question: val })}
			/>
			<TextControl
				label={__('答え', 'faq')}
				value={attributes.answer}
				onChange={(val) => setAttributes({ answer: val })}
			/>
		</div>
	);
}
