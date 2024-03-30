import { useBlockProps } from '@wordpress/block-editor';

export const save = (props) => {
	const { attributes } = props;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div className={`${blockProps.className}-question`}>
				<div className={`${blockProps.className}-question__icon`}>Q</div>
				<div className={`${blockProps.className}-question__text`}>{attributes.question}</div>
			</div>
			<div className={`${blockProps.className}-answer`}>
				<div className={`${blockProps.className}-answer__icon`}>A</div>
				<div className={`${blockProps.className}-answer__text`}>{attributes.answer}</div>
			</div>
		</div>
	);
}
