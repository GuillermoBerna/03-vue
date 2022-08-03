//estamos probando el Contador de potencia, Counter.vue
import {shallowMount} from "@vue/test-utils"//se importa una herramienta de vue que en este caso monta el componente y lo prueba
import Counter from "@/components/Counter"//ademas tenemos que importar el componente desde la carpeta components

describe ("Counter Component", ()=>{
  
  test("este h2 debe tener el valor por defecto 'Counter' ",()=>{
 
    const wrapper = shallowMount(Counter)

    const  h2Value = wrapper.find("h2").text()

    expect(h2Value).toBe("Counter")

  })

  test("el valor por defecto debe ser 100 en el p",()=>{
     
    const wrapper = shallowMount(Counter)

    const pvalue = wrapper.find('[data-test="counter"]').text()
    
    //expect(pvalue[1].text()).toBe("100")
    expect(pvalue).toBe("100")
  })

})



