import {shallowMount} from "@vue/test-utils"
import Indecision from "@/components/Indecision"

describe("indecision component", ()=>{

    let wrapper;

    beforeEach( ()=>{//con beforeEach, se monta el componente antes de la  prueba, luego se crea el test

        wrapper = shallowMount(Indecision)
    })
  
    test("debe de hacer match con el snapshot",()=>{
        expect(wrapper.html()).toMatchSnapshot()

    })










})