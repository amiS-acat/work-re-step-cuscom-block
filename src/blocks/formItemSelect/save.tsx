import { useBlockProps } from '@wordpress/block-editor';

export const save = ( props ) => {
	const { attributes } = props;
	const blockProps = useBlockProps.save( {
		className: 'wp-block-custom-form-item',
	} );

	const options = attributes.options.split( '\n' );

	return (
		<div { ...blockProps }>
			<label>
				<span>
					{ attributes.label }
					{ attributes.require && <span>*</span> }
				</span>
				<div className="wp-block-custom-form-item__select-wrap">
					<select
						name={ attributes.id }
						required={ attributes.require }
						className="wp-block-custom-form-item__select"
					>
						<option value="">選択してください</option>
						{ options.map( ( option, index ) => (
							<option value={ option } key={ index }>
								{ option }
							</option>
						) ) }
					</select>
				</div>
			</label>
		</div>
	);
};
