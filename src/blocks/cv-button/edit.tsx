import { __ } from '@wordpress/i18n';

import { useBlockProps, RichText } from '@wordpress/block-editor';

import './styles/edit.scss';

export const edit = ( props ) => {
	const { attributes, setAttributes } = props;

	return (
		<div { ...useBlockProps() }>
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
