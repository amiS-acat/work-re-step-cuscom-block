import { __ } from '@wordpress/i18n';

import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';
import { TemplateArray } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';

import './styles/edit.scss';
import '../../styles/edit.scss';

const allowedBlocks = [ 'custom/text' ];
const template = allowedBlocks.map( ( block ) => [
	block,
	{},
] ) as TemplateArray;

export const edit = ( props ) => {
	const { attributes, setAttributes } = props;

	return (
		<div { ...useBlockProps() }>
			<h1 className="block-editor-custom-heading">
				<InnerBlocks
					template={ template }
					allowedBlocks={ allowedBlocks }
					templateLock={ false }
				/>
			</h1>
			<div className="block-editor-custom-box">
				<RichText
					value={ attributes.text }
					onChange={ ( text ) => setAttributes( { text } ) }
				/>
			</div>
			<RichText
				value={ attributes.bottomText }
				onChange={ ( bottomText ) => setAttributes( { bottomText } ) }
			/>
			<div className="block-editor-custom-button">
				<RichText
					value={ attributes.buttonText }
					onChange={ ( buttonText ) =>
						setAttributes( { buttonText } )
					}
				/>
			</div>
		</div>
	);
};
