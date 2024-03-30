import { useBlockProps, RichText } from '@wordpress/block-editor';

export const save = (props) => {
	const { attributes } = props;
	const blockProps = useBlockProps.save();

	return (
		<span {...blockProps}>
			<RichText.Content value={attributes.text} />
		</span>
	);
}
