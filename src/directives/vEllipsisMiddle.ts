// src/directives/ellipsisMiddle.ts
import { DirectiveBinding } from 'vue';

const ellipsisMiddle = {
	mounted(el: HTMLElement, binding: DirectiveBinding) {
		const text = binding.value;
		const maxWidth = el.clientWidth;

		const measureWidth = (text: string) => {
			const span = document.createElement('span');
			span.style.position = 'absolute';
			span.style.visibility = 'hidden';
			span.style.whiteSpace = 'nowrap';
			span.textContent = text;
			document.body.appendChild(span);
			const width = span.clientWidth;
			document.body.removeChild(span);
			return width;
		};

		const truncateText = (text: string, maxWidth: number) => {
			if (measureWidth(text) <= maxWidth) {
				return text;
			}

			let start = 0;
			let end = text.length;
			let truncated = text;

			while (measureWidth(truncated) > maxWidth) {
				if (start + 3 >= end) {
					break;
				}
				start++;
				end--;
				truncated = text.slice(0, start) + '...' + text.slice(end);
			}

			return truncated;
		};

		el.textContent = truncateText(text, maxWidth);
	},
};

export default ellipsisMiddle;
