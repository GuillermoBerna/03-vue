import {shallowMount} from "@vue/test-utils"
import Indecision from "@/components/Indecision"

//probamos diferentes tipos de pruebas para el indecision.vue
describe("indecision component", ()=>{

    let wrapper
    let clgSpy

    global.fetch = jest.fn()
    //fetchMock.doMock()

    beforeEach( ()=>{//con beforeEach, se monta el componente antes de la  prueba, luego se crea el test

        wrapper = shallowMount(Indecision)

        clgSpy = jest.spyOn(console, "log")

        jest.clearAllMocks()
    })

  
    test("debe de hacer match con el snapshot",()=>{
        expect(wrapper.html()).toMatchSnapshot()

    })

    test("escribir en el input no debe disparar nada (console.log)",async()=>{
       
       const getAnswerSpy = jest.spyOn(wrapper.vm,"getAnswer")

       const input = wrapper.find("input")
       await input.setValue("Hola Mundo")

       expect(clgSpy).toHaveBeenCalledTimes(1)
       except(getAnswerSpy).not.toHaveBeenCalled()


    })

    test("escribir el simbolo de ''?'' debe de disparar el getAnswer ",async()=>{
       
       const getAnswerSpy = jest.spyOn(wrapper.vm,"getAnswer")

       const input = wrapper.find("input")
       await input.setValue("?")

       expect(clgSpy).toHaveBeenCalledTimes(2)
       except(getAnswerSpy).toHaveBeenCalled()

    })

    test("pruebas en getAnswer",()=>{

    })

    test("pruebas en getAnswer - Fallo en la api",()=>{


    })










})