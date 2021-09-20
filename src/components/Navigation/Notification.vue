<template>
	<div :class="isNotification ? 'open notification' : 'notification'">
		<div class="notification-header">Manage Notifications</div>
		<div class="notifications">
			<div class="no-notification">
				No new notifications
			</div>
			<!-- <button class="notification-item">
				<h3 class="notification-title">Windows 11 Update!</h3>
				<p class="notification-description">
					Windows'unuzu en yeni sürüm olan 11 ile güncellemek ister misiniz? Hemen şimdi buraya tıklayarak işlemlere başlayabilirsiniz.
				</p>
			</button> -->
		</div>
		<div class="notification-menu">
			<button @click="collapse = !collapse">{{ collapse ? 'Expand' : 'Collapse' }}</button>
			<ul>
				<li v-for="(item, key) in menuList" :key="key">
					<button v-if="collapse && !item.collapse || !collapse" @click="toggleActiveClass(key, item.title)" :class="isActive.includes(key) && 'active'">
						<i :class="item.icon === 'bluetooth' ? 'fab fa-bluetooth' : `fas fa-${item.icon}`"></i>
						{{ item.title }}
					</button>
				</li>
			</ul>
			<div class="brightness" v-if="!collapse">
				<i class="fas fa-sun"></i>
				<div class="input-box">
					<input type="range" min="-100" max="0" v-model="brightness" />
					<span :style="'width: ' + selectedRangeWidth + '%'"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getLocal, setLocal } from '../../helpers/local';
	export default {
		name: 'Notification',
		props: ['isNotification'],
		data() {
			return {
				brightness: getLocal('windows-settings').brightness,
				collapse: false,
				selectedRangeWidth: getLocal('windows-settings').brightness ? 100 - Math.abs(getLocal('windows-settings').brightness) : 100,
				isActive: [],
				menuList: [
					{
						title: 'Location',
						icon: 'map-marked-alt',
						collapse: false
					},
					{
						title: 'Battery Saver',
						icon: 'battery-three-quarters',
						collapse: false
					},
					{
						title: 'Bluetooth',
						icon: 'bluetooth',
						collapse: false
					},
					{
						title: 'Night Light',
						icon: 'moon',
						collapse: false
					},
					{
						title: 'Mobile Hotspot',
						icon: 'mobile-alt',
						collapse: true
					},
					{
						title: 'Offline Mode',
						icon: 'plane',
						collapse: true
					},
					{
						title: 'Sharing',
						icon: 'share-square',
						collapse: true
					},
					{
						title: 'Settings',
						icon: 'cog',
						collapse: true
					},
					{
						title: 'Network',
						icon: 'network-wired',
						collapse: true
					},
					{
						title: 'Connect',
						icon: 'plug',
						collapse: true
					},
					{
						title: 'Reflect',
						icon: 'tv',
						collapse: true
					},
					{
						title: 'VPN',
						icon: 'link',
						collapse: true
					},
					{
						title: 'Focus Asist',
						icon: 'moon',
						collapse: true
					},
					{
						title: 'Screenshot',
						icon: 'window-restore',
						collapse: true
					},
				]
			}
		},
		methods: {
			toggleActiveClass(key, title) {
				if (!this.isActive.includes(key)) {
					this.isActive.push(key);
					
					if (title === 'Night Light') {
						document.body.setAttribute('night-light', true);
						const settings = getLocal('windows-settings');
						settings.nightLight = true;
						setLocal('windows-settings', settings);
					}
				} else {
					this.isActive.splice(this.isActive.indexOf(key), 1);
					document.body.setAttribute('night-light', false);
					const settings = getLocal('windows-settings');
					settings.nightLight = false;
					setLocal('windows-settings', settings);
				}
			},
		},
		watch: {
			brightness() {
				document.getElementById('brightness-overlay').style.opacity = Math.abs(this.brightness / 100);
				this.selectedRangeWidth = 100 - Math.abs(this.brightness);

				const settings = getLocal('windows-settings');
				settings.brightness = this.brightness;
				setLocal('windows-settings', settings);
			}
		},
		created() {
			if(getLocal('windows-settings').nightLight) {
				this.menuList.forEach((item, key) => item.title === 'Night Light' && this.isActive.push(key))
			}
		},
		mounted() {
			if(getLocal('windows-settings').brightness) {
				document.getElementById('brightness-overlay').style.opacity = Math.abs(getLocal('windows-settings').brightness / 100);
			}
		}
	}
</script>

<style lang="scss" scoped>
.notification {
	width: 400px;
	height: calc(100vh - 35px);
	position: fixed;
	top: 0;
	right: 0;
	transform: translateX(100%);
  background: rgba(#f0f4fa, 0.9);
	transition: 250ms;
	display: flex;
	flex-direction: column;
	z-index: 99999;

	&.open {
		transform: translateX(0);
	}

	&-header {
		text-align: right;
		padding: 10px;
		font-size: 14px;
		cursor: pointer;
		color: darkcyan;
	}

	.notifications {
		flex: 1;
		overflow-y: auto;
		padding: 0 10px;
		color: rgba(black, 0.8);

		.no-notification {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.notification-item {
			max-height: 120px;
			width: 100%;
			background: rgb(247, 243, 243);
			margin-bottom: 10px;
			display: flex;
			flex-direction: column;
			text-align: left;
			padding: 20px 10px;
			border-radius: 5px;
			opacity: 0.8;
			transition: 250ms;

			&:hover {
				opacity: 1;
			}

			.notification-title {
				width: 100%;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.notification-description {
				font-size: 12px;
				margin-top: 8px;
				line-height: 15px;
				font-weight: 400;
			}	
		}
	}

	&-menu {
		margin-top: auto;
		padding: 20px 10px;
		> button {
			font-size: 13px;
			color: darkcyan;
			margin-bottom: 10px;
		}

		ul {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: 5px;
			* {
				color: black;
			}
			li {
				button {
					background: rgba(#fff, 0.25);
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: space-between;
					padding: 7px;
					text-align: left;
					font-size: 12px;
					height: 60px;
					transition: 250ms;
					&.active {
						background: #005aff !important;
						color: #fff;
						i {
							color: #fff;
						}
					}
					i {
						margin-bottom: 5px;
						font-size: 15px;
						transition: 250ms;
					}
				}
			}
		}

		.brightness {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 15px;
			width: 70%;
			margin: 30px auto 0;
			i {
				font-size: 20px;
				opacity: 0.9;
			}
			.input-box {
				display: flex;
				align-items: center;
				flex: 1;
				position: relative;
				input {
					-webkit-appearance: none;
					width: 100%;
					height: 2px;
					background: #d3d3d3;
					outline: none;

					&::-webkit-slider-thumb {
						-webkit-appearance: none;
						appearance: none;
						width: 10px;
						height: 25px;
						border-radius: 10px;
						background: darkcyan;
						cursor: pointer;
					}
				}
				span {
					position: absolute;
					height: 2px;
					background: darkcyan;
				}
			}

		}
	}
}
.dark .notification {
  background: rgba(lighten(black, 10%), 0.9);

	.notifications {
		color: #f0f4fa;
		.notification-item {
  		background: rgba(lighten(black, 30%), 0.9);
		}
	}

	ul {
		* {
			color: #f0f4fa;
		}
		li button {
  		background: rgba(lighten(black, 30%), 0.9);
		}
	}

	.brightness i {
		color: #f0f4fa;
	}
}
</style>