import { __ } from '@wordpress/i18n';

import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { TemplateArray } from '@wordpress/blocks';

import '../../styles/edit.scss';
import './styles/edit.scss';

const allowedBlocks = [ 'custom/cv-button' ];
const template = allowedBlocks.map( ( block ) => [
	block,
	{},
] ) as TemplateArray;

export const edit = () => {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<div className={ `${ blockProps.className }__inner` }>
				<InnerBlocks
					template={ template }
					allowedBlocks={ allowedBlocks }
				/>
			</div>
		</div>
	);
};
