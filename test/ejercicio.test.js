import { describe, expect, it, vi } from "vitest";
import {
  div,
  first,
  getChuckNorrisPhase,
  getPersonInfo,
  isEven,
  multiply,
  phrase,
  teachers,
  today,
} from "../src/ejercicio";

describe("Conjunto de test del ejercicio.js", () => {
  it("Cuando multiplico 2 x 3 tiene que dar 6", () => {
    const r = multiply(2, 3);
    // tu código aquí
  });

  it("Cuando multiplico 2 x 3 no tiene que dar 0", () => {
    // tu código aquí
  });

  it("Cuando multiplico 2 x 3 tengo que obtener un valor positivo o cero", () => {
    // tu código aquí
  });

  it("Cuando divido 2 a la 3 tiene que dar más o menos 0.666. Precisión de 2 decimales", () => {
    // tu código aquí
  });

  it("Cuando divido 6 entre 0 tiene lanzar una excepción 'No se puede dividir por 0' ", () => {
    // tu código aquí
  });

  it("Al llamar a la función first. El primer elemento de la lista ['juan', 'pedro', 'ivan'] debe ser 'juan'", () => {
    // tu código aquí
  });

  it("La llamada a la función first, deberá devolver algo truthy", () => {
    // tu código aquí
  });

  it("Al llamar a la función first. El primer elemento de la lista ['juan', 'pedro', 'ivan'] tiene que ser de tipo string", () => {
    // tu código aquí
  });

  it("La llamada a la función teachers debe devolver una array de longitud 3", () => {
    const r = teachers();
    // tu código aquí
    // tu código aquí
  });

  it("La llamada a la función teachers debe contener al profe 'Angel'", () => {
    // tu código aquí
  });

  it("La llamada a la función isEven debe retornar algo. Usa un espía", () => {
    // tu código aquí
  });

  it("La llamada a la función phrase debe devolver algo que comineza por 'Ha' y termina por '!'. Usa una regex ", () => {
    // tu código aquí
  });

  it("Sáltate este test para que nos se ejecute.", () => {
    expect(true).toBe(true);
  });

  it("La función teachers debe devolver un valor distinto de undefined", () => {
    // tu código aquí
  });

  it("La llamada a la función today deberá devolver una instancia de Date", () => {
    // tu código aquí
  });

  it("La llamada a la función getPersonInfo debe devolver un objeto con la propiedad 'age'", () => {
    // tu código aquí
  });

  it("La llamada a la función getPersonInfo debe devolver un objeto con la propiedad name = 'Juan", () => {
    // tu código aquí
  });

  it("La llamada a la función asincrona getChuckNorrisPhase, debe devolver un objeto con la propiedad 'value'", async () => {
    // tu código aquí
  });
});
