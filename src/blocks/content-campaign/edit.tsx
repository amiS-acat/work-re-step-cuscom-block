import { __ } from '@wordpress/i18n';

import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

import '../../styles/edit.scss';
import './styles/edit.scss';

export const edit = ( props ) => {
	const { attributes, setAttributes } = props;

	return (
		<div { ...useBlockProps() }>
			<div>
				<h1 className="block-editor-custom-heading">
					<RichText
						value={ attributes.heading }
						onChange={ ( heading ) => setAttributes( { heading } ) }
					/>
				</h1>
				<div className="block-editor-custom-tag">
					<RichText
						value={ attributes.tagText }
						onChange={ ( tagText ) => setAttributes( { tagText } ) }
					/>
				</div>
				<RichText
					value={ attributes.text }
					onChange={ ( text ) => setAttributes( { text } ) }
				/>
				<div className="flex">
					<RichText
						value={ attributes.priceText }
						onChange={ ( priceText ) =>
							setAttributes( { priceText } )
						}
					/>
					<TextControl
						type="text"
						label={ __( '', 'beforePrice' ) }
						value={ attributes.beforePrice }
						onChange={ ( val ) =>
							setAttributes( { beforePrice: val } )
						}
					/>
					円/月
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
					value={ attributes.bottomText }
					onChange={ ( bottomText ) =>
						setAttributes( { bottomText } )
					}
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
		</div>
	);
};
