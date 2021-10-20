import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import '@mdi/font/css/materialdesignicons.css';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
      },
      theme: {
        themes: {
          light: {
            primary: colors.blue.lighten5,
            secondary: colors.grey.darken1,
            accent: colors.pink.darken1,
            error: colors.red.accent3,
            background: '#38b6ff',
            info: colors.teal.darken1,
            text: colors.black,
          },
          dark: {
            primary: colors.blue.darken2,
            background: '#008037',
            info: colors.teal.lighten1,
            text: '#000000',
          },
        },
      },
});