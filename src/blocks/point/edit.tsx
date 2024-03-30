import { __ } from '@wordpress/i18n';

import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { TemplateArray } from '@wordpress/blocks';

import './styles/edit.scss';

const allowedBlocks = [
	'custom/text'
]
const template = allowedBlocks.map((block) => [block, {}]) as TemplateArray;

export const edit = (props) => {
	const { attributes, setAttributes } = props;

	return (
		<div {...useBlockProps()}>
			<h1 className='block-editor-custom-heading'>
				<InnerBlocks
					allowedBlocks={allowedBlocks}
					template={template}
					templateLock={false}
				/>
			</h1>
			<RichText
				value={attributes.text}
				onChange={(text) => setAttributes({ text })}
			/>
		</div>
	);
};
