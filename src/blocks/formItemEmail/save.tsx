import { useBlockProps } from '@wordpress/block-editor';

export const save = ( props ) => {
	const { attributes } = props;
	const blockProps = useBlockProps.save( {
		className: 'wp-block-custom-form-item',
	} );

	return (
		<div { ...blockProps }>
			<label>
				<span>
					{ attributes.label }
					{ attributes.require && <span>*</span> }
				</span>
				<input
					type="email"
					name={ attributes.id }
					placeholder={ attributes.placeholder }
					required={ attributes.require }
					className="wp-block-custom-form-item__text"
				/>
			</label>
		</div>
	);
};
