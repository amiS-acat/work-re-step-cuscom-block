import { useBlockProps } from '@wordpress/block-editor';

export const save = (props) => {
	const { attributes } = props;
	const blockProps = useBlockProps.save({
		className: 'wp-block-custom-form-item',
	});

	return (
		<div {...blockProps}>
			<label>
				<span>{attributes.label}</span>
				{attributes.require && (
					<span>*</span>
				)}
			</label>
			<input type='tel' name={attributes.id}
				placeholder={attributes.placeholder}
				pattern='\d{10,11}'
				required={attributes.require}
				className='wp-block-custom-form-item__text'
			/>
		</div>
	);
}
