//estamos probando el Contador de potencia, Counter.vue
import {shallowMount} from "@vue/test-utils"//se importa una herramienta de vue que en este caso monta el componente y lo prueba
import Counter from "@/components/Counter"//ademas tenemos que importar el componente desde la carpeta components



//en este prueba se probo los botones, titulos de html y valores predeterminados, se optimizo el codigo de manera que con wrapper (que monta el componente en la prueba) pueda usarse en todos los test sin necesitad de especificarlo en cada test
describe ("Counter Component", ()=>{

  let wrapper 

  beforeEach(()=>{
    wrapper = shallowMount(Counter)
  })
  
  test("este h2 debe tener el valor por defecto 'Counter' ",()=>{
 
    const  h2Value = wrapper.find("h2").text()

    expect(h2Value).toBe("Counter")

  })

  test("el valor por defecto debe ser 100 en el p",()=>{
    
    const pvalue = wrapper.find('[data-test="counter"]').text()
    
    expect(pvalue).toBe("100")
  })

  test("debe de disminuir o aumentar en 1 el valor del contador", async()=>{

    const [decreaseBtn, increaseBtn] = wrapper.findAll("button")
    
    await decreaseBtn.trigger("click")
    await decreaseBtn.trigger("click")
    await increaseBtn.trigger("click")
    await increaseBtn.trigger("click")
    await increaseBtn.trigger("click")

    const value = wrapper.find('[data-test="counter"]').text()

    expect( value ).toBe("101")

  })

  test("debe de establecer el valor por defecto con javascript",()=>{
    
    const { start } = wrapper.props()

    const value = wrapper.find('[data-test="counter"]').text()

    expect( Number(value) ).toBe( start )//except es lo que uno espera de la aplicacion

  }) 

    





})





