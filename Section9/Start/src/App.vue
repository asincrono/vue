<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="setupBlue">Load Blue Template</button>
                <button @click="setupGreen">Load Green Template</button>
                <button @click="setupRed">Load Red Template</button>
                <hr> {{ selected }}
                <hr>
                <component :is="selected">{{ message }}</component>
            </div>
        </div>
    </div>
</template>

<script>
import Blue from './components/Blue.vue';
import Green from './components/Green.vue';
import Red from './components/Red.vue';

export default {
    data() {
        return {
            selected: 'appBlue',
            blueMessage: 'This isn\'t blue',
            greenMessage: 'Isn\'t this green?',
            redMessage: 'Blue goes here'

        }
    },
    components: {
        appBlue: Blue,
        appGreen: Green,
        appRed: Red
    },
    methods: {
        setupBlue() {
            this.selected = 'appBlue'
            this.message = this.blueMessage
        },
        setupGreen() {
            this.selected = 'appGreen'
            this.message = this.greenMessage

        },
        setupRed() {
            this.selected = 'appRed'
            this.red = this.redMessage
        }
    }

}
</script>