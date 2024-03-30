import { __ } from '@wordpress/i18n';

import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { TemplateArray } from '@wordpress/blocks';

import './styles/edit.scss';

const allowedBlocks = [ 'custom/text' ];
const template = allowedBlocks.map( ( block ) => [
	block,
	{},
] ) as TemplateArray;

export const edit = ( props ) => {
	const { attributes, setAttributes } = props;
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<div className={ `${ blockProps.className }__inner` }>
				<h1 className="block-editor-custom-heading">
					<RichText
						value={ attributes.heading }
						onChange={ ( heading ) => setAttributes( { heading } ) }
					/>
				</h1>
				<div className="block-editor-custom-bubble">
					<RichText
						value={ attributes.bubbleText }
						onChange={ ( bubbleText ) =>
							setAttributes( { bubbleText } )
						}
					/>
				</div>
				<InnerBlocks
					allowedBlocks={ allowedBlocks }
					template={ template }
					templateLock={ false }
				/>
				<div className="flex gap-4">
					<div className="block-editor-custom-tag">
						<RichText
							value={ attributes.tag }
							onChange={ ( tag ) => setAttributes( { tag } ) }
						/>
					</div>
					<div className="block-editor-custom-input">
						<TextControl
							type="text"
							label={ __( '', 'beforePrice' ) }
							value={ attributes.beforePrice }
							onChange={ ( val ) =>
								setAttributes( { beforePrice: val } )
							}
						/>
						円/月→
					</div>
					<div className="block-editor-custom-input">
						<TextControl
							type="text"
							label={ __( '', 'afterPrice' ) }
							value={ attributes.afterPrice }
							onChange={ ( val ) =>
								setAttributes( { afterPrice: val } )
							}
						/>
						円
					</div>
				</div>
				<RichText
					value={ attributes.message }
					onChange={ ( message ) => setAttributes( { message } ) }
				/>
			</div>
		</div>
	);
};
