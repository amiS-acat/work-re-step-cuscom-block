import { __ } from '@wordpress/i18n';

import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';

import './styles/edit.scss';

const allowedBlocks = [
	'core/image',
]

export const edit = (props) => {
	const { attributes, setAttributes } = props;

	return (
		<div {...useBlockProps()}>
			<h1 className='block-editor-custom-heading'>
				<RichText
					value={attributes.heading}
					onChange={(heading) => setAttributes({ heading })}
				/>
			</h1>
			<div>
				<InnerBlocks
					allowedBlocks={allowedBlocks}
				/>
			</div>
		</div>
	);
};
