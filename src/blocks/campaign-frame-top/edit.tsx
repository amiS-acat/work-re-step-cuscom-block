import { __ } from '@wordpress/i18n';

import { useBlockProps, RichText } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

import './styles/edit.scss';

export const edit = ( props ) => {
	const { attributes, setAttributes } = props;
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<RichText
				value={ attributes.text }
				onChange={ ( text ) => setAttributes( { text } ) }
			/>
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
					onChange={ ( val ) => setAttributes( { afterPrice: val } ) }
				/>
				円
			</div>
		</div>
	);
};
