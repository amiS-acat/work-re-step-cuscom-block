import { useBlockProps, RichText } from '@wordpress/block-editor';

export const save = ( props ) => {
	const { attributes } = props;
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<RichText.Content value={ attributes.text } />
		</div>
	);
};
