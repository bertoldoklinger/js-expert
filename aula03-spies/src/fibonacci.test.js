// input: 3
// 0,1,1
// input: 5
// 0,1,1,2,3
const { createSandbox } = require('sinon');
const Fibonacci = require('./fibonacci');
const assert = require('assert')
const sinon = createSandbox()


  ; (async () => {
    {
      const fibonacci = new Fibonacci()
      const spy = sinon.spy(
        fibonacci,
        fibonacci.execute.name
      )


      for (const sequence of fibonacci.execute(3)) {}
      const expectedCallCount = 4
      assert.strictEqual(spy.callCount, expectedCallCount)
    }

    {
      const fibonacci = new Fibonacci()
      const spy = sinon.spy(
        fibonacci,
        fibonacci.execute.name
      )

      //generator pode ser convertido para array
      const results = [...fibonacci.execute(5)]
      const expectedCallCount = 6
      assert.strictEqual(spy.callCount, expectedCallCount)
      const { args } = spy.getCall(2)
      // espera que os parametros sejam chamados 
      const expectedParams = [3, 1, 2]
      assert.deepStrictEqual(args, expectedParams, "os arrays não são iguais")
      //espera que os resultados output sejam os esperados
      const expectedResults = [0, 1, 1, 2, 3]
      assert.deepStrictEqual(results, expectedResults, "os arrays não são iguais")
    }
  })()