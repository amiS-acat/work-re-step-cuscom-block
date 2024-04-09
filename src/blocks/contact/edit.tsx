import { __ } from '@wordpress/i18n';

import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';
import { TemplateArray } from '@wordpress/blocks';

import './styles/edit.scss';

const allowedBlocks = [ 'custom/texts' ];
const template = allowedBlocks.map( ( block ) => [
	block,
	{},
] ) as TemplateArray;

export const edit = ( props ) => {
	const { attributes, setAttributes } = props;

	return (
		<div { ...useBlockProps() }>
			<div className="block-editor-custom-box grid grid-cols-2">
				<div>
					<RichText
						value={ attributes.date }
						onChange={ ( date ) => setAttributes( { date } ) }
					/>
					<RichText
						value={ attributes.time }
						onChange={ ( time ) => setAttributes( { time } ) }
					/>
				</div>
				<div>
					<InnerBlocks
						allowedBlocks={ allowedBlocks }
						template={ template }
						templateLock={ false }
					/>
				</div>
			</div>
		</div>
	);
};
