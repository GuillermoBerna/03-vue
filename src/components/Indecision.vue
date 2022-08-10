<template>
  <img v-if="img" :src="img" alt="bg">
  <div class="bg-dark"></div>
  
  <div class="indecision-container">

    <input v-model="question"
    type="text" 
    placeholder="Hazme Una Pregunta">
    <p>Recuerda colocar un Signo de Interrogacion (?) al final</p>

    <div v-if="isValidQuestion">
      <h2>{{question}}</h2>
      <h1>{{answer}}</h1>
    </div>
  </div>
</template>

<script>
//siempre recordar usar Data y luego establecer las propiedades de los objetos
export default {
  data(){
    return{
      question: null, 
      answer: null,
      img: null,
      isValidQuestion: false
    }
  },
  methods: {
    async getAnswer(){ //se uso Async para crear una sincronizacion con la Api de internet y crear los metodos para mostrarlos en el html
       this.answer = "Pensando..."
       const {image, answer} = await fetch("https://yesno.wtf/api").then(r => r.json())
       this.answer = answer === "yes" ? "Si!" : "No!"
       this.img = image
      }
  },
  //watch sirve para estar pendiente de los cambios que sufre los objetos y decirle que accion tomar cuando estos cambien
  //en este caso se reconoce cuando el usuario coloque un signo de interrogacion con javascript
  watch: {
    question(value, oldValue){

      this.isValidQuestion = false

      console.log({value})

      if( !value.includes('?')) return

      this.isValidQuestion = true

      this.getAnswer()

     }
  }

}
</script>

<style scoped >

    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>