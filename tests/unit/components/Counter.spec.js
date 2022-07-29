//estamos probando el Contador de potencia, Counter.vue
import {shallowMount} from "@vue/test-utils"//se importa una herramienta de vue que en este caso monta el componente y lo prueba
import Counter from "@/components/Counter"//ademas tenemos que importar el componente desde la carpeta components

describe ("Counter Component", ()=>{
    test("Debe hacer match con el snapshot", ()=>{
       
        const wrapper = shallowMount(Counter)//dentro de esta funcion de js, se uso shallowmount 
        expect(wrapper.html()).toMatchSnapshot()//y aca de saca un snapshot y compararlo con el renderizado de hmtl y estos deben coincidir
    })
})

//se crear un