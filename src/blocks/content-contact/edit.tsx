import { __ } from '@wordpress/i18n';

import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';
import { TemplateArray } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components'

import './styles/edit.scss';
import '../../styles/edit.scss';

const allowedBlocks = [
	'custom/heading',
	'custom/contact',
]
const template = allowedBlocks.map((block) => [block, {}]) as TemplateArray;

export const edit = (props) => {
	const { attributes, setAttributes } = props;

	return (
		<div {...useBlockProps()}>
			<InnerBlocks
				template={template}
				allowedBlocks={allowedBlocks}
			/>
			<div className='block-editor-custom-button'>
				<RichText
					value={attributes.buttonText}
					onChange={(buttonText) => setAttributes({ buttonText })}
				/>
			</div>
		</div>
	);
};
