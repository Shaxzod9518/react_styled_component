import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import axios from 'axios'
import Styled from './styled-components'
import { useTranslation } from 'react-i18next'

const Modal = ({ ...props }, ref) => {
	const [isOpen, setIsOpen] = useState(false)
	const [isThankOpen, setIsThankOpen] = useState(false)

	const form = useRef()

	useImperativeHandle(ref, () => ({
		show() {
			setIsOpen(true)
		},
	}))

	const handleHideModal = () => {
		setIsOpen(false)
	}

	axios.defaults.withCredentials = true

	const handleStoreLead = (event) => {
		event.preventDefault()
		const formElements = event.target.elements

		axios
			.post('https://api.shinamhome.uz/leads/create', {
				name: formElements['name'].value,
				phone: formElements['phone'].value,
			})
			.then((response) => {
				setIsThankOpen(true)
				setTimeout(() => setIsOpen(false), 3000)
			})
			.catch((error) => {
				if (error.response) {
					// Request made and server responded
					console.log(error.response.data)
					console.log(error.response.status)
					console.log(error.response.headers)
				} else if (error.request) {
					// The request was made but no response was received
					console.log(error.request)
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log('Error', error.message)
				}
			})
	}

	const handleThankOpen = () => {
		setIsThankOpen(false)
		setIsOpen(false)
	}

	const { t } = useTranslation()

	return (
		<Styled.ModalBody active={isOpen} {...props}>
			<Styled.Container>
				{isThankOpen ? (
					<Styled.Box>
						<Styled.Paragraph>
							{t('Iltimosingiz uchun rahmat')}
						</Styled.Paragraph>
						<Styled.ThankBtn onClick={handleThankOpen}>
							{t('Bosh sahifaga qaytish')}
						</Styled.ThankBtn>
					</Styled.Box>
				) : (
					<Styled.Modal>
						<Styled.ModalLogo>
							<div>
								<Styled.LogoImg src="images/Modal/logo.svg" />
							</div>
						</Styled.ModalLogo>
						<Styled.ModalForm>
							<Styled.FormCloseBtn>
								<img
									title="close"
									src="/images/Modal/close.svg"
									alt="Please wait!"
									onClick={() => handleHideModal()}
								/>
							</Styled.FormCloseBtn>
							<form onSubmit={handleStoreLead} ref={form}>
								<Styled.FormTitle>
									{t("BIZ SIZGA QO'NG'IROQ QILAMIZ")}
								</Styled.FormTitle>
								<Styled.FormDesc>
									{t('Raqamingizni qoldiring va biz')}
									<br />{' '}
									{t("biz sizga qayta qo'ng'iroq qilamiz.")}
								</Styled.FormDesc>
								<Styled.FormInpt
									type="text"
									placeholder="Имя"
									name="name"
									required
								/>
								<Styled.FormInpt
									type="tel"
									placeholder="Телефон"
									maxlength="13"
									name="phone"
									required
								/>
								<Styled.FormBtn type="submit">
									{t("Men qo'ng'iroqni kutmoqdaman")}
								</Styled.FormBtn>
								<Styled.FormDevider data-content={t('Yoki')} />
								<Styled.FormTel
									href="tel: +998998535555"
									target="_blank"
								>
									{t("Hozir qo'ng'iroq qiling")}
								</Styled.FormTel>
								<Styled.FormDescTwo>
									{t(
										"E'tibor bering, xizmatning ishlash tartibi\n" +
											"9:00 dan boshlab qo'llab -quvvatlash"
									)}
									{t('soat 21:00 gacha')}
								</Styled.FormDescTwo>
							</form>
						</Styled.ModalForm>
					</Styled.Modal>
				)}
			</Styled.Container>
		</Styled.ModalBody>
	)
}

export default forwardRef(Modal)
