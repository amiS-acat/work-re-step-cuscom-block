import { useBlockProps, RichText } from '@wordpress/block-editor';

export const save = ( props ) => {
	const { attributes } = props;
	const blockProps = useBlockProps.save();

	return (
		<h2 { ...blockProps }>
			<RichText.Content value={ attributes.buttonText } />
		</h2>
	);
};
