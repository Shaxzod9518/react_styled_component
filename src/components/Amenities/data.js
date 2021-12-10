import React from 'react'
import Park from '../Icons/Park'
import Kindergarden from '../Icons/Kindergarden'
import Metro from '../Icons/Metro'
import School from '../Icons/School'
import Mosque from '../Icons/Mosque'

export const amenities = {
	uz: [
		{
			id: 1,
			title: 'Metro',
			desc: 'Bodomzor bekati (1,5 km)<br/>Kichik stansiya (1,6 km)',
			image: <Metro />,
		},
		{
			id: 2,
			title: 'Bolalar bog’chasi',
			desc: "43-sonli bolalar bog'chasi (0,5 km)<br/>Podrastayka bolalar klubi (0,9 km)",
			image: <Kindergarden />,
		},
		{
			id: 3,
			title: 'Maktab',
			desc: '99-maktab (1 km) <br/>70-maktab (1,2 km)<br/>51-maktab (1 km)​',
			image: <School />,
		},
		{
			id: 4,
			title: 'Istirohat bo’glari',
			desc: "Tashkentland (1,6 km)<br/>Yapon bog'i (1,8 km)<br/>Akvapark (1,9 km)<br/>Hayvonot bog'i (3 km)<br/>Botanika bog'i (3 km)", //  "Disney"da 20 ga yaqin zamonaviy attraksionlar mavjud
			image: <Park />,
		},
		{
			id: 4,
			title: 'Masjid',
			desc: 'Bodamzor masjidi (1,2 km)<br/>Minor masjidi (1,7 km)<br/>Oqqo‘rg‘on masjidi (0,8 km)',
			image: <Mosque />,
		},
	],
	ru: [
		{
			id: 1,
			title: 'Метро',
			desc: 'Станция Бодомзор (1,5 км)<br/>Станция  Минор ( 1,6 км)',
			image: <Metro />,
		},
		{
			id: 2,
			title: 'Десткий садик',
			desc: 'Детский сад № 43 (0,5 км)<br/>Детский клуб Подрастайка (0,9 км)',
			image: <Kindergarden />,
		},
		{
			id: 3,
			title: 'Школа',
			desc: 'Школа № 99 (1 км)<br/>​Школа № 70 (1,2 км)​<br/>Школа № 51 (1 км)​',
			image: <School />,
		},
		{
			id: 4,
			title: 'Парки',
			desc: 'Ташкентленд (1,6 км)​<br/>Японский сад (1,8 км)<br/>Аквапарк (1,9 км)<br/>Зоопарк (3 км)<br/>Ботанический сад  (3 км)​',
			image: <Park />,
		},
		{
			id: 4,
			title: 'МЕЧЕТЬ',
			desc: '​Мечеть Бадамзар (1,2 км)<br/>Мечеть Минор (1,7 км)<br/>Оккурганская мечеть (0,8 км)​​',
			image: <Mosque />,
		},
	],
}
