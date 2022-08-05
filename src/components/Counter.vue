<template>
  <h2>{{customTitle}}</h2>
  <p >{{counter}} <sup>2</sup>={{squareCounter}}</p>
  <p data-test="counter">{{counter}}</p>
 
  <div class="buttons-container">
    <button @click="decrease">-1</button>
    <button @click="increase">+1</button>
  </div> 
  
</template>

<script>

export default {
    props: {
      title: String,
      start: {
        type:Number,
        default:100,
        validator(value){
          return value >= 0

        }
      }  
    },//se usa props para darle propiedades a elementos dentro del template, en este caso un nombre 
    //name:"RTX 2080"//al exportar desde el componente, se puede colocar cualquier nombre para que pueda ser visualizado desde la consola, en este caso saldra como rtx 2080
    data (){
      return{
        counter: this.start
      }
    },
    methods: {
      getSquareValue(){        
        return this.counter * this.counter
      },
      increase(){
         this.counter++//en este caso se uso un metodo con una funcion javascript para dar un calculo
      },
      decrease(){
         this.counter--
      }
    },
    computed: {
      squareCounter(){  
        return this.counter * this.counter
      },
      customTitle(){//se puede hacer de varias maneraas, con arreglos de Javas cript pero se debe preferir usan un codigo mas corto para mantener un orden
        return this.title || "Counter"
      }
    }
}
</script>

<style>
  button{
    background-color: #64bb64;
    border-radius: 5px;
    margin : 0 5px;
    color : white;

  }

  button:hover{
    background-color: #5a5;
    transition:0.3s ease-in-out ;
  }
</style>