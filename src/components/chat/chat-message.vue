<template>
	<div class="chat_message_item">
		<div class="chat_message_time"><span>昨天 15:23</span></div>
		<div class="chat_message_box" :class="[[1,3,5,7,9].includes(item) ? 'chat_message_right' : 'chat_message_left']">
			<img class="chat_message_avatar" src="http://qn.kemean.cn/upload/202012/30/16092963327590h6gh0i4.jpg">
			<div class="chat_message_content">
				<div class="chat_message_content_text" v-if="item == 1 || item == 2">
					任何行业成本管理都是技术和经济的结合，房地产也是如此，成本管理部分首先是一个经济管理部门，要求他通宵技术和业务环节，用经济管理的方法来实现成本管理的职责。
				</div>
				<div class="chat_message_content_image" v-if="item == 3 || item == 4">
					<img src="http://qn.kemean.cn/upload/202012/30/16092963327590h6gh0i4.jpg">
					<span>主卧设计效果图.jpg</span>
				</div>
				<div class="chat_message_content_video" v-if="item == 5 || item == 6">
					<!-- <video src="http://qn.kemean.cn/upload/202012/30/16092963327590h6gh0i4.jpg" controls></video> -->
				</div>
				<div class="chat_message_content_task" v-if="item == 7 || item == 8">
					<div class="chat_message_content_task_box">
						<div class="task_name">主灯功能没有面积表达，多处卫生间没有功能表达</div>
						<div class="time">2020.04.30 - 2020.06.05</div>
						<div class="info">部位 <span>结构设计总说明</span></div>
						<div class="info">类型 <span>土地成本</span></div>
						<div class="info">属性 <span>功能</span></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			item: {
				type: [Object, Number],
				default: function() {
					return 0;
				},
			}
		},
		data() {
			return {};
		},
		created() {},
		mounted() {},
		methods: {},
	};
</script>

<style lang="scss">
	.chat_message_item {
		padding-bottom: 20px;

		.chat_message_time {
			display: flex;
			justify-content: center;
			padding-bottom: 20px;
			
			>span{
				font-size: rem(14);
				padding: 0 12px;
				color: #FFFFFF;
				height: rem(36);
				background-color: #e5e5e5;
				border-radius: 4px;
				line-height: rem(36);
			}
		}

		.chat_message_box {
			display: flex;
			align-items: flex-start;
			padding: 0 24px;

			.chat_message_avatar {
				width: 36px;
				height: 36px;
				flex-shrink: 0;
				border-radius: 50%;
				object-fit: cover;
			}

			.chat_message_avatar {
				width: 36px;
				height: 36px;
				flex-shrink: 0;
				border-radius: 50%;
				object-fit: cover;
			}

			.chat_message_content {
				.chat_message_content_text {
					background: #5074ee;
					border-radius: 4px;
					padding: 16px;
					line-height: 150%;
					color: #FFFFFF;
					font-size: 14px;
				}

				.chat_message_content_image {
					background: #5074ee;
					border-radius: 4px;
					padding: 16px 16px 8px 16px;
					display: flex;
					flex-direction: column;
					align-items: center;

					img {
						width: 140px;
						height: 140px;
						object-fit: cover;
						border-radius: 3px;
						cursor: pointer;
					}

					span {
						color: #FFFFFF;
						font-size: 12px;
						margin-top: 8px;
					}
				}

				.chat_message_content_video {
					video {
						max-width: 300px;
						max-height: 300px;
					}
				}

				.chat_message_content_task {
					background: #EEF1FF;
					padding: 16px 16px 16px 16px;

					.chat_message_content_task_box {
						width: 282px;
						background: #FFFFFF;
						border-left: 2px solid #EF3B3B;
						padding-left: 24px;
						padding-top: 12px;
						padding-bottom: 12px;
						cursor: pointer;

						.task_name {
							font-size: 14px;
							color: #333333;
						}

						.time {
							margin-top: 8px;
							font-size: 12px;
							color: #999999;
						}

						.info {
							font-size: 12px;
							color: #999999;
							display: flex;
							align-items: center;
							margin-top: 2px;

							span {
								margin-left: 8px;
								color: #333333;
							}
						}
					}
				}
			}
		}

		.chat_message_left {
			padding-right: 120px;

			.chat_message_content {
				margin-left: 25px;

				.chat_message_content_text,
				.chat_message_content_image,
				.chat_message_content_task {
					border-radius: 4px;
					background-color: #FFFFFF;
					color: #333333;
				}
			}
		}

		.chat_message_right {
			flex-direction: row-reverse;
			padding-left: 120px;

			.chat_message_content {
				margin-right: 25px;

				.chat_message_content_text,
				.chat_message_content_image,
				.chat_message_content_task {
					border-radius: 4px;
				}
			}
		}
	}
</style>
