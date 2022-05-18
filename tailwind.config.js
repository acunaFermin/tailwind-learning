module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	content: ["./src/**/*.{html,ts}"],
	theme: {
		//extender el tema que actualmente esta por defecto en tailwind, como por ejemplo, poner un background image
		extend: {
			//agrego una media query para movil
			screens: {
				xs: { max: "1200px" },
			},
			//propiedades q extienden el tema van aca
			backgroundImage: (theme) => ({
				//si quiero utilizar esta extension, debo anteponer bg en la clase, que es la propiedad original
				//de esta fomra quedaria en el html class="bg-body-pattern"
				"body-pattern": "url('/assets/img/pattern.png')",
				"banner": 		"url('/assets/img/bakbaner.png')",
			}),
			//ajuste del background position de la imagen del banner
			backgroundPosition:{
				'banner-position':"-200px -200px"
			},
			//colores agregados al tema que no vienen por defecto en tailwind
			colors: {
				"azul-claro": "#37bcf9",
				"azul-claro": "#0370b9",
			},
			animation: {
				"spin-low": "spin 3s linear infinite",
				"from-bellow": "fromBellow 500ms linear",
				"from-right": "fromRight 300ms linear",
				"bg-banner": "backBanner 10s linear infinite",
				"text-banner": "showBannerText 3s linear"
			},
			keyframes: {
				fromBellow: {
					"0%": { transform: "translateY(0%)" },
					"50%": { transform: "translateY(200%)" },
					"100%": { transform: "translateY(0%)" },
				},
				fromRight: {
					"0%": { transform: "translateX(300%)" },
					"100%": { transform: "translateX(0%)" },
				},
				backBanner: {
					"0%": { 'background-position': '0px 0px' },
					"50%": { 'background-position': '-200px -200px' },
					"100%": { 'background-position': '0px 0px' },
				},
				showBannerText: {
					"0%": { transform: 'translateX(-600%) scale(5,5)',
							opacity: 0.5 
					},
					"33%": { transform: 'translateX(600%) scale(3,5)',
							opacity: 0.5 
					},
					"66%": { transform: 'translateX(-600%) scale(1,5)',
							opacity: 0.5 
					},
					"100%": { transform: 'translateX(0%) scale(1)',
							opacity: 1 
					},
					
				}
			},
		},
	},
	variants: {
		//activa las animaciones para el group-hover
		animation: ["responsive", "hover", "group-hover"],
		animate: ["responsive", "hover", "group-hover"],
		extend: {},
	},
	plugins: [],
};
