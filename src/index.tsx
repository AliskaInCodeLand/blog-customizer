import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [stateBlog, setStateBlog] = useState(defaultArticleState);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': stateBlog.fontFamilyOption.value,
					'--font-size': stateBlog.fontSizeOption.value,
					'--font-color': stateBlog.fontColor.value,
					'--container-width': stateBlog.contentWidth.value,
					'--bg-color': stateBlog.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm onSubmit={setStateBlog} />
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
