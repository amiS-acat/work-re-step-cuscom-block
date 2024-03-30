import { __ } from '@wordpress/i18n';

import { useBlockProps, RichText } from '@wordpress/block-editor';

export const edit = (props) => {
	const { attributes, setAttributes } = props;

	return (
		<span {...useBlockProps()}>
			<RichText
				value={attributes.text}
				onChange={(text) => setAttributes({ text })}
			/>
		</span>
	);
};
