//estamos haciendo un prueba unitaria simple, en este caso de que Let debe ser mayor o igual a 10
//en la documentacion de jest esta casi todos los tipos de prueba que necesitemos
//dependiendo del paquete que hayamos instalado, puedes iniciar test con "npm run test:unit"


describe("Example Component", ()=>{
  test("Debe de ser mayor a 10",()=>{
    //Arreglo
    let value = 10;
    //Estimulo
    value = value + 2
    //Observar el resultado
    expect( value ).toBeGreaterThan(10)
  })
  
})
