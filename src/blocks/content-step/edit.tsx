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
			<div className="mb-1">
				<div>STEP01</div>
				<RichText
					value={ attributes.step1 }
					onChange={ ( step1 ) => setAttributes( { step1 } ) }
				/>
			</div>
			<div className="mb-1">
				<div>STEP02</div>
				<RichText
					value={ attributes.step2 }
					onChange={ ( step2 ) => setAttributes( { step2 } ) }
				/>
			</div>
			<div className="mb-1">
				<div>STEP03</div>
				<RichText
					value={ attributes.step3 }
					onChange={ ( step3 ) => setAttributes( { step3 } ) }
				/>
			</div>
		</div>
	);
};
