type Props = {
	thumbnail: string
	title: string
	author: string
	profilePicture: string
}

const VideoPreview = ({
	thumbnail,
	title,
	author,
	profilePicture
}: Props) => {
	return (
		<div>
			<div>
				<img
					className="w-full h-full object-cover"
					alt={title}
					src={thumbnail}/>
			</div>
			<div className="flex mt-[12px]">
				<div className="w-[36px] h-[36px] min-w-[36px] mr-[12px] rounded-full overflow-hidden">
					<img
						src={profilePicture}
						alt={author}/>
				</div>
				<div className="flex flex-col">
					<h4 className="line-clamp-2	text-ellipsis overflow-hidden text-base text-yt-text-primary-dark font-medium">
						{title}
					</h4>
					<span className="text-sm text-yt-text-secondary-dark line-clamp-1 text-ellipsis overflow-hidden">
						{author}
					</span>
				</div>
			</div>
		</div>
	);
};

export default VideoPreview;