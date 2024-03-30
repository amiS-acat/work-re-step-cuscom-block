import { __ } from '@wordpress/i18n';

import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';
import { TemplateArray } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';

import './styles/edit.scss';
import '../../styles/edit.scss';

const allowedBlocks = [ 'custom/cards' ];
const template = allowedBlocks.map( ( block ) => [
	block,
	{},
] ) as TemplateArray;

export const edit = ( props ) => {
	const { attributes, setAttributes } = props;

	return (
		<div { ...useBlockProps() }>
			<h1 className="block-editor-custom-heading">
				<RichText
					value={ attributes.heading }
					onChange={ ( heading ) => setAttributes( { heading } ) }
				/>
			</h1>
			<InnerBlocks
				template={ template }
				allowedBlocks={ allowedBlocks }
				templateLock={ false }
			/>
		</div>
	);
};
