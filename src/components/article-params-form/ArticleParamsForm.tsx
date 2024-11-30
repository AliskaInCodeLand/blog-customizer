import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import { FormEvent, useState, useRef } from 'react';

import clsx from 'clsx';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import {
	fontSizeOptions,
	defaultArticleState,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontFamilyOptions,
	OptionType,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';

type ArticleParamsProps = {
	onSubmit: (stateForm: typeof defaultArticleState) => void;
};

export const ArticleParamsForm = ({ onSubmit }: ArticleParamsProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [stateForm, setStateForm] = useState(defaultArticleState);
	const containerRef = useRef<HTMLDivElement>(null);

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	useOutsideClickClose({
		isOpen: isOpen,
		rootRef: containerRef,
		onChange: setIsOpen,
	});

	const handleReset = () => {
		setStateForm(defaultArticleState);
		onSubmit(defaultArticleState);
	};

	const handleSubmit = (e: FormEvent) => {
		e?.preventDefault();
		onSubmit(stateForm);
	};

	const handleOptionChange = (name: string) => (option: OptionType) => {
		setStateForm({ ...stateForm, [name]: option });
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={toggleOpen} />
			<aside
				ref={containerRef}
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase align='left'>
						Задайте параметры
					</Text>

					<Select
						selected={stateForm.fontFamilyOption}
						options={fontFamilyOptions}
						title='шрифт'
						onChange={handleOptionChange('fontFamilyOption')}
					/>

					<RadioGroup
						name='размер шрифта'
						options={fontSizeOptions}
						selected={stateForm.fontSizeOption}
						onChange={handleOptionChange('fontSizeOption')}
						title='размер шрифта'
					/>

					<Select
						selected={stateForm.fontColor}
						options={fontColors}
						title='цвет шрифта'
						onChange={handleOptionChange('fontColor')}
					/>

					<Separator />

					<Select
						selected={stateForm.backgroundColor}
						options={backgroundColors}
						title='цвет фона'
						onChange={handleOptionChange('backgroundColor')}
					/>

					<Select
						selected={stateForm.contentWidth}
						options={contentWidthArr}
						title='цвет фона'
						onChange={handleOptionChange('contentWidth')}
					/>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={handleReset}
						/>
						<Button
							title='Применить'
							htmlType='submit'
							type='apply'
							onClick={handleSubmit}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};

// import React, { useCallback } from 'react';
// import { ArrowButton } from 'src/ui/arrow-button';
// import { Button } from 'src/ui/button';
// import { useState, useEffect, useRef } from 'react';
// import clsx from 'clsx';
// import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';
// import { Select } from 'src/ui/select';
// import {
// 	fontFamilyClasses,
// 	fontSizeOptions,
// 	defaultArticleState,
// 	fontColors,
// 	backgroundColors,
// 	contentWidthArr,
// 	fontFamilyOptions,
// 	OptionType,
// } from 'src/constants/articleProps';
// import { RadioGroup } from 'src/ui/radio-group';
// import { Separator } from 'src/ui/separator';

// import styles from './ArticleParamsForm.module.scss';

// type ArticleParamsFormProps = {
// 	onSubmit: (formState: typeof defaultArticleState) => void;
// };
// export const ArticleParamsForm = ({ onSubmit }: ArticleParamsFormProps) => {
// 	const [isOpen, setIsOpen] = useState(false);
// 	const [formState, setFormState] = useState(defaultArticleState);
// 	const containerRef = useRef<HTMLDivElement>(null);
// 	const handleToggle = () => {
// 		setIsOpen(!isOpen);
// 	};
// 	useOutsideClickClose({
// 		isOpen: isOpen,
// 		rootRef: containerRef,
// 		onChange: setIsOpen,
// 	});
// 	const handleReset = () => {
// 		setFormState(defaultArticleState);
// 		onSubmit(defaultArticleState);
// 	};
// 	const handleOptionChange = (name: string) => (option: OptionType) => {
// 		setFormState({ ...formState, [name]: option });
// 	};
// 	const handleSubmit = (event: React.FormEvent) => {
// 		event?.preventDefault();
// 		onSubmit(formState);
// 	};
// 	return (
// 		<>
// 			<ArrowButton isOpen={isOpen} onClick={handleToggle} />
// 			<aside
// 				ref={containerRef}
// 				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
// 				<form className={styles.form}>
// 					<h2 className={styles.title}>Задайте параметры</h2>
// 						<Select
// 							selected={formState.fontFamilyOption}
// 							title='Шрифт'
// 							options={fontFamilyOptions.map((option) => ({
// 								...option,
// 								title: option.title,
// 								value: option.value,
// 								className: option.className,
// 							}))}
// 							onChange={handleOptionChange('fontFamilyOption')}
// 						/>
// 						<RadioGroup
// 							selected={formState.fontSizeOption}
// 							options={fontSizeOptions.map((option) => ({
// 								...option,
// 								title: option.title,
// 								value: option.value,
// 								className: option.className,
// 							}))}
// 							name='Размер шрифта'
// 							title='Размер шрифта'
// 							onChange={handleOptionChange('fontSizeOption')}
// 						/>
// 						<Select
// 							selected={formState.fontColor}
// 							options={fontColors.map((color) => ({
// 								title: color.title,
// 								value: color.value,
// 								className: color.className,
// 								optionClassName: color.optionClassName,
// 							}))}
// 							title='Цвет шрифта'
// 							onChange={handleOptionChange('fontColor')}
// 						/>
// 						<Separator />
// 						<Select
// 							selected={formState.backgroundColor}
// 							options={backgroundColors.map((color) => ({
// 								title: color.title,
// 								value: color.value,
// 								className: color.className,
// 								optionClassName: color.optionClassName,
// 							}))}
// 							title='Цвет фона'
// 							onChange={handleOptionChange('backgroundColor')}
// 						/>
// 						<Select
// 							selected={formState.contentWidth}
// 							options={contentWidthArr.map((width) => ({
// 								title: width.title,
// 								value: width.value,
// 								className: width.className,
// 								optionClassName: width.optionClassName,
// 							}))}
// 							title='Ширина контента'
// 							onChange={handleOptionChange('contentWidth')}
// 						/>
// 						<div className={styles.bottomContainer}>
// 						<Button
// 							title='Сбросить'
// 							htmlType='reset'
// 							type='clear'
// 							onClick={handleReset}
// 						/>
// 						<Button
// 							title='Применить'
// 							htmlType='submit'
// 							type='apply'
// 							onClick={handleSubmit}
// 						/>
// 					</div>
// 				</form>
// 			</aside>
// 		</>
// 	);
// };
