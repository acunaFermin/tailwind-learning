module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{html,ts}"],
  theme: {
    //extender el tema que actualmente esta por defecto en tailwind, como por ejemplo, poner un background image
    extend: {
      //propiedades q extienden el tema van aca
      backgroundImage: (theme) => ({
        //si quiero utilizar esta extension, debo anteponer bg en la clase, que es la propiedad original
        //de esta fomra quedaria en el html class="bg-body-pattern"
        "body-pattern": "url('/assets/img/pattern.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
