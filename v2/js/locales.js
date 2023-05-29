/**
 * @module Locales
 * @desc This is a localization component, it is used to change and load different languages (for test)
 */
import l10N from "../lib/l10N.js"

// Locales component
const Locales = {
    name: 'Locales',
    emits: ['click'],
    template: `
    <div class="locales">
        <div class="locales-title">
            <p>Locals</p>
            <button class="locales-button" v-on:click="switchLang('en')">English</button>
            <button class="locales-button" v-on:click="switchLang('fr')">French</button>
            <button class="locales-button" v-on:click="switchLang('es')">Spanish</button>
            <button class="locales-button" v-on:click="switchLang('de')">German</button>
            <button class="locales-button" v-on:click="switchLang('pt')">Portuguese</button>
            <button class="locales-button" v-on:click="switchLang('ibo')">Igbo</button>
            <button class="locales-button" v-on:click="switchLang('pl')">Polish</button>
            <button class="locales-button" v-on:click="switchLang('fr')">Korean</button>
            <button class="locales-button" v-on:click="switchLang('ar')">Arabic</button>
            <button class="locales-button" v-on:click="switchLang('yor')">Yoruba</button>
        </div>
        <div class="locales" >
            <div id="ByUser">MESSAGE</div>
            <div id="TutoActivityTurtleBlocksJSactivity">MESSAGE</div>
            <div id="TutoOfflineContent">MESSAGE</div>
            <div id="LicenseTerms">MESSAGE</div>
            <div id="MISSING-TEXT">----</div>
        </div>
    </div>
    <br><br>
    `,
    mounted() {
        this.initL();
    },
    methods: {
        initL: function () {
            console.log(l10N);
            l10N.initLang();
        },
        switchLang: function (lng) {
            console.log(l10N);
            l10N.switchTo(lng);
        }
    },
};

if (typeof module !== 'undefined') module.exports = { Locales };
export default Locales;

