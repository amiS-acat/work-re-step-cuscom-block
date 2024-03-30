import { __ } from '@wordpress/i18n';

import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';
import { TemplateArray } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';

import './styles/edit.scss';

const allowedBlocks = [
	'custom/form-item-text',
	'custom/form-item-email',
	'custom/form-item-tel',
	'custom/form-item-select',
];
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
			<TextControl
				label={ __( 'formType', 'formType' ) }
				value={ attributes.formType }
				onChange={ ( val ) => setAttributes( { formType: val } ) }
				readOnly
			/>
			<InnerBlocks
				template={ template }
				allowedBlocks={ allowedBlocks }
				templateLock={ false }
			/>
			<RichText
				value={ attributes.checkboxText }
				onChange={ ( checkboxText ) =>
					setAttributes( { checkboxText } )
				}
			/>
			<div className="block-editor-custom-button">
				<RichText
					value={ attributes.submitText }
					onChange={ ( submitText ) =>
						setAttributes( { submitText } )
					}
				/>
			</div>
		</div>
	);
};
