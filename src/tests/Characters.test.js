import { cleanup, render, screen } from "@testing-library/react";
import Characters, { mensaje, suma } from "../components/Characters";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { configureStore } from "@reduxjs/toolkit";

describe("Characters component", () => {

    beforeEach(() => {
        render(<Provider store={store}> <Characters /></Provider>)
    })


    test("Debe devolver el mismo mensaje que se le ingresa al la funcion mensaje", () => {
        let response = mensaje("Saludo")
        expect(response).toBe("Saludo")
        expect(typeof response).toBe("string")
    })

    test("Si mando como parametro un numero a la funcion mensaje me debe devolver un mensaje generico de error", () => {
        let response = mensaje(2)

        expect(response).toBe("Dato no valido, no se pueden enviar numeros!")
    })

    test("Suma correctamente los numeros", () => {
        let response = suma(2, 2)
        expect(typeof response).not.toBe("string")
        expect(response).toBe(4)
    })

    test("Verificar que esta el texo del titulo", () => {

        let titulo = screen.getByText("TITULO")

        expect(titulo).toBeInTheDocument

    })
    test("Verificar que esta Harry", () => {

        let titulo = screen.getByText("Harry Potter")

        expect(titulo).toBeInTheDocument

    })


})